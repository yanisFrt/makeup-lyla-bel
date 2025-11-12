import { useState } from "react";

export default function Profil() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [servicesList, setServicesList] = useState<string[]>([]);

  const handleAddService = () => {
    if (service.trim() !== "") {
      setServicesList([...servicesList, service]);
      setService("");
    }
  };

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
            placeholder="Lyla Bel"
            disabled
            className="md:w-full px-4 py-2 rounded-lg bg-[#f8e6d2]/10 border border-[#d4af37]/40 text-[#f8e6d2] placeholder-[#f8e6d2]/50 focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-[#f8e6d2] font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="lylabelpro@gmail.com"
            disabled
            className="md:w-full px-4 py-2 rounded-lg bg-[#f8e6d2]/10 border border-[#d4af37]/40 text-[#f8e6d2] placeholder-[#f8e6d2]/50 focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label className="block mb-2 text-[#f8e6d2] font-medium">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+33 7 53 01 74 54"
            disabled
            className="md:w-full px-4 py-2 rounded-lg bg-[#f8e6d2]/10 border border-[#d4af37]/40 text-[#f8e6d2] placeholder-[#f8e6d2]/50 focus:outline-none focus:border-[#d4af37]"
          />
        </div>
        <div>
          <label className="block mb-2 text-[#f8e6d2] font-medium">
            Adresse
          </label>
          <input
            type="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Paris,France"
            disabled
            className="md:w-full px-4 py-2 rounded-lg bg-[#f8e6d2]/10 border border-[#d4af37]/40 text-[#f8e6d2] placeholder-[#f8e6d2]/50 focus:outline-none focus:border-[#d4af37]"
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
              placeholder="Ex : Maquillage soirée"
              className="flex-1 px-4 py-2 rounded-lg bg-[#f8e6d2]/10 border border-[#d4af37]/40 text-[#f8e6d2] placeholder-[#f8e6d2]/50 focus:outline-none focus:border-[#d4af37]"
            />
            <button
              onClick={handleAddService}
              className="px-4 py-2 bg-[#d4af37] text-[#5a011a] font-semibold rounded-lg hover:bg-[#b8932f] transition"
            >
              Ajouter
            </button>
          </div>
        </div>

        {servicesList.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-[#f8e6d2]">
              Mes services
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-[#f8e6d2]/90">
              {servicesList.map((srv, i) => (
                <li key={i}>{srv}</li>
              ))}
            </ul>
          </div>
        )}

        {/* <div className="pt-4">
          <button
            onClick={() => alert("Profil sauvegardé ✅")}
            className="px-6 py-2 bg-[#d4af37] text-[#5a011a] font-semibold rounded-lg hover:bg-[#b8932f] transition"
          >
            Sauvegarder
          </button>
        </div> */}
      </div>
    </div>
  );
}
