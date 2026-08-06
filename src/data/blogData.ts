export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  createdAt: {
    toDate: () => Date;
  };
  readTime: string;
  authorName: string;
  authorImage?: string;
  tags: string[];
  status: "published" | "draft";
}

export const staticBlogPosts: BlogPost[] = [
  {
    id: "static-real-estate-99acres-leads",
    title: "Why 58% of Your 99acres Leads Call After 7 PM (And How to Capture Them)",
    slug: "why-58-percent-99acres-leads-call-after-hours",
    excerpt: "Indian property buyers browse portals after work. Missing their after-hours call means losing site visits and brokerage commission to responsive competitors.",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    createdAt: {
      toDate: () => new Date("2026-08-01T09:00:00Z")
    },
    readTime: "5M_READ",
    authorName: "Godson Saji",
    tags: ["REAL ESTATE", "99ACRES", "LEADSQUARED"],
    status: "published",
    content: `
      <h2>The After-Hours Real Estate Lead Bottleneck in Indian Metros</h2>
      <p>In major Indian real estate markets—Bangalore, Mumbai, Gurgaon, Chennai, and Pune—prospective home buyers review portal listings on 99acres, MagicBricks, and Housing.com after office hours, between 7 PM and 11 PM.</p>
      <p>When a high-intent buyer calls a broker or developer desk at 8:30 PM, office lines are usually unattended. By 9 AM the next morning, that buyer has already contacted two other brokers who responded faster.</p>

      <blockquote>
        "An average portal lead in India costs ₹800–₹1,500. Missing the phone call means burning marketing spend and forfeiting lakh rupees in brokerage fees."
      </blockquote>

      <h2>Deploying 24/7 Multilingual AI Phone Assistants</h2>
      <p>By routing inbound portal calls to an AI phone assistant trained in Indian real estate dialogues, brokers ensure immediate, natural response in Kannada, Tamil, Hindi, Telugu, or Hinglish:</p>
      <ul>
        <li><strong>Instant Qualification:</strong> AI greets the caller, confirms property configuration (2 BHK / 3 BHK), budget range, and preferred locality.</li>
        <li><strong>Site Visit Scheduling:</strong> Checks agent schedules and books a site visit directly into Google Calendar or LeadSquared.</li>
        <li><strong>WhatsApp Confirmation:</strong> Sends an instant WhatsApp message with property brochure, location pin, and appointment timing.</li>
      </ul>
    `
  },
  {
    id: "static-d2c-cod-rto-reduction",
    title: "How D2C Brands in India Cut RTO Rates With Instant COD Voice Confirmation",
    slug: "how-d2c-brands-cut-rto-rates-with-cod-voice-confirmation",
    excerpt: "Unconfirmed Cash-on-Delivery orders severely drain D2C margins through reverse shipping and repackaging. Automated AI voice confirmation calls eliminate fake orders before dispatch.",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    createdAt: {
      toDate: () => new Date("2026-08-03T11:00:00Z")
    },
    readTime: "6M_READ",
    authorName: "Godson Saji",
    tags: ["D2C", "E-COMMERCE", "RTO"],
    status: "published",
    content: `
      <h2>The RTO Margin Leak in Indian E-Commerce</h2>
      <p>For Indian D2C brands on Shopify and WooCommerce, Cash-on-Delivery (COD) represents 60%–70% of order volume. However, unconfirmed COD orders result in high Return-to-Origin (RTO) rates, costing brands reverse logistics fees, repackaging charges, and tied-up inventory.</p>

      <h2>Automating COD Verification Within Minutes of Checkout</h2>
      <p>By deploying an AI voice agent like Ananya, every COD order triggers an instant phone call to the customer in Hindi, Hinglish, or English:</p>
      <ul>
        <li><strong>Address & Intent Verification:</strong> Verifies complete street address, pincode, and intent to pay cash at delivery.</li>
        <li><strong>Risk Flagging:</strong> Unreachable, invalid, or canceled orders are flagged automatically in Shopify or Shiprocket before fulfillment.</li>
        <li><strong>WhatsApp Confirmation:</strong> Dispatches verified dispatch status and tracking details over WhatsApp.</li>
      </ul>
    `
  },
  {
    id: "static-insurance-policy-renewal-reminder",
    title: "Why Insurance Agencies Lose Expiring Policies (And How AI Reminders Save Them)",
    slug: "why-insurance-agencies-lose-expiring-policies-ai-reminders",
    excerpt: "Agencies managing thousands of expiring policies can't call every policyholder before lapse. Automated AI voice reminders protect recurring commissions.",
    coverImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    createdAt: {
      toDate: () => new Date("2026-08-05T14:30:00Z")
    },
    readTime: "5M_READ",
    authorName: "Godson Saji",
    tags: ["INSURANCE", "RENEWAL", "TELEPHONY"],
    status: "published",
    content: `
      <h2>The Policy Lapse Challenge for Indian Insurance Brokers</h2>
      <p>Insurance agencies managing large policy books face a persistent issue: during heavy renewal months, staff cannot physically call every policyholder before their policy lapses.</p>
      <p>A single lapsed policy means losing that customer's annual recurring commission entirely, forcing agencies to constantly spend on acquiring replacement leads.</p>

      <h2>Service-Oriented AI Renewal Reminders</h2>
      <p>By deploying Suresh, an automated AI renewal voice assistant, agencies reach 100% of policyholders 30 days and 7 days prior to lapse:</p>
      <ul>
        <li><strong>Multilingual Outreach:</strong> Calls in Tamil, Hindi, Kannada, Telugu, or English based on policyholder region.</li>
        <li><strong>Advisor Callback Booking:</strong> If the client has policy questions or wants coverage changes, the AI books a callback directly with a licensed agent.</li>
        <li><strong>IRDAI & DND Compliance:</strong> Calls are strictly framed as service renewal care, maintaining full compliance.</li>
      </ul>
    `
  }
];
