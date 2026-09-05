import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";
import SiteScripts from "@/components/SiteScripts";
import Preloader from "@/components/Preloader";
import { BOOT_VIDEOS, PRIORITY_VIDEO } from "@/lib/preloadVideos";

export const metadata: Metadata = {
  title: {
    default:
      "ArQonnect | AI Automation Agency — AI Chatbots, Voice Agents & Business Automation",
    template: "%s | ArQonnect",
  },
  description:
    "ArQonnect is an AI automation agency building AI chatbots, AI voice agents, business automation, CRM integration and digital transformation for companies across the US, UK, Canada, Australia and Europe.",
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
        {BOOT_VIDEOS.filter((src) => src !== PRIORITY_VIDEO).map((src) => (
          <link key={src} rel="preload" href={src} as="video" type="video/mp4" />
        ))}
      </head>
      <body className="relative">
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
