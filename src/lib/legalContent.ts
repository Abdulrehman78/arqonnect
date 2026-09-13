export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  updated?: string;
  blocks: LegalBlock[];
};

export const LEGAL_LINKS: { href: string; label: string }[] = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/cookies", label: "Cookie Policy" },
  { href: "/legal/refund", label: "Refund Policy" },
  { href: "/legal/acceptable-use", label: "Acceptable Use" },
  { href: "/legal/dpa", label: "Data Processing Agreement" },
  { href: "/legal/data-deletion", label: "Data Deletion" },
];

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "How ArQonnect collects, uses, shares and protects personal information for business customers and end-users.",
    updated: "2026-05-07",
    blocks: [
      {
        type: "p",
        text: 'This Privacy Policy explains how Arqonnect (operating the Arqonnect service, "Arqonnect", "we", "us") collects, uses, shares and protects personal information of (a) business customers who subscribe to Arqonnect and (b) end-users who interact with our customers\' WhatsApp, Instagram and Messenger accounts via Arqonnect.',
      },
      {
        type: "p",
        text: "It applies to https://arqonnect.ai, all subdomains (including https://app.arqonnect.ai and https://api.arqonnect.ai), our APIs, webhooks, and any messaging service we provide on behalf of a customer business.",
      },
      { type: "h2", text: "1. Who we are" },
      {
        type: "ul",
        items: [
          "Legal entity: Arqonnect",
          "Country of operation: Pakistan",
          "Registered address: Lahore, Pakistan",
          "Contact: Compliance@arqonnect.ai",
        ],
      },
      { type: "h2", text: "2. Data we collect" },
      { type: "h3", text: "2.1 From business customers (account holders)" },
      {
        type: "ul",
        items: [
          "Account data: name, work email, organization name, job title, phone number (optional).",
          "Authentication data: handled by Clerk. We store only the resulting user ID and email; passwords are never sent to our servers.",
          "Billing data: handled by our PCI-DSS-compliant Merchant of Record. We store the last 4 digits of the card, the billing country, and the subscription status only.",
          "Usage data: login timestamps, dashboard pages visited, features toggled, conversation volume, AI token spend.",
          "Integration credentials: Channel-provider API keys and Meta Business credentials you paste into the dashboard. These are encrypted at rest with AES-256-GCM and decrypted only at the moment of an outbound API call.",
          "Knowledge-base content: documents, FAQs and policies you upload to train your AI agent.",
        ],
      },
      { type: "h3", text: "2.2 From end-users (your customers' customers)" },
      {
        type: "ul",
        items: [
          "Conversation data: the messages, media (images, voice notes, documents) and metadata exchanged on WhatsApp / Instagram / Messenger between an end-user and the business they contacted.",
          "Messaging account data: phone number (E.164), display name and channel-specific user ID.",
          "Technical data: IP address of the channel webhook callback, provider message IDs, timestamps.",
        ],
      },
      { type: "h3", text: "2.3 From visitors to our website" },
      {
        type: "p",
        text: "Functional cookies for sign-in (Clerk) and theme preference. With consent: lightweight first-party product analytics. See our Cookie Policy.",
      },
      { type: "h2", text: "3. Why we collect it (purpose & legal basis)" },
      {
        type: "p",
        text: "For each category we identify a purpose and the GDPR Art. 6 legal basis we rely on.",
      },
      {
        type: "table",
        headers: ["Data", "Purpose", "Legal basis"],
        rows: [
          ["Account data", "Provision and operate your account", "Contract"],
          ["Billing data", "Process subscription payments, issue invoices", "Contract"],
          [
            "Usage data",
            "Monitor system health, prevent abuse, improve features",
            "Legitimate interest",
          ],
          [
            "Conversation data",
            "Route messages, generate AI replies, enable human handoff",
            "Contract (with the business) / consent collected by the business from the end-user",
          ],
          [
            "Integration credentials",
            "Connect to channel providers and send messages",
            "Contract",
          ],
          ["Technical data", "Security monitoring, fraud prevention", "Legitimate interest"],
          ["Knowledge-base content", "Ground AI responses in your own materials", "Contract"],
          ["Marketing emails", "Notify you about product updates", "Consent (opt-in only)"],
        ],
      },
      { type: "h2", text: "4. How we use Meta Platform data" },
      {
        type: "p",
        text: "This section governs all data we obtain from the Meta APIs (WhatsApp Business API, Instagram Messaging API, Messenger Platform).",
      },
      {
        type: "p",
        text: "Arqonnect uses data obtained from Meta platforms solely to provide the services described in our Terms. We do not use Meta Platform Data to:",
      },
      {
        type: "ul",
        items: [
          "train consumer AI models;",
          "serve advertisements;",
          "build user profiles for advertising;",
          "share with third parties for marketing purposes.",
        ],
      },
      {
        type: "p",
        text: "Meta Platform Data is used only to: (1) route messages between businesses and their customers, (2) power AI-assisted responses within Meta's 24-hour customer service window, (3) provide conversation analytics to the business account holder, and (4) enable human-agent handoff when the AI cannot resolve a query or escalation is requested. Data obtained from Meta APIs is not combined with data from other sources for advertising or profiling purposes.",
      },
      { type: "h2", text: "5. AI disclosure" },
      {
        type: "p",
        text: "Arqonnect provides AI-powered messaging agents that interact with end-users on behalf of businesses. These agents use large-language-model (LLM) inference and retrieval-augmented generation (RAG) to produce responses. End-users may therefore be communicating with an AI rather than a human representative. Our agents are configured to identify themselves as AI when directly asked. Human support agents are available and will take over the conversation when the AI cannot resolve a query or when escalation is requested. This disclosure is provided in compliance with EU AI Act Article 50 and Meta's platform policies.",
      },
      { type: "h2", text: "6. Data retention" },
      {
        type: "p",
        text: "We tie every retention period to a specific purpose, in line with GDPR Art. 5(1)(e) (storage limitation). When the purpose ends or the limit is reached, data is deleted.",
      },
      {
        type: "ul",
        items: [
          "Account data: retained for the duration of your active subscription. Deleted within 30 days of account closure, cancellation, or a verified deletion request — whichever comes first.",
          "Conversation data: retained for the duration of your active subscription so the AI agent has the context it needs to reply. Upon account closure or cancellation, all conversation data is permanently deleted within 30 days. You can request earlier deletion at any time by emailing Compliance@arqonnect.ai. Inactive conversations within an active account may be moved to cold storage after 90 days of no activity.",
          "Platform logs (technical): up to 90 days, then deleted.",
          "Backups: encrypted database backups are retained for 30 days, then overwritten.",
        ],
      },
      { type: "h2", text: "7. Storage & security" },
      {
        type: "ul",
        items: [
          "Primary database hosted on Supabase (Singapore region by default).",
          "Encrypted media storage on AWS S3 (private bucket, signed URLs only).",
          "TLS 1.2+ in transit everywhere.",
          "AES-256-GCM at rest for all integration credentials and LLM keys.",
          "Role-based access control with separation between platform staff and business users; enforced 2FA for staff.",
          "Per-tenant data isolation enforced in every database query.",
          "Regular vulnerability scans; responsible disclosure at Compliance@arqonnect.ai.",
        ],
      },
      { type: "h2", text: "8. Sub-processors" },
      {
        type: "p",
        text: "We share the minimum personal information necessary with the following sub-processors. We notify customers in writing before adding or replacing a sub-processor that materially changes how their data is handled.",
      },
      {
        type: "table",
        headers: ["Sub-processor", "Purpose", "Region"],
        rows: [
          ["Clerk", "Authentication & user management", "United States"],
          ["Supabase", "Postgres database hosting", "Singapore (ap-southeast-1)"],
          [
            "Amazon Web Services (Amplify, EC2, S3)",
            "Web hosting, background workers, encrypted media storage",
            "United States / Asia-Pacific",
          ],
          [
            "Meta Platforms (WhatsApp, Instagram, Messenger APIs)",
            "Message delivery on Meta channels",
            "United States / European Union",
          ],
          ["YCloud", "WhatsApp Business API infrastructure partner", "Singapore"],
          ["Syrow", "WhatsApp Business API infrastructure partner", "Singapore"],
          ["OpenAI", "Large-language-model inference (fallback path)", "United States"],
          ["Groq", "Primary low-latency LLM inference & Whisper transcription", "United States"],
          ["Google (Gemini)", "Secondary LLM inference & embeddings", "United States / European Union"],
          [
            "Qdrant (self-hosted on EC2)",
            "Vector database for retrieval-augmented generation",
            "Asia-Pacific (ap-southeast-1)",
          ],
          ["Sentry", "Error monitoring and performance tracing", "United States / European Union"],
          ["Resend", "Transactional email (contact form, notifications)", "United States"],
          [
            "Merchant-of-Record processor (Lemon Squeezy / 2Checkout / Paddle)",
            "Subscription billing, tax compliance and chargeback handling",
            "United States / European Union",
          ],
        ],
      },
      { type: "h2", text: "9. International transfers" },
      {
        type: "p",
        text: "Where personal data is transferred outside your country (for example from the EU/UK to the United States), we rely on the European Commission's Standard Contractual Clauses (SCCs) or equivalent safeguards offered by our sub-processors.",
      },
      { type: "h2", text: "10. Your rights (GDPR)" },
      {
        type: "p",
        text: "Subject to applicable law you have the following rights. To exercise any of them, email Compliance@arqonnect.ai. We respond within 30 days.",
      },
      {
        type: "ul",
        items: [
          "Access: request a copy of the personal data we hold about you.",
          "Rectification: ask us to correct inaccurate data.",
          "Erasure (right to be forgotten): request deletion of your personal data. See also Data Deletion.",
          "Portability: receive your data in a machine-readable format.",
          "Restriction / objection: object to processing based on legitimate interest.",
          "Withdraw consent: at any time, with effect for the future. Use the unsubscribe link in any marketing email.",
          "Lodge a complaint with the data protection authority in your jurisdiction.",
        ],
      },
      { type: "h2", text: "11. California residents (CCPA / CPRA)" },
      {
        type: "p",
        text: 'If you are a California resident, the California Consumer Privacy Act gives you the right to know what personal information we collect about you, the right to delete it, the right to correct inaccurate information, and the right to opt out of the "sale" or "sharing" of personal information. Arqonnect does not sell personal information and does not share personal information for cross-context behavioural advertising. To exercise these rights, contact Compliance@arqonnect.ai.',
      },
      { type: "h2", text: "12. WhatsApp opt-in & messaging consent" },
      {
        type: "p",
        text: "Arqonnect requires its business customers to obtain explicit opt-in consent from end-users before sending business-initiated WhatsApp template messages on their behalf. Acceptable opt-in mechanisms include website forms, WhatsApp keyword reply, and in-person consent. End-users can opt out at any time by replying STOP to any WhatsApp message; opt-out records are kept for at least 5 years and broadcast lists are updated within 24 hours of an opt-out request. Arqonnect does not send unsolicited messages.",
      },
      { type: "h2", text: "13. Children" },
      {
        type: "p",
        text: "Arqonnect is a B2B service and is not directed to children under 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us so we can delete it.",
      },
      { type: "h2", text: "14. Changes to this policy" },
      {
        type: "p",
        text: "We may update this policy from time to time. Material changes will be announced on this page and notified to account owners by email at least 30 days in advance.",
      },
      { type: "h2", text: "15. Contact" },
      {
        type: "p",
        text: "Privacy questions, data subject requests, and DPA requests: Compliance@arqonnect.ai. Postal mail to Arqonnect, Lahore, Pakistan.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description:
      "Binding terms between ArQonnect and customers who create an account or use the platform.",
    updated: "2026-05-07",
    blocks: [
      {
        type: "p",
        text: 'These Terms of Service ("Terms") form a binding contract between Arqonnect, of Lahore, Pakistan ("Arqonnect", "we", "us") and the individual or entity that creates an account or uses our services ("Customer", "you"). By accessing the Arqonnect dashboard, APIs or webhooks, you agree to these Terms. If you do not agree, do not use the service.',
      },
      { type: "h2", text: "1. The service" },
      {
        type: "p",
        text: "Arqonnect is a software-as-a-service (SaaS) platform delivered digitally and accessed through a web browser at https://app.arqonnect.ai. It enables businesses to run AI-powered conversations across WhatsApp, Instagram and Messenger, ground replies in their own knowledge base, launch broadcasts, and hand off to their support team whenever a human touch is needed.",
      },
      { type: "h2", text: "2. Account & eligibility" },
      {
        type: "ul",
        items: [
          "You must be at least 18 years old to create an account.",
          "You must use a valid business email address. Free webmail addresses (Gmail, Yahoo, Hotmail) may be rejected at our discretion.",
          "You are responsible for everything that happens under your account and must keep your credentials confidential. Notify us immediately at Compliance@arqonnect.ai if you suspect unauthorized access.",
          "Accounts are typically provisioned by our staff via email invitation; self-service signup is available where enabled.",
        ],
      },
      { type: "h2", text: "3. Subscription & billing" },
      {
        type: "ul",
        items: [
          "Subscription fees are billed monthly (or annually, where offered) in advance via our PCI-DSS-compliant payment processor (Merchant of Record).",
          "Prices are listed exclusive of applicable taxes. Tax is computed at checkout based on your billing location.",
          "Monthly message allowance. Each plan includes a monthly message allowance, published on our pricing page. Every message counts toward it — inbound and outbound, across every connected channel — and the counter resets at the start of each calendar month (UTC).",
          "What happens at the allowance. When an organization reaches its allowance, automated AI replies pause until the next month begins or the plan is upgraded — nothing else stops. Your inbox, conversation history and data stay fully accessible, and your team can keep replying manually without interruption. We never bill you silently for overages.",
          "You may cancel your subscription at any time from the dashboard. Cancellation takes effect at the end of the current billing period; we do not pro-rate partial months unless required by law.",
          "We may change prices on at least 30 days' notice. Continuing to use the service after a price change means you accept the new price.",
        ],
      },
      { type: "h2", text: "4. Refund policy (30-day money-back guarantee)" },
      {
        type: "p",
        text: "New subscribers may request a full refund within 30 days of their first paid invoice if the service does not meet their expectations. Refunds are processed within 5–10 business days back to the original payment method. Full eligibility, exclusions and the request process are in the Refund Policy.",
      },
      { type: "h2", text: "5. Acceptable use" },
      {
        type: "p",
        text: "Your use of Arqonnect is also governed by our Acceptable Use Policy (AUP), which is incorporated into these Terms by reference. In summary, you agree not to:",
      },
      {
        type: "ul",
        items: [
          "Send spam, unsolicited bulk messages, or any messages outside Meta's WhatsApp Business, Instagram Messaging, or Messenger Platform policies.",
          "Use Arqonnect for prohibited categories listed in the AUP (gambling, adult content, weapons, illegal substances, MLM, etc.).",
          "Attempt to deceive, mislead or impersonate humans when an end-user directly asks whether they are speaking to a person or AI.",
          "Reverse-engineer, probe, scrape, or interfere with the security of the service.",
          "Upload content you do not have the right to use, or content that is unlawful, infringing, or harmful.",
        ],
      },
      {
        type: "p",
        text: "We may suspend or terminate accounts that violate the AUP, with or without prior notice depending on severity.",
      },
      { type: "h2", text: "6. AI disclosure" },
      {
        type: "p",
        text: "Arqonnect powers messaging with AI-driven automation. End-users may be communicating with an artificial-intelligence system rather than a human representative. This automation is configured to identify itself as AI when directly asked, and you agree not to disable that identification feature. Your human support team stays in the loop and takes over the moment the AI can't resolve a query or an end-user requests escalation. This disclosure is required by EU AI Act Art. 50 and Meta's platform policies.",
      },
      { type: "h2", text: "7. Your content & data" },
      {
        type: "p",
        text: 'You retain ownership of all content you upload to Arqonnect (knowledge-base documents, FAQs, persona prompts, message templates) and of all messages exchanged through your channel connections ("Customer Data"). You grant us a worldwide, non-exclusive, royalty-free license to host, transmit, process and display Customer Data solely as necessary to provide the service.',
      },
      {
        type: "p",
        text: "How we handle Customer Data as a data processor under GDPR is described in our Privacy Policy and our Data Processing Agreement.",
      },
      { type: "h2", text: "8. Service availability" },
      {
        type: "p",
        text: "We target 99.5% monthly uptime for the dashboard and webhook ingestion (Enterprise plans receive a 99.95% SLA with credits). Scheduled maintenance is announced at least 48 hours in advance whenever possible.",
      },
      { type: "h2", text: "9. Suspension & termination" },
      {
        type: "ul",
        items: [
          "Either party may terminate at any time. You can self-cancel from the dashboard. We may terminate on 30 days' notice for convenience or immediately for cause (AUP violation, non-payment longer than 14 days, security risk, fraud).",
          "Upon termination: your access ends, we delete your data within 30 days unless retention is required by law, and any unpaid fees become immediately due.",
        ],
      },
      { type: "h2", text: "10. Disclaimers" },
      {
        type: "p",
        text: 'The service is provided "as is" and "as available". To the maximum extent permitted by law, we disclaim all implied warranties of merchantability, fitness for a particular purpose, and non-infringement. AI-generated responses may be inaccurate; you remain responsible for reviewing replies before they are sent in regulated industries (medical, legal, financial, etc.).',
      },
      { type: "h2", text: "11. Limitation of liability" },
      {
        type: "p",
        text: "To the maximum extent permitted by law, neither party will be liable for indirect, incidental, special, consequential or punitive damages, or loss of profits, revenue, data or goodwill. Our aggregate liability arising out of or related to these Terms will not exceed the fees you paid us in the twelve (12) months preceding the claim.",
      },
      { type: "h2", text: "12. Indemnification" },
      {
        type: "p",
        text: "You will defend and indemnify Arqonnect against any third-party claim arising from your Customer Data, your violation of the AUP, or your violation of applicable law (including data protection and anti-spam laws).",
      },
      { type: "h2", text: "13. Governing law & disputes" },
      {
        type: "p",
        text: "These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to its conflict-of-laws principles. Any dispute will be resolved in the courts of Lahore, Pakistan, except that either party may seek injunctive relief in any court of competent jurisdiction. Where you are an EU/UK consumer, mandatory local consumer-protection rights also apply.",
      },
      { type: "h2", text: "14. Changes to these Terms" },
      {
        type: "p",
        text: "We may update these Terms from time to time. Material changes will be announced on this page and notified to account owners by email at least 30 days in advance.",
      },
      { type: "h2", text: "15. Contact" },
      {
        type: "p",
        text: "Questions about these Terms: Compliance@arqonnect.ai. Postal mail to Arqonnect, Lahore, Pakistan.",
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    description:
      "How ArQonnect uses cookies on the website and dashboard — and how you can manage them.",
    blocks: [
      {
        type: "p",
        text: 'A "cookie" is a small text file stored on your device by your browser. Arqonnect uses a small number of cookies, the majority of which are strictly necessary for the service to work. We do not use third-party advertising cookies and we do not sell or share your data for cross-context advertising.',
      },
      { type: "h2", text: "1. Categories" },
      { type: "h3", text: "Strictly necessary (always on)" },
      {
        type: "table",
        headers: ["Name", "Set by", "Purpose", "Lifetime"],
        rows: [
          ["__session", "Clerk", "Keeps you signed in to your dashboard.", "Session"],
          ["__client_uat", "Clerk", "CSRF protection for the auth flow.", "1 year"],
          ["theme", "Arqonnect", "Remembers your light/dark theme choice.", "1 year"],
          [
            "arqonnect_cookie_consent",
            "Arqonnect",
            "Records your cookie banner choice.",
            "1 year",
          ],
        ],
      },
      { type: "h3", text: "Optional (only with consent)" },
      {
        type: "p",
        text: "We currently do not load any analytics or third-party tracking. If we add lightweight, privacy-respecting product analytics in the future (for example a self-hosted Plausible or PostHog instance) we will:",
      },
      {
        type: "ul",
        items: [
          "Update this table before turning anything on,",
          "Re-prompt the cookie banner so existing consent choices are re-confirmed, and",
          'Honour your "Reject" choice indefinitely.',
        ],
      },
      { type: "h2", text: "2. How to manage cookies" },
      {
        type: "p",
        text: "You can clear or block cookies in your browser settings. Doing so may prevent you from staying signed in to the dashboard.",
      },
      {
        type: "p",
        text: "To change your consent decision, clear the arqonnect_cookie_consent cookie and reload the page. The banner will reappear.",
      },
      {
        type: "p",
        text: "Most browsers honour the global Do Not Track and Global Privacy Control signals; we treat both as a rejection of optional cookies.",
      },
      { type: "h2", text: "3. Contact" },
      {
        type: "p",
        text: "Cookie or privacy questions: Compliance@arqonnect.ai.",
      },
    ],
  },
  {
    slug: "refund",
    title: "Refund Policy",
    description: "30-day money-back guarantee for new ArQonnect subscriptions.",
    blocks: [
      {
        type: "p",
        text: "30-day money-back guarantee. No fine print.",
      },
      {
        type: "p",
        text: "We want you to be confident that Arqonnect is the right platform for your business. If it isn't, you can request a full refund within 30 days of your first paid invoice.",
      },
      { type: "h2", text: "1. Eligibility" },
      {
        type: "ul",
        items: [
          "You must request the refund within 30 days of the date of your first paid invoice on a new account.",
          "The refund covers the most recent invoice only. Earlier invoices (from prior subscription periods) are not refundable.",
          "The guarantee applies to monthly and annual self-serve plans (Starter, Growth, Scale). Custom Enterprise contracts are governed by the refund terms in the signed order form.",
          "Add-on usage charges (over-quota AI conversations, template messages, additional storage) are not refundable because they reflect third-party costs we have already incurred on your behalf.",
        ],
      },
      { type: "h2", text: "2. Exclusions" },
      {
        type: "p",
        text: "We may decline a refund where the account has clearly been used in bad faith, including:",
      },
      {
        type: "ul",
        items: [
          "violation of our Acceptable Use Policy, Meta's WhatsApp Business Messaging Policy, or applicable law;",
          "sending bulk outbound messages (more than 1,000 template messages) in the 30-day window before requesting a refund;",
          "fraudulent payment, chargebacks already filed with the card issuer, or repeated refund requests across multiple accounts.",
        ],
      },
      { type: "h2", text: "3. How to request a refund" },
      {
        type: "ul",
        items: [
          'Email Compliance@arqonnect.ai from the email address registered on your account, with the subject line "Refund request".',
          "Include your organization name, the invoice number, and (optional) a short note on what didn't work for you. We use this to improve the product.",
          "We confirm receipt within 1 business day and process the refund within 5–10 business days back to the original payment method. Bank settlement times depend on your card issuer.",
        ],
      },
      { type: "h2", text: "4. Cancellation vs. refund" },
      {
        type: "p",
        text: "Cancelling your subscription stops future renewals; it does not automatically refund the most recent invoice. If you want both, cancel from the dashboard and email us as above.",
      },
      { type: "h2", text: "5. Payment processor" },
      {
        type: "p",
        text: "Subscription payments are handled by a PCI-DSS-compliant Merchant of Record (MoR) such as Lemon Squeezy, 2Checkout, or Paddle. The MoR collects applicable taxes, issues invoices, and handles chargebacks on our behalf. Refunds are issued via the same processor. The active MoR will be named on your invoice.",
      },
      { type: "h2", text: "6. Statutory consumer rights" },
      {
        type: "p",
        text: "Where you purchase as a consumer in the EU, UK or another jurisdiction with mandatory withdrawal rights (e.g. the 14-day EU right of withdrawal), this policy is in addition to, and does not affect, those rights. Our 30-day guarantee is more generous than the EU minimum.",
      },
      { type: "h2", text: "7. Contact" },
      {
        type: "p",
        text: "Refund questions: Compliance@arqonnect.ai. General billing questions: Compliance@arqonnect.ai.",
      },
    ],
  },
  {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    description:
      "Rules every ArQonnect customer must follow when using the platform and messaging channels.",
    updated: "2026-05-07",
    blocks: [
      {
        type: "p",
        text: 'This Acceptable Use Policy ("AUP") is part of our Terms of Service. It explains what you may and may not do with the Arqonnect platform. We enforce it strictly because Meta, WhatsApp and our other channel providers hold us accountable for what is sent through their networks.',
      },
      { type: "h2", text: "1. Prohibited industries & categories" },
      {
        type: "p",
        text: "You may not use Arqonnect to send messages on behalf of, or to promote:",
      },
      {
        type: "table",
        headers: ["Category", "Why"],
        rows: [
          ["Gambling, online casinos, sports-betting tipsters", "Meta WhatsApp Commerce policy violation"],
          [
            "Cryptocurrency trading, ICO/airdrop promotion, signal groups",
            "Meta WhatsApp Commerce policy violation",
          ],
          [
            "Illegal substances, recreational drugs, drug paraphernalia",
            "Legal + Meta policy violation",
          ],
          ["Adult, sexual or escort services", "Meta policy violation"],
          ["Weapons, ammunition, firearms accessories", "Meta WhatsApp Commerce policy violation"],
          [
            "Multi-level marketing, pyramid schemes, get-rich-quick offers",
            "Meta WhatsApp Commerce policy violation",
          ],
          [
            "Political campaigning, electioneering, paid political ads",
            "Meta restricted category in most regions",
          ],
          [
            "Debt collection using harassing or deceptive tactics",
            "Legal violation in most jurisdictions",
          ],
          [
            "Bulk SMS / bulk-WhatsApp resellers, spam-as-a-service",
            "WhatsApp Business API Terms violation",
          ],
          ["Phishing, fraud, impersonation of other brands", "Legal + WhatsApp policy violation"],
          ["Malware, exploits, hacking-tool distribution", "Legal + AWS/Meta TOS violation"],
          ["Tobacco, vape, e-cigarette sales (B2C)", "Meta WhatsApp Commerce policy violation"],
          ["Counterfeit goods, IP-infringing merchandise", "Legal violation"],
        ],
      },
      {
        type: "p",
        text: "Some industries (alcohol B2C, financial services, healthcare, regulated dating) require explicit pre-approval from us. Email Compliance@arqonnect.ai before launching.",
      },
      { type: "h2", text: "2. WhatsApp messaging rules" },
      {
        type: "ul",
        items: [
          "Opt-in is mandatory. You may only send business-initiated WhatsApp template messages to contacts who have explicitly opted in. Accepted methods include: (a) a website form with a clear WhatsApp consent checkbox, (b) in-person consent recorded on paper or in your CRM, (c) keyword opt-in by WhatsApp reply (e.g., the customer replies YES to subscribe), or (d) any other mechanism permitted by Meta's WhatsApp Business Policy. You must retain proof of consent for each contact for at least 5 years and surface that proof on request from us, Meta, or the contact themselves. Arqonnect reserves the right to suspend, without notice, any account found contacting non-opted-in recipients.",
          "Use approved templates outside the 24-hour window. Free-form messages are only allowed within Meta's 24-hour customer service window. Arqonnect enforces this automatically and switches to template mode when the window is closed.",
          "Honour opt-outs within 24 hours. If a recipient replies STOP / UNSUBSCRIBE, you must remove them from all broadcast lists within one business day.",
          "Do not exceed your tier's send limits. Until your WhatsApp number is officially scaled by Meta, do not send more than 250 outbound template messages per day per number without our approval.",
          "No identical content from many numbers. Sending the same message body from rotating numbers to evade rate limits is grounds for immediate termination and a Meta policy report.",
          "Templates must match approved content. Modifying variables is allowed; modifying the template body invalidates the approval.",
        ],
      },
      { type: "h2", text: "3. AI behaviour" },
      {
        type: "ul",
        items: [
          "You may not configure the AI to claim to be human when an end-user directly asks. It must identify itself as AI on request.",
          "You may not use Arqonnect to generate content that is harmful, deceptive, defamatory, harassing, or that targets a person based on a protected characteristic.",
          "You may not use the platform to generate or distribute non-consensual intimate imagery, content sexualising minors, or medical / legal advice without appropriate licensure.",
          "You are responsible for the accuracy of your knowledge-base uploads. Misleading product claims, regulated health/financial advice, or unsubstantiated claims are your liability, not ours.",
        ],
      },
      { type: "h2", text: "4. Security" },
      {
        type: "ul",
        items: [
          "Do not probe, scan, or attempt to bypass Arqonnect's security controls. Responsible-disclosure submissions are welcome at Compliance@arqonnect.ai.",
          "Do not use the API to scrape large volumes of contact data, or to enumerate accounts.",
          "Do not share your account credentials. Each human user gets their own login under your organization.",
        ],
      },
      { type: "h2", text: "5. Enforcement" },
      {
        type: "p",
        text: "We may suspend or terminate accounts that violate this AUP, with notice when reasonable and immediately for severe violations (spam, fraud, safety risks). We will report unlawful activity to the relevant authorities and channel providers when required.",
      },
      { type: "h2", text: "6. Reporting abuse" },
      {
        type: "p",
        text: "To report abuse of the Arqonnect platform, email Compliance@arqonnect.ai. We acknowledge reports within 2 business days.",
      },
    ],
  },
  {
    slug: "dpa",
    title: "Data Processing Agreement",
    description:
      "Standard DPA governing ArQonnect's processing of personal data on behalf of customers.",
    updated: "2026-05-07",
    blocks: [
      {
        type: "p",
        text: 'This Data Processing Agreement ("DPA") forms part of the Terms of Service between Arqonnect ("Processor", "Arqonnect") and the customer that has accepted those Terms ("Controller"). It applies whenever Arqonnect processes Personal Data on the Controller\'s behalf in the course of providing the Arqonnect service.',
      },
      {
        type: "p",
        text: "A signed PDF copy of this DPA is available on request. Email Compliance@arqonnect.ai with your organization name and the legal entity that should appear on the signed copy.",
      },
      { type: "h2", text: "1. Definitions" },
      {
        type: "p",
        text: '"Controller", "Processor", "Personal Data", "Processing", "Sub-processor", "Data Subject", and "Supervisory Authority" have the meanings given in the EU General Data Protection Regulation 2016/679 ("GDPR") and the UK GDPR.',
      },
      { type: "h2", text: "2. Subject matter, nature & purpose of processing" },
      {
        type: "ul",
        items: [
          "Subject matter: processing of Personal Data necessary to deliver the Arqonnect service to the Controller.",
          "Nature: message routing, AI inference, retrieval-augmented generation, analytics, conversation storage, template management, broadcasts.",
          "Purpose: to enable the Controller to operate customer conversations across WhatsApp, Instagram and Messenger.",
          "Duration: for the term of the Controller's subscription, plus deletion grace period (30 days).",
          "Categories of Data Subjects: the Controller's employees and representatives (account users), and end-users who initiate or receive messages via the channels the Controller has connected.",
          "Categories of Personal Data: name, email, phone number, social-handle, message content, message metadata, uploaded knowledge-base content, billing identifiers.",
        ],
      },
      { type: "h2", text: "3. Obligations of the Processor (Arqonnect)" },
      {
        type: "ul",
        items: [
          "Process Personal Data only on documented instructions from the Controller, including those reflected in the Terms and the Controller's configuration choices in the dashboard.",
          "Ensure that personnel authorised to process Personal Data are bound by confidentiality.",
          "Implement appropriate technical and organisational measures (see Annex II below).",
          "Not engage a Sub-processor without the Controller's general authorisation, and notify the Controller in writing of any intended changes (Section 6).",
          "Assist the Controller in fulfilling Data Subject requests (access, rectification, erasure, portability, restriction, objection) within 30 days of request.",
          "Notify the Controller without undue delay (and in any event within 72 hours) after becoming aware of a Personal Data breach.",
          "On termination, delete or return Personal Data within 30 days unless retention is required by law.",
        ],
      },
      { type: "h2", text: "4. Obligations of the Controller" },
      {
        type: "ul",
        items: [
          "Ensure a lawful basis exists for the processing, including (where required) collecting valid opt-in consent from end-users for WhatsApp / Instagram / Messenger communications.",
          "Maintain the accuracy of the Personal Data uploaded to the service.",
          "Configure access controls in the dashboard appropriately and rotate credentials when team members leave.",
        ],
      },
      { type: "h2", text: "5. Security (Annex II)" },
      {
        type: "ul",
        items: [
          "TLS 1.2+ in transit. AES-256-GCM at rest for all secrets.",
          "Role-based access control with separation of duties between platform staff and Controller users.",
          "Multi-factor authentication enforced for Arqonnect staff. Customers can require it through Clerk.",
          "Per-tenant data isolation. Every database query and vector-store namespace is scoped to a single organization.",
          "Daily encrypted backups, 30-day retention.",
          "Vulnerability management; responsible disclosure handled at Compliance@arqonnect.ai.",
        ],
      },
      { type: "h2", text: "6. Sub-processors (Annex III)" },
      {
        type: "p",
        text: "The Controller authorizes the following Sub-processors. We will notify subscribers in writing at least 30 days before adding or replacing a Sub-processor that materially changes how their data is handled.",
      },
      {
        type: "table",
        headers: ["Sub-processor", "Purpose", "Region"],
        rows: [
          ["Clerk", "Authentication & user management", "United States"],
          ["Supabase", "Postgres database hosting", "Singapore (ap-southeast-1)"],
          [
            "Amazon Web Services (Amplify, EC2, S3)",
            "Web hosting, background workers, encrypted media storage",
            "United States / Asia-Pacific",
          ],
          [
            "Meta Platforms (WhatsApp, Instagram, Messenger APIs)",
            "Message delivery on Meta channels",
            "United States / European Union",
          ],
          ["YCloud", "WhatsApp Business API infrastructure partner", "Singapore"],
          ["Syrow", "WhatsApp Business API infrastructure partner", "Singapore"],
          ["OpenAI", "Large-language-model inference (fallback path)", "United States"],
          ["Groq", "Primary low-latency LLM inference & Whisper transcription", "United States"],
          ["Google (Gemini)", "Secondary LLM inference & embeddings", "United States / European Union"],
          [
            "Qdrant (self-hosted on EC2)",
            "Vector database for retrieval-augmented generation",
            "Asia-Pacific (ap-southeast-1)",
          ],
          ["Sentry", "Error monitoring and performance tracing", "United States / European Union"],
          ["Resend", "Transactional email (contact form, notifications)", "United States"],
          [
            "Merchant-of-Record processor (Lemon Squeezy / 2Checkout / Paddle)",
            "Subscription billing, tax compliance and chargeback handling",
            "United States / European Union",
          ],
        ],
      },
      { type: "h2", text: "7. International transfers" },
      {
        type: "p",
        text: "Where Personal Data is transferred from the EEA, UK or Switzerland to a country without an adequacy decision, the parties incorporate the European Commission's Standard Contractual Clauses (SCCs, Module 2: Controller-to-Processor) by reference. The UK Addendum applies to UK transfers; the Swiss DPA applies to Swiss transfers.",
      },
      { type: "h2", text: "8. Audits" },
      {
        type: "p",
        text: "The Controller may, no more than once per twelve-month period (and in addition any time after a confirmed breach), audit our compliance with this DPA by submitting a written questionnaire that we will answer within 30 days. On-site audits are available for Enterprise customers under NDA.",
      },
      { type: "h2", text: "9. Liability" },
      {
        type: "p",
        text: "Each party's liability arising out of or related to this DPA is subject to the limitations and exclusions of liability set out in the Terms.",
      },
      { type: "h2", text: "10. Order of precedence" },
      {
        type: "p",
        text: "In the event of a conflict between this DPA and the Terms, this DPA prevails to the extent it relates to the processing of Personal Data.",
      },
      { type: "h2", text: "11. Governing law" },
      {
        type: "p",
        text: "This DPA is governed by the laws of the Islamic Republic of Pakistan. Where mandatory data-protection law (e.g. GDPR / UK GDPR) applies, that law prevails over this clause to the extent of any conflict.",
      },
      { type: "h2", text: "12. Signatures" },
      {
        type: "p",
        text: "Acceptance of the Terms via account creation, or use of the service, constitutes acceptance of this DPA. A signed counterpart is available on request from Compliance@arqonnect.ai.",
      },
    ],
  },
  {
    slug: "data-deletion",
    title: "Data Deletion",
    description:
      "How to request erasure of personal data held by ArQonnect, including Meta's data-deletion callback.",
    blocks: [
      {
        type: "p",
        text: 'Right to erasure under GDPR Art. 17 and Meta Platform Terms.',
      },
      {
        type: "p",
        text: 'You have the right to request deletion of your personal data held by Arqonnect. This page describes (a) how individuals (including end-users who interacted with a business using Arqonnect) can request deletion, and (b) the programmatic callback URL that Meta uses for its "Data Deletion Request" flow.',
      },
      { type: "h2", text: "1. Who can request deletion" },
      {
        type: "ul",
        items: [
          "Business customers (account holders). Owners can delete their organization from the dashboard at Settings → Danger zone → Delete organization, or by emailing us as below.",
          "End-users. If you sent a message to a business that uses Arqonnect and want your conversation history deleted, you can either reply STOP on the WhatsApp channel to be removed from broadcast lists, or email us with your phone number / channel handle so we can locate the records.",
          "Meta App Review crawler. Meta's Data Deletion Request flow uses the callback URL below.",
        ],
      },
      { type: "h2", text: "2. How to request deletion (humans)" },
      {
        type: "ul",
        items: [
          'Email Compliance@arqonnect.ai with the subject line "Data deletion request".',
          "Include enough information for us to locate your records: the email registered on your account or, for end-users, the WhatsApp / Instagram / Messenger handle and the business you contacted.",
          "We verify the request within 5 business days (we may ask follow-up questions to confirm identity).",
          "We complete deletion within 30 days of verification and confirm by email. Encrypted backups are overwritten in the next backup rotation cycle (≤ 30 days).",
        ],
      },
      { type: "h2", text: "3. What gets deleted" },
      {
        type: "ul",
        items: [
          "Account profile, organization membership, billing identifiers.",
          "Conversation history (messages, media, AI replies) associated with your phone number / channel handle.",
          "RAG knowledge documents and chunked embeddings.",
          "Encrypted channel-provider credentials.",
        ],
      },
      { type: "h2", text: "4. What we may retain (and why)" },
      {
        type: "ul",
        items: [
          'Anonymized aggregate usage metrics (e.g. "# of conversations / day") that cannot be linked back to you.',
          "Records required by tax / accounting law (invoice metadata) for the period mandated by Pakistani law (typically 5 years).",
          "Audit log entries necessary for security investigations, retained for up to 12 months.",
        ],
      },
      { type: "h2", text: "5. Meta Data-Deletion callback URL" },
      {
        type: "p",
        text: "Meta App Review requires every app that uses Meta Platform Data to publish a callback endpoint. Ours is:",
      },
      {
        type: "p",
        text: "https://api.arqonnect.ai/data-deletion/callback",
      },
      {
        type: "p",
        text: "It accepts a signed Meta deletion request, parses the user identifier, enqueues a deletion job, and responds with the JSON payload Meta expects (url + confirmation_code) so the end-user can track the request. The same handler is also reachable at https://api.arqonnect.ai/api/v1/data-deletion-callback for backward compatibility with Meta apps configured before May 2026.",
      },
      { type: "h2", text: "6. Right to lodge a complaint" },
      {
        type: "p",
        text: "If you believe we have not handled your request correctly, you may complain to your local data-protection authority. EU residents may contact their national supervisory authority; UK residents may contact the ICO.",
      },
      { type: "h2", text: "7. Contact" },
      {
        type: "p",
        text: "Privacy / deletion: Compliance@arqonnect.ai.",
      },
    ],
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((d) => d.slug === slug);
}

export function getAllLegalSlugs(): string[] {
  return LEGAL_DOCS.map((d) => d.slug);
}
