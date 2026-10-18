"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_PHONE_RAW, BUSINESS_NAME } from "@/lib/services-data";

const popularServices = [
  { href: "/services/hvac-repair", label: "HVAC Repair" },
  { href: "/services/ac-repair", label: "AC Repair" },
  { href: "/services/heating-repair", label: "Heating Repair" },
  { href: "/services/ac-installation", label: "AC Installation" },
  { href: "/services/furnace-repair", label: "Furnace Repair" },
  { href: "/services/hvac-maintenance", label: "HVAC Maintenance" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
  { href: "/request-service", label: "Request a Service" },
];

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #10243A 0%, #0c1c2e 100%)",
        color: "#cbd5e1",
      }}
    >
      {/* Footer Content */}
      <div className="container" style={{ padding: "2.5rem 1rem" }}>
        <div className="footer-grid">
          {/* Company Info */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.125rem",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              {BUSINESS_NAME}
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem", color: "#94a3b8" }}>
              Professional heating, ventilation, and air conditioning services
              for homeowners in Dayton, Ohio and surrounding communities.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={14} style={{ color: "var(--orange-accent)", flexShrink: 0 }} />
                <a href={`tel:${BUSINESS_PHONE_RAW}`} style={{ color: "#cbd5e1" }}>
                  {BUSINESS_PHONE}
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={14} style={{ color: "var(--orange-accent)", flexShrink: 0 }} />
                <span>Dayton, Ohio</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Clock size={14} style={{ color: "var(--orange-accent)", flexShrink: 0 }} />
                <span>Available 24/7 by Phone</span>
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9375rem", color: "white", marginBottom: "0.75rem" }}>
              Popular Services
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {popularServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{ color: "#94a3b8", fontSize: "0.875rem", transition: "color 0.2s", padding: "0.125rem 0" }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9375rem", color: "white", marginBottom: "0.75rem" }}>
              Quick Links
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: "#94a3b8", fontSize: "0.875rem", transition: "color 0.2s", padding: "0.125rem 0" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9375rem", color: "white", marginBottom: "0.75rem" }}>
              Get In Touch
            </h3>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#94a3b8", marginBottom: "1rem" }}>
              Need HVAC service? Call us directly or submit a service request
              online. We respond promptly.
            </p>
            <Link
              href="/request-service"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "var(--orange-accent)",
                fontWeight: 600,
                fontSize: "0.875rem",
              }}
            >
              Submit a Request <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.25rem 1rem",
          textAlign: "center",
          fontSize: "0.8125rem",
          color: "#64748b",
        }}
      >
        © {currentYear} {BUSINESS_NAME}. All rights reserved. Dayton, Ohio.
      </div>
    </footer>
  );
}
