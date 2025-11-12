"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

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

  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.url) {
        setImages((prev) => [data.url, ...prev]);
      } else {
        alert("Erreur upload");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'upload");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 md:mt-0 mt-7">
      <div className="flex md:justify-between justify-center items-center">
        <h1 className="md:flex hidden text-3xl font-bold text-[#f8e6d2]">
          Galerie
        </h1>

        <label className="flex items-center gap-2 px-4 py-2 bg-[#d4af37]/90 hover:bg-[#d4af37] text-[#5a011a] rounded-lg cursor-pointer font-medium transition">
          <FaPlus />
          {uploading ? "Téléchargement..." : "Ajouter une photo"}
          <input
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            className="hidden"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group rounded-2xl overflow-hidden border-[2px] border-[#d4af37]/50 shadow-[0_0_15px_rgba(255,192,203,0.35)] hover:shadow-[0_0_30px_rgba(255,192,203,0.55)] transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Image ${i + 1}`}
              width={500}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
