import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";
import SiteScripts from "@/components/SiteScripts";
import Preloader from "@/components/Preloader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieNotice from "@/components/CookieNotice";
import SmoothScroll from "@/components/ui/SmoothScroll";
import GsapProvider from "@/components/ui/GsapProvider";

const SITE_URL = "https://www.arqonnect.io";

export const metadata: Metadata = {
  title: {
    default: "ArQonnect — AI Twin Platform for Customer Conversations",
    template: "%s | ArQonnect",
  },
  description:
    "ArQonnect helps businesses manage WhatsApp, Instagram, Messenger and website chat in one inbox — answered by AI you control, with human handoff built in.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ArQonnect",
    url: SITE_URL,
    title: "ArQonnect — AI Twin Platform for Customer Conversations",
    description:
      "One inbox for WhatsApp, Instagram, Messenger and web chat. AI replies you control, with human handoff.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArQonnect — AI Twin Platform for Customer Conversations",
    description:
      "One inbox for WhatsApp, Instagram, Messenger and web chat. AI replies you control, with human handoff.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("arq-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);}else{document.documentElement.setAttribute("data-theme","dark");}}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.svg?v=5" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/icon.svg?v=5" />
      </head>
      <body className="relative">
        <SmoothScroll />
        <GsapProvider />
        <Preloader />
        <SiteChrome />
        <div className="relative z-10">
          <Nav />
          {children}
          <Footer />
        </div>
        <SiteScripts />
        <CookieNotice />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
