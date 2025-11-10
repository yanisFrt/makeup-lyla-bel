import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceDropdownProps {
  services: string[];
  selected: string;
  setSelected: (service: string) => void;
}

export default function ServiceDropdown({
  services,
  selected,
  setSelected,
}: ServiceDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between gap-3 bg-white/30 backdrop-blur-lg border border-[#c9a063]/50 rounded-xl px-4 py-3 cursor-pointer shadow-[0_0_8px_rgba(201,160,99,0.25)] ${
          open ? "shadow-[0_0_12px_rgba(201,160,99,0.45)]" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={
              selected ? "text-[#4b0030] font-medium" : "text-[#4b0030]/60"
            }
          >
            {selected || "Type de service"}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          ▼
        </motion.span>
      </div>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute left-0 right-0 mt-2 bg-[#fff9f1]/95 backdrop-blur-xl border border-[#c9a063]/40 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.08)] overflow-hidden z-20"
        >
          {services.map((service) => (
            <li
              key={service}
              onClick={() => {
                setSelected(service);
                setOpen(false);
              }}
              className="px-4 py-3 text-[#4b0030] hover:bg-gradient-to-r hover:from-[#f8e6d2] hover:to-[#f8e6d2] hover:text-[#5a011a] cursor-pointer transition-all duration-200"
            >
              {service}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
