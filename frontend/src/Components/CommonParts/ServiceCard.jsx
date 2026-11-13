import {
  ArrowUpRight,
  BookOpen,
  ClipboardList,
  MessageCircle,
  Pill,
  Stethoscope,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  stethoscope: Stethoscope,
  pill: Pill,
  clipboard: ClipboardList,
  truck: Truck,
  message: MessageCircle,
  book: BookOpen,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <article className="bg-[#fff] shadow-md rounded-lg p-2 min-h-60 relative hover:scale-105 transition-all duration-300 cursor-pointer text-[#171a43] service-card">
      <div className="h-12 w-12 grid place-content-center rounded-xl bg-[#e8f7f4] text-[#168e83] mb-4 service-icon">
        <Icon size={23} />
      </div>
      <div className="absolute top-6 right-5 service-card-top">
        <span className="text-xs font-semibold text-[#8a641e] bg-[#fff5df] py-2 px-3 status-pill">
          {service.status}
        </span>
      </div>

      <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
      <p className="text-sm">{service.description}</p>

      <Link
        to={service.link}
        className="flex items-center gap-2 text-[#168e83] text-sm font-bold mt-4 hover:gap-3 text-link"
      >
        Learn more <ArrowUpRight size={15} />
      </Link>
    </article>
  );
}
