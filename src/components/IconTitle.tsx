// components/IconTitle.tsx
import { ReactNode } from "react";
import logo from "../assets/app-logo.svg";
type Props = {
  title: string;
  subtitle?: string;
};

export default function IconTitle({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col items-center gap-2 text-white text-center">
      <img src={logo} alt="Logo" className="w-16 h-16" />
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </div>
  );
}
