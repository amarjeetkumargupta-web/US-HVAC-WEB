import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "500px" }}>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "6rem",
            color: "var(--blue)",
            lineHeight: 1,
            marginBottom: "1rem",
            opacity: 0.15,
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.75rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: "var(--text-body)",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let us help you find what you need.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Go Home
          </Link>
          <Link href="/services" className="btn-outline">
            View Services
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
