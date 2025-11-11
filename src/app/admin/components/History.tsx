import { useState } from "react";
import { CiCalendar } from "react-icons/ci";

export default function History() {
  const [selectedTab, setSelectedTab] = useState("accepté");

  const reservations = [
    {
      titre: "Maquillage mariage",
      status: "accepté",
      date: "05/11/2025 à 10h00",
    },
    {
      titre: "Shooting photo",
      status: "refusé",
      date: "01/11/2025 à 12h00",
    },
    {
      titre: "Maquillage artistique",
      status: "accepté",
      date: "08/11/2025 à 09h00",
    },
  ];
  return (
    <div>
      <h1 className="md:flex hidden text-3xl font-bold mb-6">
        Historique des réservations
      </h1>

      <div className="flex space-x-4 mb-6 md:mt-0 mt-7">
        {["accepté", "refusé"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-lg border transition font-medium ${
              selectedTab === tab
                ? "border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/20"
                : "bg-[#5a011a] text-white border-[#5a011a]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {reservations
          .filter((res) => res.status === selectedTab)
          .map((res, i) => (
            <div
              key={i}
              className="w-full p-5 rounded-2xl overflow-hidden 
              border border-[#d4af37] shadow-[0_0_15px_rgba(255,192,203,0.35)]
              hover:shadow-[0_0_30px_rgba(255,192,203,0.55)]
              transition-all duration-300 flex items-start gap-4 text-[#f8e6d2]"
            >
              <div className="shrink-0 p-2 mt-4 bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/40">
                <CiCalendar className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="font-medium">{res.titre}</p>
                  <p>Statut : {res.status}</p>
                  <p>{res.date}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
