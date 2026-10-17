import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Wrench,
  Snowflake,
  Settings,
  Flame,
  ShieldCheck,
  Clock,
  CheckCircle,
  MapPin,
  Star,
  AlertTriangle,
} from "lucide-react";
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_RAW,
  BUSINESS_NAME,
  SERVICE_AREAS,
} from "@/lib/services-data";
import FAQAccordion from "@/components/FAQAccordion";

/*
 * ============================================
 * HOMEPAGE IMAGES:
 * ============================================
 * 
 * 1. HERO BACKGROUND IMAGE (optional):
 *    Place at: public/images/hero-bg.jpg
 *    Size: 1920x800px recommended
 *    Currently using gradient background — add image for more impact
 *
 * 2. ABOUT SECTION IMAGE (optional):
 *    Place at: public/images/about-preview.jpg
 *    Size: 600x400px recommended
 *    Would appear in the "Your Local HVAC Partner" section
 *
 * ============================================
 */

const popularServices = [
  {
    icon: <Wrench size={28} />,
    name: "HVAC Repair",
    desc: "Fast diagnostics and reliable repair for all heating and cooling systems.",
    href: "/services/hvac-repair",
  },
  {
    icon: <Snowflake size={28} />,
    name: "AC Repair",
    desc: "Restore cool comfort with professional air conditioning repair service.",
    href: "/services/ac-repair",
  },
  {
    icon: <Flame size={28} />,
    name: "Heating Repair",
    desc: "Expert heating system repair to keep your home warm through Ohio winters.",
    href: "/services/heating-repair",
  },
  {
    icon: <Settings size={28} />,
    name: "HVAC Maintenance",
    desc: "Preventive service to keep your heating and cooling running efficiently.",
    href: "/services/hvac-maintenance",
  },
  {
    icon: <ShieldCheck size={28} />,
    name: "AC Installation",
    desc: "Professional air conditioning installation with proper sizing and setup.",
    href: "/services/ac-installation",
  },
  {
    icon: <AlertTriangle size={28} />,
    name: "Emergency HVAC",
    desc: "Phone availability for urgent heating and cooling situations, any time.",
    href: "/services/emergency-hvac-service",
  },
];

const whyChoose = [
  {
    icon: <CheckCircle size={24} />,
    title: "Thorough Diagnostics",
    desc: "We identify the root cause, saving you time and money on repeat visits.",
  },
  {
    icon: <Clock size={24} />,
    title: "Prompt Response",
    desc: "We respect your time and prioritize timely service for all requests.",
  },
  {
    icon: <Star size={24} />,
    title: "Honest Advice",
    desc: "Straightforward recommendations — no unnecessary upsells.",
  },
  {
    icon: <MapPin size={24} />,
    title: "Local to Dayton",
    desc: "We serve homeowners across the Dayton region with care.",
  },
];

