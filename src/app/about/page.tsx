import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Target,
  Users,
  Heart,
  Lightbulb,
  Award,
} from "lucide-react";
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_RAW,
  BUSINESS_NAME,
} from "@/lib/services-data";

export const metadata: Metadata = {
  title: "About Armada HVAC | Dayton, Ohio HVAC Company",
  description:
    "Learn about Armada HVAC — professional heating and cooling services for Dayton, Ohio homes. Our approach, values, and commitment to honest HVAC service.",
};

const values = [
  {
    icon: <Target size={24} />,
    title: "Thorough Diagnostics",
    desc: "We take the time to identify the actual problem before recommending a solution. This avoids unnecessary work and recurring issues.",
  },
  {
    icon: <Shield size={24} />,
    title: "Honest Recommendations",
    desc: "We believe in straightforward communication. If a repair is sufficient, we'll say so. If replacement makes more sense, we'll explain why.",
  },
  {
    icon: <Users size={24} />,
    title: "Respect for Your Home",
    desc: "We treat every home with care — protecting floors, cleaning up after work, and explaining what we did in terms you can understand.",
  },
  {
    icon: <Heart size={24} />,
    title: "Customer-First Approach",
    desc: "Your comfort and satisfaction are the measures of our success. We listen to your concerns and tailor our service accordingly.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Continuous Learning",
    desc: "HVAC technology evolves, and we stay current with equipment, techniques, and industry best practices to serve you better.",
  },
  {
    icon: <Award size={24} />,
    title: "Quality Workmanship",
    desc: "We stand behind our work with attention to detail, proper installation practices, and thorough testing before we consider the job complete.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 30% 60%, rgba(23,105,170,0.25) 0%, transparent 50%)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <nav className="breadcrumbs" style={{ color: "rgba(255,255,255,0.6)", marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }}>Home</Link>
            <span className="separator">/</span>
            <span style={{ color: "rgba(255,255,255,0.9)" }}>About</span>
          </nav>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              color: "white",
            }}
          >
            About {BUSINESS_NAME}
          </h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: "600px" }}>
            Professional heating, ventilation, and air conditioning services
            built on honest communication and practical solutions for
            Dayton-area homeowners.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "1.25rem" }}>
            Who We Are
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            {BUSINESS_NAME} is a heating, ventilation, and air conditioning
            company serving homeowners in Dayton, Ohio and surrounding
            communities. We provide a complete range of HVAC services — from
            routine maintenance and repair to new system installation and
            emergency response.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Our approach is straightforward: diagnose the problem accurately,
            explain the options honestly, and do the work right. We don&apos;t
            believe in pressure tactics or unnecessary upsells. When a simple
            repair will solve the problem, that&apos;s what we recommend. When
            replacement is the more practical path, we&apos;ll explain why and
            help you weigh your options.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8 }}>
            We understand that HVAC work involves trust — we&apos;re working on
            the systems that keep your family comfortable and safe. We take
            that responsibility seriously and aim to earn your confidence
            through our work, not just our words.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                color: "var(--blue)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              Our Values
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800 }}>
              What Guides Our Work
            </h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "var(--white)",
                  borderRadius: "0.75rem",
                  padding: "2rem",
                  border: "1px solid var(--gray-border)",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "0.75rem",
                    background: "var(--blue-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--blue)",
                    flexShrink: 0,
                  }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.375rem" }}>
                    {v.title}
                  </h3>
                  <p style={{ color: "var(--text-body)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "1.25rem" }}>
            Our Service Approach
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            Every HVAC call starts with listening. We ask about the problem,
            the system&apos;s history, and your priorities before touching any
            equipment. Here&apos;s what you can expect when you work with us:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "Clear communication about what we find and what it means",
              "Honest assessment of repair vs. replacement options",
              "Transparent pricing discussed before work begins",
              "Clean, respectful treatment of your home",
              "Thorough testing after every repair or installation",
              "Follow-up recommendations for long-term system care",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <CheckCircle
                  size={20}
                  style={{ color: "var(--blue)", marginTop: "0.125rem", flexShrink: 0 }}
                />
                <p style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "white",
            }}
          >
            Ready to Experience Honest HVAC Service?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.0625rem", marginBottom: "2rem" }}>
            Contact us today to discuss your heating and cooling needs.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href={`tel:${BUSINESS_PHONE_RAW}`} className="btn-call">
              <Phone size={16} />
              {BUSINESS_PHONE}
            </a>
            <Link href="/request-service" className="btn-secondary">
              Request a Service
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
