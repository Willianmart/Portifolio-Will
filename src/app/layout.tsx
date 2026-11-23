import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SkipLink } from "@/components/layout/SkipLink";
import { PageLoader } from "@/components/animations/PageLoader";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { profile, seo } from "@/data/profile";
import { withBasePath } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = profile.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${profile.name}`,
  },
  description: seo.description,
  authors: [{ name: profile.name }],
  creator: profile.name,
  applicationName: profile.brand,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: profile.brand,
    title: seo.title,
    description: seo.description,
    // Relative to metadataBase (do not prepend basePath again)
    images: [
      {
        url: profile.ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.brand} — ${profile.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [profile.ogImage],
  },
  icons: {
    // Static export needs basePath on relative icon hrefs
    icon: [{ url: withBasePath("/favicon.svg"), type: "image/svg+xml" }],
    apple: [{ url: withBasePath("/images/avatar-willian.svg") }],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090D" },
    { media: "(prefers-color-scheme: light)", color: "#F4F5F8" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider>
          <SkipLink />
          <PageLoader />
          <ScrollProgress />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
