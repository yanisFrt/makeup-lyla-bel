"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaUser,
  FaImages,
  FaBars,
  FaTimes,
} from "react-icons/fa";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: <FaHome /> },
    { key: "reservation", label: "Réservation", icon: <FaCalendarAlt /> },
    { key: "historique", label: "Historique", icon: <FaHistory /> },
    { key: "profil", label: "Profil", icon: <FaUser /> },
    { key: "galerie", label: "Galerie", icon: <FaImages /> },
  ];

  return (
    <>
      <header className="md:hidden flex justify-between items-center  text-white p-4 fixed top-0 left-0 right-0 z-50">
        <button onClick={() => setMenuOpen(true)}>
          <FaBars className="w-6 h-6" />
        </button>
      </header>

      <aside
        className={`fixed md:static top-0 left-0 md:top-auto md:left-auto 
          bg-[#f8e6d2] text-[#5a011a] flex flex-col items-center py-8 shadow-lg 
          w-4/5 sm:w-2/5 md:w-1/5 z-50 md:z-10
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 h-full md:h-screen md:fixed md:top-0 md:left-0`}
      >
        <button
          className="absolute top-4 right-4 text-[#5a011a] md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes className="w-6 h-6" />
        </button>

        <div className="w-24 h-24 mb-4 relative mt-8 md:mt-0">
          <Image
            src="/logoM.png"
            alt="Photo de profil"
            fill
            className="rounded-full object-cover border-4 border-[#5a011a]/20"
          />
        </div>

        <nav className="flex flex-col space-y-3 w-full text-left px-4 mt-6">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveSection(item.key);
                setMenuOpen(false);
              }}
              className={`flex items-center gap-3 w-full py-2 px-3 rounded-lg transition font-medium ${
                activeSection === item.key
                  ? "bg-[#5a011a] text-white"
                  : "hover:bg-[#5a011a] hover:text-white text-[#5a011a]"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
