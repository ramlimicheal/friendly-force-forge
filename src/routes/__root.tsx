import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ScrollProgressBar } from "@/components/motion-primitives";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { ChatBot } from "@/components/chat-bot";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-brand-deep-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-brand-deep-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  beforeLoad: async ({ location }) => {
    // Allow the unlock page itself
    if (location.pathname === "/unlock") return;
    const { unlocked } = await checkSiteAccess();
    if (!unlocked) {
      throw redirect({ to: "/unlock" });
    }
  },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Damoder Immigration Services | Visa & Immigration Consultants Hyderabad" },
      {
        name: "description",
        content:
          "Damoder Immigration Services (HQ: Hyderabad, India). Expert counseling & visa support for New Zealand, Germany, Canada, Australia, UK, and Europe: PR Visas, Study Visas, Work Permits, Visitor & Investor Visas.",
      },
      {
        name: "keywords",
        content:
          "damoder immigration services, best immigration consultants hyderabad, new zealand visa consultants hyderabad, germany job seeker visa hyderabad, canada pr consultants hyderabad, australia study visa hyderabad, pr visa hyderabad, tukkuguda visa agency",
      },
      { name: "author", content: "Damoder Immigration Services" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: "Damoder Immigration Services" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Damoder Immigration Services | Hyderabad, India" },
      {
        property: "og:description",
        content:
          "Seamless and stress-free visa process to study, work, or settle in New Zealand, Germany, Canada, Australia, UK, and Europe.",
      },
      { property: "og:url", content: "https://dis.ind.in" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Damoder Immigration Services" },
      {
        name: "twitter:description",
        content:
          "Trusted Visa & Immigration Consultants in Hyderabad. PR, Study, Work & Visitor Visas for New Zealand, Germany, Canada & Australia.",
      },
      { name: "theme-color", content: "#1A2C53" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["EmploymentAgency", "LocalBusiness"],
          name: "Damoder Immigration Services",
          alternateName: "Damoder Immigration Services Hyderabad",
          url: "https://dis.ind.in",
          logo: "https://dis.ind.in/favicon.png",
          description:
            "Premier visa and immigration consultancy based in Hyderabad, India, providing seamless solutions for PR, Study, Work, and Visitor visas across New Zealand, Germany, Canada, Australia, the UK, and Europe.",
          telephone: ["+91-8639516954", "+91-9502051954"],
          email: "mail2damoder@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "6F6F+74G, Tukkuguda",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "501359",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.2403,
            longitude: 78.4983,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:30",
              closes: "18:30",
            },
          ],
          areaServed: ["IN", "NZ", "DE", "CA", "AU", "GB", "US", "PL", "MT", "HR", "RO", "HU"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgressBar />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 overflow-x-hidden">
          <div>
            <Outlet />
          </div>
        </main>
        <SiteFooter />
      </div>
      <Toaster position="top-center" richColors />
      <ChatBot />
    </QueryClientProvider>
  );
}