const homeFaqs = [
  {
    question: "What HVAC services does Armada HVAC provide?",
    answer:
      "We provide a full range of residential HVAC services including repair, installation, and maintenance for heating and cooling systems. This includes AC repair, furnace repair, HVAC maintenance, thermostat services, ductwork evaluation, indoor air quality solutions, system replacement, and emergency service.",
  },
  {
    question: "Do you serve the Dayton, Ohio area?",
    answer:
      "Yes. Armada HVAC serves homeowners in Dayton and surrounding communities including Huber Heights, Riverside, Kettering, Beavercreek, Fairborn, Centerville, and more. Contact us with your address to confirm coverage.",
  },
  {
    question: "Are you available for emergency HVAC service?",
    answer:
      "We're available by phone to discuss urgent heating and cooling situations. Call (937) 241-4909 any time to explain the problem, and we'll help determine the appropriate next step.",
  },
  {
    question: "How do I request HVAC service?",
    answer:
      "You can call us directly at (937) 241-4909 or submit a service request through our website. We'll respond promptly to discuss your needs and schedule service.",
  },
  {
    question: "How often should my HVAC system be maintained?",
    answer:
      "Most HVAC professionals recommend twice-yearly maintenance: once in spring before the cooling season and once in fall before the heating season. Regular maintenance helps maintain efficiency and prevent unexpected breakdowns.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="hero-section">
        {/* Background Images: Mobile and Desktop via Native Responsive Picture */}
        <picture
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            overflow: "hidden",
            display: "block",
          }}
        >
          <source media="(min-width: 768px)" srcSet="/images/hero-desktop.png" />
          <img
            src="/images/hero-mobile.png"
            alt="Armada Heating & Air Service Van"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </picture>

        {/* Gradient Overlay for Text Readability */}
        <div className="hero-overlay" />

        <div
          className="container"
          style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              padding: "0.375rem 0.75rem",
              borderRadius: "2rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              marginBottom: "1.25rem",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
            }}
          >
            <MapPin size={12} />
            Serving Dayton, OH & Surrounding Areas
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.875rem, 5vw, 3.75rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "1rem",
              color: "white",
            }}
          >
            Local Comfort for
            <br />
            <span style={{ color: "#F59E0B" }}>Every Ohio Season</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(0.9375rem, 2vw, 1.25rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)",
              maxWidth: "600px",
              marginBottom: "2rem",
            }}
          >
            Reliable heating, cooling, and HVAC services for Dayton-area homes.
            From routine maintenance to emergency repair, {BUSINESS_NAME} is
            here when you need us.
          </p>

          {/* CTA Buttons — stack on mobile, row on desktop */}
          <div className="hero-cta-row">
            <a href={`tel:${BUSINESS_PHONE_RAW}`} className="btn-call" style={{ fontSize: "1rem", padding: "0.875rem 1.5rem" }}>
              <Phone size={18} />
              Call Now
            </a>
            <Link href="/request-service" className="btn-secondary" style={{ fontSize: "1rem", padding: "0.875rem 1.5rem" }}>
              Request a Service
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats-row" style={{ color: "rgba(255,255,255,0.7)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <CheckCircle size={16} style={{ color: "#F59E0B" }} />
              14 HVAC Services
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <CheckCircle size={16} style={{ color: "#F59E0B" }} />
              Available by Phone 24/7
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <CheckCircle size={16} style={{ color: "#F59E0B" }} />
              Dayton & Surrounding Areas
            </div>
          </div>
        </div>
      </section>

      {/* ============ POPULAR SERVICES ============ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p className="section-eyebrow">Our Services</p>
            <h2 className="section-title">Popular HVAC Services</h2>
            <p className="section-subtitle">
              From quick repairs to full system installations, we handle all
              your heating and cooling needs.
            </p>
          </div>
          <div className="popular-services-grid">
            {popularServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card"
                style={{
                  display: "flex",
                  gap: "1rem",
                  textDecoration: "none",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "0.625rem",
                    background: "var(--blue-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--blue)",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--text-dark)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {s.name}
                  </h3>
                  <p style={{ color: "var(--text-body)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      color: "var(--blue)",
                      fontWeight: 600,
                      fontSize: "0.8125rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    Learn More <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/services" className="btn-outline">
              View All 14 Services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p className="section-eyebrow">Why Armada HVAC</p>
            <h2 className="section-title">Why Choose Armada HVAC?</h2>
            <p className="section-subtitle">
              We focus on practical solutions, honest communication, and
              making sure your home stays comfortable.
            </p>
          </div>
          <div className="why-choose-grid">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--white)",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                  border: "1px solid var(--gray-border)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--blue-light), #d4eaf7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--blue)",
                    margin: "0 auto 1rem",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.375rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--text-body)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT INTRO ============ */}
      <section className="section">
        <div className="container">
          <div className="about-two-col">
            <div>
              <p className="section-eyebrow">About Us</p>
              <h2 className="section-title" style={{ marginBottom: "1rem" }}>
                Your Local HVAC Partner in Dayton
              </h2>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  marginBottom: "0.75rem",
                }}
              >
                {BUSINESS_NAME} provides heating, ventilation, and air
                conditioning services for homeowners in Dayton, Ohio and
                surrounding communities. We focus on thorough diagnostics,
                honest recommendations, and quality workmanship.
              </p>
              <p
                style={{
                  color: "var(--text-body)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                Whether you need a quick repair, seasonal maintenance, or a
                complete system installation, our goal is to help you make
                informed decisions about your home&apos;s comfort.
              </p>
              <Link href="/about" className="btn-outline">
                Learn More About Us
                <ArrowRight size={14} />
              </Link>
            </div>
            {/* 
             * ABOUT SECTION IMAGE:
             * Place at: public/images/about-preview.jpg
             * This would replace the stats card below
             */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, var(--blue-light) 0%, #d4eaf7 100%)",
                borderRadius: "1rem",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                { num: "14", label: "HVAC Services" },
                { num: "13+", label: "Communities Served" },
                { num: "24/7", label: "Phone Availability" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "var(--white)",
                    borderRadius: "0.75rem",
                    padding: "1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      color: "var(--blue)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      color: "var(--text-dark)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREA ============ */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p className="section-eyebrow">Service Area</p>
            <h2 className="section-title">
              Proudly Serving Dayton & Beyond
            </h2>
            <p className="section-subtitle">
              We provide HVAC services across the greater Dayton area.
            </p>
          </div>
          <div className="service-area-tags">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="area-tag"
                style={{
                  background: area === "Dayton" ? "var(--blue)" : "var(--white)",
                  color: area === "Dayton" ? "white" : "var(--text-dark)",
                }}
              >
                <MapPin size={14} style={{ opacity: 0.7 }} />
                {area}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/service-area" className="btn-outline">
              View Service Area Details
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p className="section-eyebrow">FAQs</p>
            <h2 className="section-title">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>
    </>
  );
}
