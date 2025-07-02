// components/Card.tsx

import ArrowIcon from "@assets/arrow.svg"; // adjust path as per your project structure
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
};

export default function Card({ title, icon, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-26 rounded-xl bg-purple bg-opacity-30 backdrop-blur-md border border-white border-opacity-10 p-4 text-white flex justify-between items-start hover:bg-opacity-40 transition cursor-pointer"
    >
      {/* Icon top left */}
      <div className="w-6 h-6">{icon}</div>

      {/* Title bottom left */}
      <div className="absolute bottom-4 left-4 text-base font-bold uppercase tracking-wide">{title}</div>

      {/* Arrow circle right */}
      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-violet flex items-center justify-center">
        <img src={ArrowIcon} alt="arrow" className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}
