import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";
import SiteScripts from "@/components/SiteScripts";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative">
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
