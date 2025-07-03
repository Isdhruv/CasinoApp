// components/PointsBox.tsx
import type { ReactNode } from "react";

type Props = {
  title: string;
  icon: ReactNode;
  value: string;
};

export default function PointsBox({ title, icon, value }: Props) {
  return (
    <div className="bg-violet text-white rounded-xl py-5 px-6 flex flex-col gap-3">
      <div className="font-semibold text-md ">
        {title.toUpperCase()}
      </div>
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xl font-bold leading-10 tracking-[1px]">
          {value}
        </span>
      </div>
    </div>
  );
}
