"use client";

import { useEffect, useState } from "react";

export default function Profil() {
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [servicesList, setServicesList] = useState<string[]>([]);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/profile");
      const data = await res.json();

      if (res.ok && data.profile) {
        setName(data.profile.name || "");
        setEmail(data.profile.email || "");
        setPhone(data.profile.phone || "");
        setAddress(data.profile.address || "");
        setServicesList(
          Array.isArray(data.profile.services) ? data.profile.services : []
        );
      }
    } catch (err) {
      console.error("Erreur fetch profile:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const saveProfile = async () => {
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, address, services: servicesList }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erreur lors de la sauvegarde");
        return;
      }

      alert("Profil mis à jour !");
    } catch (err) {
      console.error("Erreur PATCH profile:", err);
      alert("Erreur serveur");
    }
  };

  if (loading) return <p className="text-[#f8e6d2]">Chargement...</p>;

  return (
    <div>
      <h1 className="md:flex hidden text-3xl font-bold mb-6">Profil</h1>
      <div className="space-y-5 md:mt-0 mt-7">
        <div>
          <label className="block mb-2 text-[#f8e6d2] font-medium">
            Nom complet
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="md:w-full px-4 py-2 rounded-lg bg-[#f8e6d2]/10
              border border-[#d4af37]/40 text-[#f8e6d2]"
            disabled
          />
        </div>

        <div>
          <label className="block mb-2 text-[#f8e6d2] font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-full px-4 py-2 rounded-lg bg-[#f8e6d2]/10
              border border-[#d4af37]/40 text-[#f8e6d2]"
            disabled
          />
        </div>

        <div>
          <label className="block mb-2 text-[#f8e6d2] font-medium">
            Téléphone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+33 7 53 01 74 54"
            className="md:w-full px-4 py-2 rounded-lg bg-[#f8e6d2]/10
              border border-[#d4af37]/40 text-[#f8e6d2]"
          />
        </div>

        <div>
          <label className="block mb-2 text-[#f8e6d2] font-medium">
            Adresse
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Paris, France"
            className="md:w-full px-4 py-2 rounded-lg bg-[#f8e6d2]/10
              border border-[#d4af37]/40 text-[#f8e6d2]"
          />
        </div>
        <div>
          <label className="block mb-2 text-[#f8e6d2] font-medium">
            Ajouter un service
          </label>
          <div className="md:flex md:flex-row flex-col md:space-y-0 space-y-3 items-center gap-3">
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder={
                servicesList.length > 0
                  ? servicesList.join(", ")
                  : "Ex : Maquillage soirée"
              }
              className="flex-1 px-4 py-2 rounded-lg bg-[#f8e6d2]/10
                border border-[#d4af37]/40 text-[#f8e6d2]"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={saveProfile}
            className="px-6 py-2 bg-[#d4af37] text-[#5a011a] font-semibold
              rounded-lg hover:bg-[#b8932f] transition"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}
