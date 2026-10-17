import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Armada HVAC | Heating & Cooling Services in Dayton, OH",
    template: "%s | Armada HVAC",
  },
  description:
    "Armada HVAC provides professional heating, cooling, and HVAC services in Dayton, Ohio. AC repair, furnace service, installation, maintenance, and emergency HVAC. Call (937) 241-4909.",
  keywords: [
    "HVAC Dayton Ohio",
    "AC repair Dayton",
    "heating repair Dayton",
    "furnace repair Dayton OH",
    "HVAC maintenance Dayton",
    "air conditioning installation Dayton",
    "emergency HVAC service Dayton",
    "Armada HVAC",
  ],
  openGraph: {
    title: "Armada HVAC | Heating & Cooling Services in Dayton, OH",
    description:
      "Professional HVAC services for Dayton homes. Repair, installation, maintenance, and emergency service. Call (937) 241-4909.",
    type: "website",
    locale: "en_US",
    siteName: "Armada HVAC",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#10243A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              name: "Armada HVAC",
              telephone: "+19372414909",
              description:
                "Professional heating, ventilation, and air conditioning services for homes in Dayton, Ohio and surrounding communities.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dayton",
                addressRegion: "OH",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "City", name: "Dayton" },
                { "@type": "City", name: "Huber Heights" },
                { "@type": "City", name: "Riverside" },
                { "@type": "City", name: "Trotwood" },
                { "@type": "City", name: "Kettering" },
                { "@type": "City", name: "Oakwood" },
                { "@type": "City", name: "Beavercreek" },
                { "@type": "City", name: "Fairborn" },
                { "@type": "City", name: "Vandalia" },
                { "@type": "City", name: "Englewood" },
                { "@type": "City", name: "Centerville" },
                { "@type": "City", name: "Miamisburg" },
                { "@type": "City", name: "Moraine" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
