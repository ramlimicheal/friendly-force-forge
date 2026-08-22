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
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dhamodaran Immigration | Overseas Manpower Recruitment & MEA Apostille" },
      {
        name: "description",
        content:
          "Government-licensed Indian overseas manpower consultancy (MEA Lic. B-0824/TN/PER/1000+/5/9821/2021). Bulk recruitment, trade testing, MEA apostille & work permits for Schengen Europe, Gulf GCC & USA.",
      },
      {
        name: "keywords",
        content:
          "overseas recruitment agency, manpower consultancy india, MEA registered recruitment agency, gulf jobs, poland work permit, germany blue card, visa attestation chennai, trade testing center india, damoder immigration",
      },
      { name: "author", content: "Dhamodaran Immigration & Overseas Manpower Consultancy" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: "Dhamodaran Immigration" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Dhamodaran Immigration | Overseas Manpower Recruitment & MEA Apostille" },
      {
        property: "og:description",
        content:
          "MEA-registered overseas manpower consultancy. Sourcing, trade testing, apostille legalisation, and deployment across 24+ global destinations.",
      },
      { property: "og:url", content: "https://dhamodaranimmigration.com" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhamodaran Immigration | Overseas Manpower Consultancy" },
      {
        name: "twitter:description",
        content:
          "MEA Lic. B-0824/TN/PER/1000+/5/9821/2021. Direct employer overseas recruitment & statutory visa legalisation.",
      },
      { name: "theme-color", content: "#1A2C53" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://dhamodaranimmigration.com" },
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
          name: "Dhamodaran Immigration & Overseas Manpower Consultancy",
          alternateName: "Damoder Immigration Services",
          url: "https://dhamodaranimmigration.com",
          logo: "https://dhamodaranimmigration.com/favicon.ico",
          description:
            "Government-licensed Indian overseas manpower recruitment consultancy and statutory visa legalisation agency.",
          license: "B-0824/TN/PER/1000+/5/9821/2021",
          telephone: "+91-94440-12345",
          email: "contact@dhamodaranimmigration.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mount Road / Anna Salai Business District",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600002",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.0827,
            longitude: 80.2707,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:30",
              closes: "18:30",
            },
          ],
          areaServed: ["IN", "SA", "AE", "QA", "KW", "OM", "BH", "PL", "DE", "MT", "HR", "RO", "HU", "US"],
          sameAs: [
            "https://www.linkedin.com/company/dhamodaran-immigration",
          ],
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
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster position="top-center" richColors />
      <ChatBot />
    </QueryClientProvider>
  );
}
