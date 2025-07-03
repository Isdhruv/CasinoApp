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
      className="relative w-full rounded-[10px] bg-transparentpurple/40  border border-purpleborder/40 py-2 px-5 transition cursor-pointer h-[125px] flex flex-col"
    >
      <div className="bg-radial absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-[-1]"></div>
      {/* Icon top left */}
      <div className=" w-[55px] h-[55px] relative flex items-center justify-center">
        <div className=" bg-transparent">{icon}</div>
      </div>

      {/* Title bottom left */}
      <div className=" text-lg font-bold uppercase tracking-[1px] leading-9 mt-auto">
        {title}
      </div>

      {/* Arrow circle right */}
      <div className="absolute bottom-2 right-5 w-10 h-10 rounded-full bg-violet flex items-center justify-center">
        <img src={ArrowIcon} alt="arrow"  />
      </div>
    </div>
  );
}
