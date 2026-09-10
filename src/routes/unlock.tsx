import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Lock, HardHat } from "lucide-react";

import { unlockSite } from "@/lib/gate.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logoMark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/unlock")({
  head: () => ({
    meta: [
      { title: "Under Construction | Damoder Immigration Services" },
      { name: "description", content: "This site is under construction. Authorised access only." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: UnlockPage,
});

function UnlockPage() {
  const router = useRouter();
  const unlock = useServerFn(unlockSite);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await unlock({ data: { username, password } });
      if (res.ok) {
        await router.invalidate();
        router.navigate({ to: "/" });
      } else {
        setError("Incorrect username or password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-md">
        <div className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border">
            <img src={logoMark} alt="Damoder Immigration Services" className="size-9 object-contain" />
          </span>
          <div>
            <p className="font-display text-lg font-bold uppercase leading-none text-brand-deep">
              Damoder
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brand">Immigration Services</p>
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-ember">
              <HardHat className="size-3.5" /> Site under construction
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          This preview is private. Enter the access credentials shared with you to view the site.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}
          <Button type="submit" className="w-full gap-2" disabled={loading}>
            <Lock className="size-4" />
            {loading ? "Checking…" : "Unlock preview"}
          </Button>
        </form>
      </div>
    </div>
  );
}
