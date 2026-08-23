import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "dis_site_gate";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function sign(value: string) {
  const secret = process.env["SESSION_SECRET"] ?? "";
  return createHmac("sha256", secret).update(value).digest("hex");
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function isValidToken(token: string | undefined) {
  if (!token) return false;
  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature) return false;
  const ts = Number(issuedAt);
  if (!Number.isFinite(ts) || Date.now() - ts > MAX_AGE * 1000) return false;
  return safeEqual(signature, sign(issuedAt));
}

export const checkSiteAccess = createServerFn({ method: "GET" }).handler(async () => {
  const username = process.env["SITE_USERNAME"];
  const password = process.env["SITE_PASSWORD"];
  // Gate disabled when credentials are not configured.
  if (!username || !password) return { unlocked: true };
  return { unlocked: isValidToken(getCookie(COOKIE_NAME)) };
});

export const unlockSite = createServerFn({ method: "POST" })
  .inputValidator((data: { username: string; password: string }) => ({
    username: String(data?.username ?? ""),
    password: String(data?.password ?? ""),
  }))
  .handler(async ({ data }) => {
    const username = process.env["SITE_USERNAME"] ?? "";
    const password = process.env["SITE_PASSWORD"] ?? "";

    const ok = safeEqual(data.username.trim(), username) && safeEqual(data.password, password);
    if (!ok) return { ok: false as const };

    const issuedAt = String(Date.now());
    setCookie(COOKIE_NAME, `${issuedAt}.${sign(issuedAt)}`, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
      maxAge: MAX_AGE,
    });
    return { ok: true as const };
  });
