"use client";
import { useState } from "react";
import A1 from "./a1";
import A2 from "./a2";
import A3 from "./a3";
import A4 from "./a4";
import A5 from "./a5";
export default function Home() {
  const [active, setActive] = useState(1);

  const renderComponent = () => {
    switch (active) {
      case 1:
        return <A1 />;
      case 2:
        return <A5 />;
      case 3:
        return <A3 />;
      case 4:
        return <A4 />;
      case 5:
        return <A2 />;
      default:
        return <A1 />;
    }
  };

  const handleNext = () => {
    setActive((prev) => (prev === 5 ? 1 : prev + 1));
  };

  return (
    <div className="relative">
      <button
        onClick={handleNext}
        className="absolute top-4 left-4 z-50 w-10 h-10 rounded-full bg-[#c69c6d] text-black font-bold flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        {active}
      </button>

      {renderComponent()}
    </div>
  );
}
