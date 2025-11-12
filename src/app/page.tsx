"use client";
import { useState } from "react";

import A5 from "./a5";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "./footer";

import A3 from "./a3";
import About2 from "@/components/About2";
import Prestations from "@/components/Prestation";
import Gallery2 from "@/components/Gallery2";
import Testimonials2 from "@/components/Testimonials2";
import Footer2 from "./footer2";

import A6 from "./a6";
import Services2 from "@/components/Services2";
import About3 from "@/components/About3";
import Gallery3 from "@/components/Gallery3";
import Testimonials3 from "@/components/Testimonials3";
import Footer3 from "./footer3";
import A7 from "./a7";
import About4 from "@/components/About4";
import Prestations2 from "@/components/Prestation2";
import AboutAndPrestations from "@/components/About4";
import Gallery4 from "@/components/Gallery4";
import Footer4 from "./footer4";

export default function Home() {
  const [designIndex, setDesignIndex] = useState(0);

  const handleNextDesign = () => {
    setDesignIndex((prev) => (prev + 1) % 3);
  };

  return (
    <div className="relative">
      <A7 />
      <AboutAndPrestations />
      {/* <About4 />
      <Prestations2 /> */}
      <Gallery4 />
      <Footer4 />
      {/* <button
        onClick={handleNextDesign}
        className="fixed bottom-5 right-5 z-[9999] 
        bg-black/70 hover:bg-black text-white 
        w-10 h-10 flex items-center justify-center 
        rounded-full text-xl shadow-lg backdrop-blur-sm 
        transition-all hover:scale-110"
        title="Changer de design"
      >
        {designIndex}
      </button> */}

      {/* {designIndex === 0 && (
        <>
          <A5 />
          <Services />
          <About />
          <Gallery />
          <Testimonials />
          <Footer />
        </>
      )} */}

      {/* {designIndex === 1 && (
        <>
          <A3 />
          <About2 />
          <Prestations />
          <Gallery2 />
          <Testimonials2 />
          <Footer2 />
          
        </>
      )} */}

      {/* {designIndex === 2 && (
        <>
          <A6 />
          <Services2 />
          <About3 />
          <Gallery3 />
          <Testimonials3 />
          <Footer3 />
        </>
      )} */}
    </div>
  );
}
