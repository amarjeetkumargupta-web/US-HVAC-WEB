import Link from "next/link";
import {
  Wrench,
  Snowflake,
  AirVent,
  Settings,
  Flame,
  Heater,
  ShieldCheck,
  Thermometer,
  Wind,
  Leaf,
  RefreshCw,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { ServiceData } from "@/lib/services-data";

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench size={28} />,
  Snowflake: <Snowflake size={28} />,
  AirVent: <AirVent size={28} />,
  Settings: <Settings size={28} />,
  Flame: <Flame size={28} />,
  Heater: <Heater size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
  Thermometer: <Thermometer size={28} />,
  Wind: <Wind size={28} />,
  Leaf: <Leaf size={28} />,
  RefreshCw: <RefreshCw size={28} />,
  AlertTriangle: <AlertTriangle size={28} />,
};

interface ServiceCardProps {
  service: ServiceData;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card service-card"
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
      }}
    >
      <div className="service-card-icon">
        {iconMap[service.icon] || <Wrench size={28} />}
      </div>
      <h3 className="service-card-title">
        {service.name}
      </h3>
      <p className="service-card-desc">
        {service.shortDescription}
      </p>
      <div className="service-card-link">
        Learn More
        <ArrowRight size={14} />
      </div>
    </Link>
  );
}
