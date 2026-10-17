"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  X,
  Send,
  AlertCircle,
} from "lucide-react";
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
} from "@/lib/services-data";

export default function RequestServicePage() {
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

  if (submitStatus === "success") {
    return (
      <>
        <section className="hero-section" style={{ paddingBottom: "2rem" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <nav
              className="breadcrumbs"
              style={{ color: "rgba(255,255,255,0.6)", marginBottom: "1rem" }}
            >
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }}>Home</Link>
              <span className="separator">/</span>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>Request a Service</span>
            </nav>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "white",
              }}
            >
              Request a Service
            </h1>
          </div>
        </section>
        <section className="section">
          <div
            className="container"
            style={{
              maxWidth: "600px",
              textAlign: "center",
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
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                marginBottom: "0.75rem",
              }}
            >
              Request Submitted Successfully!
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Thank you for contacting Armada HVAC. We&apos;ve received your
              service request and will follow up with you as soon as possible.
              For immediate assistance, please call us directly.
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
              <Link href="/" className="btn-outline">
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-section" style={{ paddingBottom: "2rem" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(23,105,170,0.2) 0%, transparent 50%)",
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
            <span style={{ color: "rgba(255,255,255,0.9)" }}>
              Request a Service
            </span>
          </nav>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: "0.75rem",
              color: "white",
            }}
          >
            Request a Service
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            Tell us about your HVAC needs. Fill out the form below and
            we&apos;ll follow up with you promptly.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container" style={{ maxWidth: "680px" }}>
          <div className="form-card">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Full Name */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label className="form-label" htmlFor="fullName">
                  Full Name <span style={{ color: "var(--error)" }}>*</span>
                </label>
                <input
                  id="fullName"
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
                <label className="form-label" htmlFor="phone">
                  Phone Number <span style={{ color: "var(--error)" }}>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`form-input ${errors.phone ? "error" : ""}`}
                  placeholder="(555) 123-4567"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="form-error">{errors.phone.message}</p>
                )}
              </div>

              {/* Address */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label className="form-label" htmlFor="address">
                  Service Address{" "}
                  <span style={{ color: "var(--error)" }}>*</span>
                </label>
                <input
                  id="address"
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

                {/* Selected Tags */}
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

                {/* Selector Button */}
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

                {/* Dropdown Panel */}
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
                <label className="form-label" htmlFor="details">
                  Additional Details{" "}
                  <span style={{ color: "var(--gray-text)", fontWeight: 400 }}>
                    (Optional)
                  </span>
                </label>
                <textarea
                  id="details"
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
        </div>
      </section>
    </>
  );
}
