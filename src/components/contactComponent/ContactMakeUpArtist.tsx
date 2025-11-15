import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactMakeUpArtist = () => {
  return (
    <motion.div
      className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center md:items-start items-center text-[#fbe3ef]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <h3 className="text-3xl font-serif font-bold mb-4">Contact</h3>
      <p className="text-lg md:text-start text-center  leading-relaxed mb-6">
        Je suis Makeup Artist spécialisée dans les mariages & événements,
        passionnée par la beauté, l’élégance et le style. Je serai ravie
        d’échanger avec vous pour sublimer votre moment.
      </p>

      <div className="mb-4">
        <span className="font-semibold">Email:</span> contact@makeupartist.com
      </div>
      <div className="mb-4">
        <span className="font-semibold">Téléphone:</span> +33 X XX XX XX XX
      </div>
      <div className="mb-4">
        <span className="font-semibold">Adresse:</span> Paris, France
      </div>

      <div className="flex gap-4 mt-4">
        <a className="text-[#fbe3ef] hover:text-[#fddf83] text-2xl transition">
          <FaInstagram />
        </a>
        <a className="text-[#fbe3ef] hover:text-[#fddf83] text-2xl transition">
          <FaFacebookF />
        </a>
        <a className="text-[#fbe3ef] hover:text-[#fddf83] text-2xl transition">
          <FaTiktok />
        </a>
      </div>
    </motion.div>
  );
};
export default ContactMakeUpArtist;
