"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CiCalendar } from "react-icons/ci";
import { getReservations, Reservation } from "@/app/utils/reservationApi";

interface DashboardProps {
  setActiveSection: (section: string) => void;
}

export default function Dashboard({ setActiveSection }: DashboardProps) {
  const [pendingReservations, setPendingReservations] = useState<Reservation[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState<string[]>([]);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/upload", { cache: "no-store" });
        const data = await res.json();
        if (Array.isArray(data)) {
          setImages(data.reverse());
        }
      } catch (error) {
        console.error("Erreur lors du chargement des images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const fetchPending = async () => {
      setLoading(true);
      const data = await getReservations("pending");
      setPendingReservations(data.slice(0, 2));
      setLoading(false);
    };
    fetchPending();
  }, []);

  return (
    <div>
      <h1 className="hidden md:flex md:text-3xl text-xl font-bold mb-6 text-[#f8e6d2]">
        Bienvenue sur ton tableau de bord
      </h1>

      <div className="h-3/5 flex flex-col space-y-4 md:mt-0 mt-7">
        <div className="flex w-full text-lg justify-between items-center mb-3 gap-2 text-[#f8e6d2]">
          <p>Nouvelle réservation</p>
          <button
            onClick={() => setActiveSection("reservation")}
            className="text-[#d4af37] hover:underline"
          >
            Voir tout
          </button>
        </div>

        {loading ? (
          <p className="text-[#d4af37]">Chargement...</p>
        ) : pendingReservations.length === 0 ? (
          <p className="text-gray-400">Aucune réservation en attente.</p>
        ) : (
          pendingReservations.map((r) => (
            <div
              key={r.id}
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
                  <p className="font-medium">{r.type_service}</p>
                  <p>
                    <span className="font-semibold">Statut :</span> En attente
                  </p>
                  <p>
                    {r.date} à {r.hour}
                  </p>
                </div>
                <button
                  onClick={() => setActiveSection("reservation")}
                  className="text-[#d4af37] hover:underline"
                >
                  Voir les détails
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6">
        <div className="flex w-full text-lg text-[#f8e6d2] justify-between items-center mb-3 gap-2">
          <p>Galerie</p>
          <button
            onClick={() => setActiveSection("galerie")}
            className="text-[#d4af37] hover:underline"
          >
            Voir plus
          </button>
        </div>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {images.slice(0, 4).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className="w-60 h-52 relative rounded-2xl overflow-hidden 
                      border-[3px] border-[#eac8d9] shadow-[0_0_15px_rgba(255,192,203,0.35)]
                      hover:shadow-[0_0_30px_rgba(255,192,203,0.55)]
                      transition-all duration-300"
              >
                <Image
                 src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
