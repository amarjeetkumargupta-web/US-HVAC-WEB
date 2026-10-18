import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Armada HVAC | Dayton, Ohio",
  description:
    "Contact Armada HVAC for heating and cooling service in Dayton, Ohio. Call (937) 241-4909 or submit a service request online.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
