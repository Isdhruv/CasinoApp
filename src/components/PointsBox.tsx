// components/PointsBox.tsx
import type { ReactNode } from "react";

type Props = {
  title: string;
  icon: ReactNode;
  value: string;
};

export default function PointsBox({ title, icon, value }: Props) {
  return (
    <div className="bg-violet text-white rounded-lg p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 font-bold text-sm">
        {icon}
        {title.toUpperCase()}
      </div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
