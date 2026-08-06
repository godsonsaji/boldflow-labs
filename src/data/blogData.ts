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
    id: "static-coaching-admission-call-leak",
    title: "The Real Cost of Missing Admission Calls: A Coaching Center's Hidden Leak",
    slug: "real-cost-of-missing-coaching-admission-calls",
    excerpt: "During May–July admission season, coaching institutes receive 80+ daily inquiry calls. Unanswered calls directly leak lakhs of rupees in student enrollments.",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    createdAt: {
      toDate: () => new Date("2026-08-03T11:00:00Z")
    },
    readTime: "6M_READ",
    authorName: "Godson Saji",
    tags: ["EDUCATION", "COACHING", "ZOHO CRM"],
    status: "published",
    content: `
      <h2>The Admission Season Rush in Kota, Delhi & South Indian Hubs</h2>
      <p>For JEE, NEET, UPSC, and Foundation coaching institutes across Kota, Delhi NCR, Hyderabad, and Bangalore, May to July represents 70% of annual enrollment revenue. Front-desk staff are overwhelmed by 80–100 phone calls per day.</p>
      <p>Parents calling after work hours about batch timings, fee structures, and hostel options frequently encounter busy lines or unanswered phones.</p>

      <h2>How AI Receptionists Capture Every Parent Enquiry</h2>
      <p>AI voice agents answer within 10 seconds, conversing naturally in Hindi, Tamil, Telugu, or English. The AI collects student details (Target Exam, Class, Preferred Batch), schedules a counseling slot, and pushes lead profiles directly into LeadSquared or Zoho CRM.</p>
    `
  },
  {
    id: "static-delhi-clinic-appointment-recovery",
    title: "How a Delhi Dental Clinic Recovered ₹40,000/Month in Lost Appointments",
    slug: "delhi-dental-clinic-recovered-lost-appointments",
    excerpt: "Case study on how automated AI voice booking and WhatsApp confirmation reduced empty appointment slots for a multi-specialty dental practice in New Delhi.",
    coverImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    createdAt: {
      toDate: () => new Date("2026-08-05T14:30:00Z")
    },
    readTime: "4M_READ",
    authorName: "Godson Saji",
    tags: ["HEALTHCARE", "CLINIC", "PRACTO"],
    status: "draft",
    content: `
      <h2>Overcoming Front-Desk Overload in Urban Clinics</h2>
      <p>Clinics in metro cities handle dozens of routine patient appointment and fee calls every day. Reception staff putting callers on hold leads to dropped calls and empty doctor schedules.</p>
      <p>By deploying an automated AI assistant integrated with Practo and Google Calendar, patient calls are answered instantly 24/7, booking appointments and sending automatic WhatsApp reminders.</p>
    `
  }
];
