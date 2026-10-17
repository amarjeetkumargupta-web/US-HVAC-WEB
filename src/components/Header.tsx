"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_PHONE_RAW, BUSINESS_NAME } from "@/lib/services-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    submenu: [
      { href: "/services/hvac-repair", label: "HVAC Repair" },
      { href: "/services/ac-repair", label: "AC Repair" },
      { href: "/services/ac-installation", label: "AC Installation" },
      { href: "/services/ac-maintenance", label: "AC Maintenance" },
      { href: "/services/heating-repair", label: "Heating Repair" },
      { href: "/services/heating-installation", label: "Heating Installation" },
      { href: "/services/furnace-repair", label: "Furnace Repair" },
      { href: "/services/furnace-maintenance", label: "Furnace Maintenance" },
      { href: "/services/hvac-maintenance", label: "HVAC Maintenance" },
      { href: "/services/thermostat-services", label: "Thermostat Services" },
      { href: "/services/ductwork-ventilation", label: "Ductwork & Ventilation" },
      { href: "/services/indoor-air-quality", label: "Indoor Air Quality" },
      { href: "/services/hvac-replacement", label: "HVAC Replacement" },
      { href: "/services/emergency-hvac-service", label: "Emergency HVAC" },
    ],
  },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
];

/*
 * ============================================
 * LOGO IMAGE INSTRUCTIONS:
 * ============================================
 * 
 * To use your custom logo:
 * 1. Place your logo file at: public/images/logo.png
 *    (Recommended size: 160x42px, PNG with transparent background)
 * 2. Change USE_IMAGE_LOGO to `true` below
 * 3. The logo will appear on both desktop and mobile header
 *
 * If you don't have a logo yet, the text-based "A" wordmark will display.
 * ============================================
 */
const USE_IMAGE_LOGO = true; // ← Set to true when you add your logo to public/images/logo.png

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          background: "linear-gradient(135deg, #10243A 0%, #1a3654 100%)",
          color: "#e2e8f0",
          fontSize: "0.75rem",
          padding: "0.5rem 1rem",
          textAlign: "center",
          fontWeight: 500,
          letterSpacing: "0.02em",
        }}
      >
        ❄️ Serving Dayton & Surrounding Areas — Call{" "}
        <a
          href={`tel:${BUSINESS_PHONE_RAW}`}
          style={{ color: "#F59E0B", fontWeight: 700, textDecoration: "none" }}
        >
          {BUSINESS_PHONE}
        </a>{" "}
        for Fast HVAC Service
      </div>

      {/* Main Header */}
      <header
        className={`sticky-header ${scrolled ? "scrolled" : ""}`}
        style={{
          background: "var(--white)",
          borderBottom: "1px solid var(--gray-border)",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "72px", padding: "0.35rem 1rem" }}>
          {/* 
           * ============================================
           * LOGO SECTION
           * ============================================
           * INSERT YOUR LOGO IMAGE AT: public/images/logo.png
           * Set USE_IMAGE_LOGO = true at the top of this file
           * ============================================
           */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            {USE_IMAGE_LOGO ? (
              /* Logo Image — displays when USE_IMAGE_LOGO = true */
              <Image
                src="/images/logo.png"
                alt="Armada HVAC Logo"
                width={200}
                height={88}
                priority
                style={{ height: "54px", width: "auto", objectFit: "contain", display: "block" }}
              />
            ) : (
              /* Text Logo Fallback — displays until you have a logo image */
              <>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "linear-gradient(135deg, var(--navy), var(--blue))",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "1.125rem",
                    flexShrink: 0,
                  }}
                >
                  A
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: "var(--navy)",
                      lineHeight: 1.1,
                    }}
                  >
                    {BUSINESS_NAME}
                  </div>
                  <div
                    className="header-logo-text-sub"
                    style={{
                      fontSize: "0.625rem",
                      color: "var(--gray-text)",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                    }}
                  >
                    HEATING • COOLING • COMFORT
                  </div>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Nav — hidden on mobile via CSS */}
          <nav className="desktop-nav">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.href}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      padding: "0.5rem 0.875rem",
                      color: "var(--text-dark)",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      borderRadius: "0.375rem",
                      transition: "all 0.2s",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                    <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0)" }} />
                  </Link>
                  {servicesOpen && (
                    <div
                      className="animate-slide-down"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "280px",
                        background: "var(--white)",
                        borderRadius: "0.75rem",
                        border: "1px solid var(--gray-border)",
                        boxShadow: "0 10px 40px rgba(16,36,58,0.12)",
                        padding: "0.5rem",
                        zIndex: 100,
                      }}
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          style={{
                            display: "block",
                            padding: "0.625rem 1rem",
                            color: "var(--text-body)",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            borderRadius: "0.375rem",
                            transition: "all 0.15s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--blue-light)";
                            e.currentTarget.style.color = "var(--blue)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "var(--text-body)";
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.5rem 0.875rem",
                    color: "var(--text-dark)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    borderRadius: "0.375rem",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a href={`tel:${BUSINESS_PHONE_RAW}`} className="btn-call desktop-call-btn">
              <Phone size={16} />
              Call Now
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Sidebar */}
      {mobileOpen && (
        <>
          <div className="mobile-nav-overlay" onClick={() => setMobileOpen(false)} />
          <div className="mobile-nav">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              {USE_IMAGE_LOGO ? (
                <Image
                  src="/images/logo.png"
                  alt="Armada HVAC Logo"
                  width={180}
                  height={79}
                  style={{ height: "46px", width: "auto", objectFit: "contain" }}
                />
              ) : (
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.125rem", color: "var(--navy)" }}>
                  Menu
                </span>
              )}
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", padding: "0.25rem" }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.href}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 0",
                      borderBottom: "1px solid var(--gray-border)",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        color: "var(--text-dark)",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: "1.0625rem",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem" }}
                    >
                      <ChevronDown
                        size={18}
                        style={{
                          transition: "transform 0.2s",
                          transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0)",
                          color: "var(--gray-text)",
                        }}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div style={{ paddingLeft: "0.5rem", background: "var(--gray-bg)", borderRadius: "0.5rem", margin: "0.25rem 0 0.5rem" }}>
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: "block",
                            padding: "0.75rem",
                            color: "var(--text-body)",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            borderBottom: "1px solid var(--gray-border)",
                            textDecoration: "none",
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "1rem 0",
                    color: "var(--text-dark)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "1.0625rem",
                    borderBottom: "1px solid var(--gray-border)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href={`tel:${BUSINESS_PHONE_RAW}`} className="btn-call" style={{ width: "100%", justifyContent: "center" }}>
                <Phone size={16} />
                Call {BUSINESS_PHONE}
              </a>
              <Link
                href="/request-service"
                className="btn-primary"
                onClick={() => setMobileOpen(false)}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Request a Service
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
