"use client";
import ContactMakeUpArtist from "@/components/contactComponent/ContactMakeUpArtist";
import FormInput from "@/components/contactComponent/FormInput";
import ServiceDropdown from "@/components/contactComponent/ServiceDropdown";
import SubmitButton from "@/components/contactComponent/SubmitButton";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  type_service: string;
  adresse: string;
  date: string;
  hour: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    type_service: "",
    adresse: "",
    date: "",
    hour: "",
    message: "",
  });

  const [servicesList, setServicesList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/profile");
      const data = await res.json();

      if (res.ok && data.profile) {
        setServicesList(
          Array.isArray(data.profile.services) ? data.profile.services : []
        );
      } else {
        setServicesList([]);
      }
    } catch (err) {
      console.error("Erreur fetch profile:", err);
      setServicesList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.name,
          phone: formData.phone,
          email: formData.email,
          type_service: formData.type_service,
          adresse: formData.adresse,
          date: formData.date,
          hour: formData.hour,
          other_info: formData.message,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Erreur API:", err);
        alert("Erreur lors de l'envoi du formulaire");
      } else {
        setSent(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          type_service: "",
          adresse: "",
          date: "",
          hour: "",
          message: "",
        });
        setTimeout(() => setSent(false), 2000);
      }
    } catch (error) {
      console.error("Erreur fetch:", error);
      alert("Erreur lors de l'envoi du formulaire");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 pt-24 md:pt-28 pb-12 bg-[#5a011a]">
      <motion.div
        className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0 flex justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="w-full bg-[#f8e6d2] border-2 border-[#fddf83] rounded-3xl p-6 md:p-8 shadow-[0_0_35px_rgba(255,182,193,0.35)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              name="name"
              value={formData.name}
              placeholder="Nom"
              onChange={handleChange}
            />
            <FormInput
              name="phone"
              value={formData.phone}
              placeholder="Téléphone"
              onChange={handleChange}
            />
            <FormInput
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <ServiceDropdown
              services={servicesList}
              selected={formData.type_service}
              setSelected={(service) =>
                setFormData({ ...formData, type_service: service })
              }
            />
            <FormInput
              name="adresse"
              value={formData.adresse}
              placeholder="Adresse"
              onChange={handleChange}
              className="md:col-span-2"
            />
            <FormInput
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              placeholder=""
            />
            <FormInput
              name="hour"
              type="time"
              value={formData.hour}
              onChange={handleChange}
              placeholder=""
            />
            <FormInput
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              textarea
              className="md:col-span-2"
            />
          </div>
          <SubmitButton sending={sending} sent={sent} />
        </motion.form>
      </motion.div>
      <ContactMakeUpArtist />
    </section>
  );
}
