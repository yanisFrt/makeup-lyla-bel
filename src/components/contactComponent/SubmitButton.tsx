import { motion } from "framer-motion";

interface SubmitButtonProps {
  sending: boolean;
  sent: boolean;
}

export default function SubmitButton({ sending, sent }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={sending}
      className="inline-block mt-8 w-full py-3 rounded-2xl text-white font-medium tracking-wide bg-gradient-to-r from-[#56001e] to-[#7f012d] shadow-[0_4px_18px_rgba(130,0,60,0.45)] border border-[#e8cfae]/60 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {sending ? "Envoi..." : sent ? "Envoyé" : "Prendre un RDV"}
    </motion.button>
  );
}
