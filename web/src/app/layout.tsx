import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteSidebar } from "@/components/site-sidebar";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import "./monarch/design.css";
import { MonarchNavigation } from "./monarch/navigation";

const inter = localFont({
  src: "./monarch/fonts/IBMPlexSans-Regular.woff2",
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./monarch/fonts/IBMPlexSans-SemiBold.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
});

export const revalidate = 900;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "geopolitical intelligence",
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-background text-foreground monarch-product" data-monarch-product="georisk">
        <MonarchNavigation />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader />
          <SiteSidebar />
          <div className="min-h-screen lg:pl-64">
            <main className="min-h-screen pt-16">{children}</main>
          </div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
