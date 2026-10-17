import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Wrench,
  Snowflake,
  AirVent,
  Settings,
  Flame,
  Heater,
  ShieldCheck,
  Thermometer,
  Wind,
  Leaf,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
  BUSINESS_PHONE,
  BUSINESS_PHONE_RAW,
} from "@/lib/services-data";
import FAQAccordion from "@/components/FAQAccordion";

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench size={36} />,
  Snowflake: <Snowflake size={36} />,
  AirVent: <AirVent size={36} />,
  Settings: <Settings size={36} />,
  Flame: <Flame size={36} />,
  Heater: <Heater size={36} />,
  ShieldCheck: <ShieldCheck size={36} />,
  Thermometer: <Thermometer size={36} />,
  Wind: <Wind size={36} />,
  Leaf: <Leaf size={36} />,
  RefreshCw: <RefreshCw size={36} />,
  AlertTriangle: <AlertTriangle size={36} />,
};

const smallIconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench size={22} />,
  Snowflake: <Snowflake size={22} />,
  AirVent: <AirVent size={22} />,
  Settings: <Settings size={22} />,
  Flame: <Flame size={22} />,
  Heater: <Heater size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Thermometer: <Thermometer size={22} />,
  Wind: <Wind size={22} />,
  Leaf: <Leaf size={22} />,
  RefreshCw: <RefreshCw size={22} />,
  AlertTriangle: <AlertTriangle size={22} />,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedServices);

  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 80% 30%, rgba(245,158,11,0.08) 0%, transparent 50%)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}
        >
          <nav
            className="breadcrumbs"
            style={{ color: "rgba(255,255,255,0.6)", marginBottom: "1rem" }}
          >
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }}>
              Home
            </Link>
            <span className="separator">/</span>
            <Link href="/services" style={{ color: "rgba(255,255,255,0.6)" }}>
              Services
            </Link>
            <span className="separator">/</span>
            <span style={{ color: "rgba(255,255,255,0.9)" }}>
              {service.name}
            </span>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F59E0B",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {iconMap[service.icon]}
            </div>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 900,
                color: "white",
              }}
            >
              {service.name}
            </h1>
          </div>

          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              maxWidth: "650px",
              marginBottom: "2rem",
            }}
          >
            {service.heroDescription}
          </p>

          <div className="hero-cta-row">
            <a
              href={`tel:${BUSINESS_PHONE_RAW}`}
              className="btn-call"
              style={{ fontSize: "0.9375rem" }}
            >
              <Phone size={16} />
              {BUSINESS_PHONE}
            </a>
            <Link
              href="/request-service"
              className="btn-secondary"
              style={{ fontSize: "0.9375rem" }}
            >
              Request This Service
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              marginBottom: "1.25rem",
            }}
          >
            {service.name} in Dayton, OH
          </h2>
          {service.overview.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.8,
                marginBottom: "1rem",
                color: "var(--text-body)",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Common Problems */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <AlertCircle size={24} style={{ color: "var(--blue)" }} />
            Common Signs You May Need {service.name}
          </h2>
          <div className="problems-grid">
            {service.commonProblems.map((problem, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  background: "var(--white)",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--gray-border)",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--orange-accent)",
                    marginTop: "0.5rem",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "var(--text-body)",
                  }}
                >
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
            }}
          >
            {service.whatWeDoTitle}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            {service.whatWeDo.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <CheckCircle
                  size={20}
                  style={{
                    color: "var(--blue)",
                    marginTop: "0.2rem",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.6,
                    color: "var(--text-body)",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="section section-alt">
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
              }}
            >
              {service.name} — Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={service.faqs} />
          </div>
        </section>
      )}

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <h2
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Related Services
            </h2>
            <div className="related-grid">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    textDecoration: "none",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "0.5rem",
                      background: "var(--blue-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--blue)",
                      flexShrink: 0,
                    }}
                  >
                    {smallIconMap[rel.icon] || <Wrench size={22} />}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: "var(--text-dark)",
                      }}
                    >
                      {rel.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--blue)",
                        fontWeight: 600,
                      }}
                    >
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
          color: "white",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              marginBottom: "0.75rem",
              color: "white",
            }}
          >
            Need {service.name}?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.0625rem",
              marginBottom: "2rem",
            }}
          >
            Contact Armada HVAC to discuss your situation and schedule service
            at a time that works for you.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <a href={`tel:${BUSINESS_PHONE_RAW}`} className="btn-call">
              <Phone size={16} />
              Call Now
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
