import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { services, BUSINESS_PHONE, BUSINESS_PHONE_RAW } from "@/lib/services-data";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "HVAC Services in Dayton, OH | Armada HVAC",
  description:
    "Armada HVAC provides full-service heating, cooling, and HVAC solutions in Dayton, Ohio — including AC repair, heating repair, furnace service, maintenance, installation, and emergency HVAC. Call (937) 241-4909.",
};

/* Group services into logical categories */
const serviceGroups = [
  {
    title: "Cooling Services",
    slugs: ["ac-repair", "ac-installation", "ac-maintenance"],
  },
  {
    title: "Heating Services",
    slugs: ["heating-repair", "heating-installation", "furnace-repair", "furnace-maintenance"],
  },
  {
    title: "Full System Services",
    slugs: ["hvac-repair", "hvac-maintenance", "hvac-replacement"],
  },
  {
    title: "Additional Services",
    slugs: ["thermostat-services", "ductwork-ventilation", "indoor-air-quality", "emergency-hvac-service"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 70% 30%, rgba(245,158,11,0.08) 0%, transparent 50%)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}
        >
          <nav
            className="breadcrumbs"
            style={{ color: "rgba(255,255,255,0.6)", marginBottom: "0.75rem" }}
          >
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }}>
              Home
            </Link>
            <span className="separator">/</span>
            <span style={{ color: "rgba(255,255,255,0.9)" }}>Services</span>
          </nav>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: "0.75rem",
              color: "white",
            }}
          >
            Our HVAC Services
          </h1>
          <p
            style={{
              fontSize: "clamp(0.9375rem, 2vw, 1.125rem)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            Armada HVAC offers complete heating, cooling, and ventilation
            services for homeowners in Dayton, Ohio and surrounding communities.
          </p>
        </div>
      </section>

      {/* Grouped Services */}
      <section className="section">
        <div className="container">
          {serviceGroups.map((group) => {
            const groupServices = group.slugs
              .map((slug) => services.find((s) => s.slug === slug))
              .filter((s): s is (typeof services)[number] => s !== undefined);

            return (
              <div key={group.title} style={{ marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                    fontWeight: 800,
                    marginBottom: "1.25rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "2px solid var(--blue-light)",
                    color: "var(--text-dark)",
                  }}
                >
                  {group.title}
                </h2>
                <div className="services-grid">
                  {groupServices.map((service, i) => (
                    <ServiceCard key={service.slug} service={service} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Single Bottom CTA */}
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
            Not Sure Which Service You Need?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.0625rem",
              marginBottom: "2rem",
            }}
          >
            Submit a service request describing your situation. We&apos;ll help
            identify the right solution for your home.
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
