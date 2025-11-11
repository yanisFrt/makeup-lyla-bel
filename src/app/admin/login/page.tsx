"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin");
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8e6d2]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-80"
      >
        <h1 className="text-2xl font-semibold text-[#5a011a] mb-4 text-center">
          Connexion Admin
        </h1>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-[#eec6cf] rounded-lg p-2 mb-4 focus:outline-none text-[#5a011a]"
        />
        <button className="w-full bg-[#5a011a] text-white rounded-lg py-2">
          Se connecter
        </button>
      </form>
    </div>
  );
}
