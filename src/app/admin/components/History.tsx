"use client";

import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";

interface Reservation {
  id: number;
  nom: string;
  phone: string;
  email?: string;
  type_service: string;
  adresse: string;
  date: string;
  hour: string;
  other_info?: string;
  status: "pending" | "accepted" | "declined";
}

export default function History() {
  const [selectedTab, setSelectedTab] = useState("en attente");
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(false);

  const statusMap: Record<string, string> = {
    "en attente": "pending",
    accepté: "accepted",
    refusé: "declined",
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true);
        const status = statusMap[selectedTab];
        const res = await fetch(`/api/reservation?status=${status}`);
        const data = await res.json();

        if (res.ok) {
          setReservations(data.reservations || []);
        } else {
          console.error("Erreur lors du chargement:", data.error);
        }
      } catch (err) {
        console.error("Erreur de connexion:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [selectedTab]);

  return (
    <div>
      <h1 className="md:flex hidden text-3xl font-bold mb-6">
        Historique des réservations
      </h1>

      <div className="flex space-x-4 mb-6 md:mt-0 mt-7">
        {["en attente", "accepté", "refusé"].map((tab) => (
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
        {loading ? (
          <p className="text-center text-[#d4af37]">Chargement...</p>
        ) : reservations.length === 0 ? (
          <p className="text-center text-[#d4af37]">
            Aucune réservation {selectedTab}.
          </p>
        ) : (
          reservations.map((res) => (
            <div
              key={res.id}
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
                  <p className="font-medium">{res.type_service}</p>
                  <p>
                    Statut :{" "}
                    {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
                  </p>
                  <p>
                    {res.date} à {res.hour}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{res.nom}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
