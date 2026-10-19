const SITE_URL = "https://www.arqonnect.io";

/** Organization + WebSite + SoftwareApplication for rich results / AI crawlers. */
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "ArQonnect",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        email: "Support@arqonnect.io",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4A, R Block Johar Town",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        sameAs: [],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "Support@arqonnect.io",
            availableLanguage: ["English", "Urdu"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "ArQonnect",
        description:
          "AI Twin Platform for customer conversations across WhatsApp, Instagram, Messenger and website chat.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "ArQonnect",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description:
          "Unified inbox and AI Business Twin for WhatsApp, Instagram, Messenger and web chat, with human handoff and CRM.",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "499",
          highPrice: "1499",
          priceCurrency: "USD",
          offerCount: 3,
          url: `${SITE_URL}/pricing`,
        },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
