import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Service | Armada HVAC — Dayton, OH",
  description:
    "Submit a service request to Armada HVAC. Select the HVAC services you need, provide your details, and we'll follow up promptly. Serving Dayton, Ohio.",
};

export default function RequestServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
