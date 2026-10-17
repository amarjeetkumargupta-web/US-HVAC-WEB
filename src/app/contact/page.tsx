import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail, ArrowRight } from "lucide-react";
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_RAW,
  BUSINESS_NAME,
} from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Contact Armada HVAC | Dayton, Ohio",
  description:
    "Contact Armada HVAC for heating and cooling service in Dayton, Ohio. Call (937) 241-4909 or submit a service request online.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 40% 50%, rgba(23,105,170,0.25) 0%, transparent 50%)",
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
            <span style={{ color: "rgba(255,255,255,0.9)" }}>Contact</span>
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
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            Have a question or need HVAC service? Get in touch with{" "}
            {BUSINESS_NAME}. We&apos;re here to help Dayton-area homeowners
            with all their heating and cooling needs.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="contact-grid" style={{ marginBottom: "2rem" }}>
            {/* Phone Card */}
            <div
              style={{
                background: "var(--blue)",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                color: "white",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}
              >
                <Phone size={28} style={{ color: "#F59E0B" }} />
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  marginBottom: "0.5rem",
                  color: "white",
                }}
              >
                Call Us
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "1.25rem",
                  fontSize: "0.9375rem",
                }}
              >
                The fastest way to reach us for any HVAC concern.
              </p>
              <a
                href={`tel:${BUSINESS_PHONE_RAW}`}
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "#F59E0B",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                {BUSINESS_PHONE}
              </a>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.8125rem",
                  marginTop: "0.5rem",
                }}
              >
                Available by phone 24/7
              </p>
            </div>

            {/* Location Card */}
            <div
              style={{
                background: "var(--white)",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                border: "1px solid var(--gray-border)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "var(--blue-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}
              >
                <MapPin size={28} style={{ color: "var(--blue)" }} />
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  marginBottom: "0.5rem",
                }}
              >
                Service Location
              </h2>
              <p
                style={{
                  color: "var(--text-body)",
                  marginBottom: "0.75rem",
                  fontSize: "0.9375rem",
                }}
              >
                Serving homeowners across the greater Dayton area.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "var(--text-dark)",
                }}
              >
                Dayton, Ohio
              </p>
              <Link
                href="/service-area"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--blue)",
                  marginTop: "0.75rem",
                }}
              >
                View Full Service Area <ArrowRight size={12} />
              </Link>
            </div>

            {/* Hours Card */}
            <div
              style={{
                background: "var(--white)",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                border: "1px solid var(--gray-border)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "var(--blue-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}
              >
                <Clock size={28} style={{ color: "var(--blue)" }} />
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  marginBottom: "0.5rem",
                }}
              >
                Availability
              </h2>
              <p
                style={{
                  color: "var(--text-body)",
                  marginBottom: "0.75rem",
                  fontSize: "0.9375rem",
                }}
              >
                Phone available for questions and emergencies.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "var(--text-dark)",
                }}
              >
                24/7 by Phone
              </p>
              <p
                style={{
                  color: "var(--gray-text)",
                  fontSize: "0.8125rem",
                  marginTop: "0.5rem",
                }}
              >
                Business hours to be confirmed
              </p>
            </div>
          </div>

          {/* Request Service Section */}
          <div
            style={{
              background: "var(--gray-bg)",
              borderRadius: "1rem",
              padding: "3rem",
              textAlign: "center",
              border: "1px solid var(--gray-border)",
            }}
          >
            <Mail
              size={36}
              style={{ color: "var(--blue)", marginBottom: "1rem" }}
            />
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.5rem",
                marginBottom: "0.75rem",
              }}
            >
              Submit a Service Request
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "1.0625rem",
                maxWidth: "500px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              Prefer to send details online? Use our service request form to
              describe your situation, select the services you need, and
              we&apos;ll follow up promptly.
            </p>
            <Link href="/request-service" className="btn-primary">
              Request a Service
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info */}
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
            How to Reach Us
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-body)",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            The fastest way to get help is to call us directly. For
            non-urgent requests, the service request form allows you to
            provide details at your convenience — including which services
            you need and a description of the issue.
          </p>
          <div className="reach-us-grid">
            <div
              style={{
                background: "var(--white)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                border: "1px solid var(--gray-border)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                For Immediate Help
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: 1.6 }}>
                Call{" "}
                <a
                  href={`tel:${BUSINESS_PHONE_RAW}`}
                  style={{ fontWeight: 700, color: "var(--blue)" }}
                >
                  {BUSINESS_PHONE}
                </a>{" "}
                to speak with us directly about your heating or cooling
                concern.
              </p>
            </div>
            <div
              style={{
                background: "var(--white)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                border: "1px solid var(--gray-border)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                For Service Requests
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: 1.6 }}>
                Use our{" "}
                <Link
                  href="/request-service"
                  style={{ fontWeight: 700, color: "var(--blue)" }}
                >
                  online form
                </Link>{" "}
                to describe your situation, choose services, and provide your
                contact details.
              </p>
            </div>
            <div
              style={{
                background: "var(--white)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                border: "1px solid var(--gray-border)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                For Emergencies
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: 1.6 }}>
                If you have an urgent HVAC issue — especially heating
                failure in cold weather or gas concerns — call us immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
