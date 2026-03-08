import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="bg-navy-900 text-slate-300 text-xs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="hidden sm:flex items-center gap-6">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3" />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email.primary}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3" />
              {SITE.email.primary}
            </a>
          </div>
          <div className="flex items-center gap-1.5 sm:ml-auto">
            <MapPin className="h-3 w-3" />
            <span>
              {SITE.address.street}, {SITE.address.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
