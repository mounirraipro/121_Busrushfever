import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseLoader from './components/AdSenseLoader';
import CookieConsentBanner from './components/CookieConsentBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bus Rush Fever – Free Online Browser Game",
    template: "%s | Bus Rush Fever",
  },
  description:
    "Play Bus Rush Fever online free — Play Bus Rush Fever free online — no download, no account needed. No download, no account needed.",
  keywords: [
    "Bus Rush Fever",
    "Bus Rush Fever online",
    "Bus Rush Fever free",
    "free online game",
    "browser game",
    "casual game",
  ],
  authors: [{ name: "Bus Rush Fever Team" }],
  creator: "Bus Rush Fever",
  publisher: "Bus Rush Fever",
  metadataBase: new URL("https://busrushfever.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bus Rush Fever",
    title: "Bus Rush Fever – Free Online Browser Game",
    description:
      "Play Bus Rush Fever free in your browser — Play Bus Rush Fever free online — no download, no account needed.",
    url: "https://busrushfever.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bus Rush Fever – Free Online Browser Game",
    description:
      "Play Bus Rush Fever free online — no download, no account needed. Play free online!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
        <head>
        <AdSenseLoader publisherId={publisherId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bus Rush Fever",
              url: "https://busrushfever.com",
              description:
                "Play Bus Rush Fever free online — no download, no account needed.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://busrushfever.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bus Rush Fever",
              url: "https://busrushfever.com",
              logo: {
                "@type": "ImageObject",
                url: "https://busrushfever.com/og-image.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://busrushfever.com/contact",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
