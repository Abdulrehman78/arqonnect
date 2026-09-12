import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";
import SiteScripts from "@/components/SiteScripts";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import GsapProvider from "@/components/ui/GsapProvider";
import { PRIORITY_VIDEO } from "@/lib/preloadVideos";

export const metadata: Metadata = {
  title: {
    default: "ArQonnect — AI Twin Platform for Customer Conversations",
    template: "%s | ArQonnect",
  },
  description:
    "ArQonnect helps businesses manage WhatsApp, Instagram, Messenger and website chat in one inbox — answered by AI you control, with human handoff built in.",
  metadataBase: new URL("https://www.arqonnect.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("arq-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);}else{document.documentElement.setAttribute("data-theme","light");}}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`,
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
        <link
          rel="preload"
          href={PRIORITY_VIDEO}
          as="video"
          type="video/mp4"
          fetchPriority="high"
        />
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
      </body>
    </html>
  );
}
