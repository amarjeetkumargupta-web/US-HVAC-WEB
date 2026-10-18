"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, CheckCircle, ChevronDown, X, Send, AlertCircle, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  serviceRequestSchema,
  type ServiceRequestFormData,
} from "@/lib/validation";
import {
  services,
  BUSINESS_PHONE,
  BUSINESS_PHONE_RAW,
  BUSINESS_NAME,
} from "@/lib/services-data";

export default function ContactPage() {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ServiceRequestFormData>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      address: "",
      services: [],
      details: "",
    },
  });

  const formatPhoneNumber = (value: string) => {
    let digits = value.replace(/\D/g, "");
    if (digits.length === 11 && digits.startsWith("1")) {
      digits = digits.slice(1);
    }
    digits = digits.slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted, { shouldValidate: true });
    e.target.value = formatted;
  };

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) => {
      const next = prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName];
      setValue("services", next, { shouldValidate: true });
      return next;
    });
  };

  const removeService = (serviceName: string) => {
    setSelectedServices((prev) => {
      const next = prev.filter((s) => s !== serviceName);
      setValue("services", next, { shouldValidate: true });
      return next;
    });
  };

  const onSubmit = async (data: ServiceRequestFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitStatus("success");
        reset();
        setSelectedServices([]);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.error || "Something went wrong. Please try again or call us."
        );
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage(
        "Unable to submit your request. Please try again or call us directly."
      );
    }
  };

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
                  fontSize: "1rem",
                  color: "var(--text-dark)",
                  lineHeight: 1.5,
                  marginTop: "0.5rem",
                }}
              >
                Mon – Fri: 8:00 AM – 6:00 PM | 24/7 Emergency Service
              </p>
            </div>
          </div>

          {/* Embedded Service Request Form */}
          <div style={{ marginTop: "2rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                fontWeight: 800,
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Submit a Service Request
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-body)",
                fontSize: "1.0625rem",
                maxWidth: "500px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              Prefer to send details online? Fill out the form below and
              we&apos;ll follow up promptly.
            </p>

            {submitStatus === "success" ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 2rem",
                  background: "var(--gray-bg)",
                  borderRadius: "1rem",
                  border: "1px solid var(--gray-border)",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <CheckCircle size={40} style={{ color: "var(--success)" }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    marginBottom: "0.75rem",
                  }}
                >
                  Thank You!
                </h3>
                <p
                  style={{
                    color: "var(--text-body)",
                    fontSize: "1.0625rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  We have received your request and will contact you shortly.
                </p>
                <a href={`tel:${BUSINESS_PHONE_RAW}`} className="btn-call">
                  <Phone size={16} />
                  {BUSINESS_PHONE}
                </a>
              </div>
            ) : (
              <div className="form-card">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Full Name */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label className="form-label" htmlFor="contact-fullName">
                      Full Name <span style={{ color: "var(--error)" }}>*</span>
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      className={`form-input ${errors.fullName ? "error" : ""}`}
                      placeholder="Your full name"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="form-error">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label className="form-label" htmlFor="contact-phone">
                      Phone Number <span style={{ color: "var(--error)" }}>*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className={`form-input ${errors.phone ? "error" : ""}`}
                      placeholder="(555) 123-4567"
                      {...register("phone", {
                        onChange: handlePhoneChange,
                      })}
                    />
                    {errors.phone && (
                      <p className="form-error">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label className="form-label" htmlFor="contact-address">
                      Service Address{" "}
                      <span style={{ color: "var(--error)" }}>*</span>
                    </label>
                    <input
                      id="contact-address"
                      type="text"
                      className={`form-input ${errors.address ? "error" : ""}`}
                      placeholder="Street address, city, state"
                      {...register("address")}
                    />
                    {errors.address && (
                      <p className="form-error">{errors.address.message}</p>
                    )}
                  </div>

                  {/* Services Selector */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label className="form-label">
                      Services Requested{" "}
                      <span style={{ color: "var(--error)" }}>*</span>
                    </label>

                    {selectedServices.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {selectedServices.map((name) => (
                          <span
                            key={name}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.375rem",
                              padding: "0.375rem 0.75rem",
                              background: "var(--blue-light)",
                              color: "var(--blue)",
                              borderRadius: "2rem",
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                              border: "1px solid #bfdbf7",
                            }}
                          >
                            {name}
                            <button
                              type="button"
                              onClick={() => removeService(name)}
                              style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "var(--blue)",
                                padding: 0,
                                display: "flex",
                              }}
                              aria-label={`Remove ${name}`}
                            >
                              <X size={14} />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectorOpen(!selectorOpen)}
                      className={`form-input ${errors.services ? "error" : ""}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        color:
                          selectedServices.length === 0
                            ? "#94a3b8"
                            : "var(--text-dark)",
                        textAlign: "left",
                      }}
                    >
                      <span>
                        {selectedServices.length === 0
                          ? "Click to select services..."
                          : `${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""} selected`}
                      </span>
                      <ChevronDown
                        size={18}
                        style={{
                          transition: "transform 0.2s",
                          transform: selectorOpen
                            ? "rotate(180deg)"
                            : "rotate(0)",
                          color: "var(--gray-text)",
                        }}
                      />
                    </button>

                    {selectorOpen && (
                      <div
                        className="animate-slide-down"
                        style={{
                          marginTop: "0.5rem",
                          border: "1px solid var(--gray-border)",
                          borderRadius: "0.75rem",
                          background: "var(--white)",
                          boxShadow: "0 8px 30px rgba(16,36,58,0.08)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            padding: "1rem 1.25rem 0.75rem",
                            borderBottom: "1px solid var(--gray-border)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontWeight: 700,
                              fontSize: "0.875rem",
                              color: "var(--text-dark)",
                            }}
                          >
                            Select Services ({selectedServices.length} selected)
                          </span>
                          <button
                            type="button"
                            onClick={() => setSelectorOpen(false)}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "var(--gray-text)",
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                              display: "flex",
                              alignItems: "center",
                              gap: "0.25rem",
                            }}
                          >
                            Done <CheckCircle size={14} />
                          </button>
                        </div>
                        <div
                          className="service-selector-grid"
                          style={{ padding: "0.75rem" }}
                        >
                          {services.map((s) => (
                            <label
                              key={s.slug}
                              className={`service-checkbox ${
                                selectedServices.includes(s.name) ? "selected" : ""
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={selectedServices.includes(s.name)}
                                onChange={() => toggleService(s.name)}
                              />
                              <span
                                style={{
                                  fontSize: "0.875rem",
                                  fontWeight: 500,
                                  color: "var(--text-dark)",
                                }}
                              >
                                {s.name}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {errors.services && (
                      <p className="form-error">{errors.services.message}</p>
                    )}
                  </div>

                  {/* Details */}
                  <div style={{ marginBottom: "2rem" }}>
                    <label className="form-label" htmlFor="contact-details">
                      Additional Details{" "}
                      <span style={{ color: "var(--gray-text)", fontWeight: 400 }}>
                        (Optional)
                      </span>
                    </label>
                    <textarea
                      id="contact-details"
                      className="form-input"
                      rows={4}
                      placeholder="Describe your issue or any relevant details..."
                      style={{ resize: "vertical", minHeight: "100px" }}
                      {...register("details")}
                    />
                    {errors.details && (
                      <p className="form-error">{errors.details.message}</p>
                    )}
                  </div>

                  {/* Error Banner */}
                  {submitStatus === "error" && (
                    <div
                      style={{
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        borderRadius: "0.5rem",
                        padding: "1rem 1.25rem",
                        marginBottom: "1.5rem",
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <AlertCircle
                        size={20}
                        style={{
                          color: "var(--error)",
                          flexShrink: 0,
                          marginTop: "0.125rem",
                        }}
                      />
                      <div>
                        <p
                          style={{
                            color: "var(--error)",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            marginBottom: "0.25rem",
                          }}
                        >
                          Submission Failed
                        </p>
                        <p
                          style={{
                            color: "#991b1b",
                            fontSize: "0.875rem",
                          }}
                        >
                          {errorMessage}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={submitStatus === "loading"}
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      fontSize: "1rem",
                      padding: "1rem 2rem",
                      opacity: submitStatus === "loading" ? 0.75 : 1,
                    }}
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <span className="spinner" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Service Request
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "1rem",
                      fontSize: "0.8125rem",
                      color: "var(--gray-text)",
                    }}
                  >
                    Or call us directly at{" "}
                    <a
                      href={`tel:${BUSINESS_PHONE_RAW}`}
                      style={{ fontWeight: 700, color: "var(--blue)" }}
                    >
                      {BUSINESS_PHONE}
                    </a>
                  </p>
                </form>
              </div>
            )}
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
                Use the form above to describe your situation, choose services,
                and provide your contact details. We&apos;ll follow up promptly.
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
