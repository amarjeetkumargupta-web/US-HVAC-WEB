import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import {
  SERVICE_AREAS,
  BUSINESS_PHONE,
  BUSINESS_PHONE_RAW,
  BUSINESS_NAME,
} from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Service Area — Dayton, OH & Surrounding Communities | Armada HVAC",
  description:
    "Armada HVAC serves Dayton, Ohio and surrounding communities including Huber Heights, Kettering, Beavercreek, Fairborn, Centerville, and more. Call (937) 241-4909.",
};

export default function ServiceAreaPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 60% 40%, rgba(23,105,170,0.25) 0%, transparent 50%)",
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
            <span style={{ color: "rgba(255,255,255,0.9)" }}>Service Area</span>
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
            Our Service Area
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            {BUSINESS_NAME} provides HVAC services to homeowners in Dayton,
            Ohio and surrounding communities throughout the greater Dayton
            metropolitan area.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            Communities We Serve
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "var(--text-body)",
              marginBottom: "2.5rem",
            }}
          >
            We proudly serve Dayton and the following surrounding communities.
            If your location isn&apos;t listed, contact us — we may still be
            able to help depending on your address.
          </p>

          <div className="location-grid" style={{ marginBottom: "2rem" }}>
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1.25rem 1.5rem",
                  background:
                    area === "Dayton" ? "var(--blue)" : "var(--white)",
                  color: area === "Dayton" ? "white" : "var(--text-dark)",
                  borderRadius: "0.75rem",
                  border:
                    area === "Dayton"
                      ? "none"
                      : "1px solid var(--gray-border)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  transition: "all 0.2s ease",
                }}
              >
                <MapPin
                  size={18}
                  style={{
                    color: area === "Dayton" ? "#F59E0B" : "var(--blue)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div>{area}</div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color:
                        area === "Dayton"
                          ? "rgba(255,255,255,0.75)"
                          : "var(--gray-text)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {area === "Dayton" ? "Primary Service Area" : "Ohio"}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div
            style={{
              background: "var(--blue-light)",
              border: "1px solid #bfdbf7",
              borderRadius: "0.75rem",
              padding: "1.5rem 2rem",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <CheckCircle size={18} style={{ color: "var(--blue)" }} />
              Coverage Note
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--text-body)",
              }}
            >
              Service availability can vary by specific location. If your
              community isn&apos;t listed above but is near the Dayton area,
              please contact us with your address and we&apos;ll confirm
              whether we can provide service at your location.
            </p>
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            HVAC Services Available in Your Area
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--gray-text)",
              fontSize: "1.0625rem",
              marginBottom: "2rem",
            }}
          >
            Our complete range of HVAC services is available throughout our
            service area.
          </p>
          <div className="services-checklist-grid">
            {[
              "HVAC Repair",
              "AC Repair",
              "AC Installation",
              "AC Maintenance",
              "Heating Repair",
              "Heating Installation",
              "Furnace Repair",
              "Furnace Maintenance",
              "HVAC Maintenance",
              "Thermostat Services",
              "Ductwork & Ventilation",
              "Indoor Air Quality",
              "HVAC Replacement",
              "Emergency HVAC Service",
            ].map((name) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.625rem 0.75rem",
                  background: "var(--white)",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--gray-border)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                <CheckCircle
                  size={16}
                  style={{ color: "var(--blue)", flexShrink: 0 }}
                />
                {name}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/services" className="btn-outline">
              View Service Details
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            In Our Service Area? Let&apos;s Talk.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.0625rem",
              marginBottom: "2rem",
            }}
          >
            Contact us to discuss your HVAC needs and confirm service
            availability at your address.
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
