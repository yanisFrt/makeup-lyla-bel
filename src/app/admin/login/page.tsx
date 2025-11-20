"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "admin", password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }

    router.push("/admin");
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

        {error && (
          <p className="text-red-600 text-center text-sm mb-3">{error}</p>
        )}

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-[#eec6cf] rounded-lg p-2 mb-4 focus:outline-none text-[#5a011a]"
        />

        <button
          type="submit"
          className="w-full bg-[#5a011a] text-white rounded-lg py-2"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
