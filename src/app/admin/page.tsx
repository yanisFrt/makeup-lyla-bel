"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Reservation from "./components/Reservation";
import Profil from "./components/Profil";
import Gallery from "./components/Gallery";
import History from "./components/History";
export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 p-10 text-[#f8e6d2] bg-[#5a011a]">
        {activeSection === "dashboard" && (
          <Dashboard setActiveSection={setActiveSection} />
        )}
        {activeSection === "reservation" && <Reservation />}

        {activeSection === "historique" && <History />}

        {activeSection === "profil" && <Profil />}

        {activeSection === "galerie" && <Gallery />}
      </main>
    </div>
  );
}
