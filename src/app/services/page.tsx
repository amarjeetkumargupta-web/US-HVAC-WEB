import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "HVAC Services in Dayton, OH | Armada HVAC",
  description:
    "Armada HVAC provides 14 professional HVAC services in Dayton, Ohio — including AC repair, heating repair, furnace service, maintenance, installation, and emergency HVAC. Call (937) 241-4909.",
};

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
            Armada HVAC offers 14 professional heating, cooling, and ventilation
            services for homeowners in Dayton, Ohio and surrounding communities.
          </p>
        </div>
      </section>

      {/* Services Grid — uses responsive .services-grid class */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-alt" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 className="section-title">
            Not Sure Which Service You Need?
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "1.5rem" }}>
            Submit a service request describing your situation. We&apos;ll help
            identify the right solution for your home.
          </p>
          <Link href="/request-service" className="btn-primary">
            Request a Service
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
