// src/layouts/DefaultLayout.tsx
import { ReactNode } from "react";
import bgImage from "../assets/grid-bg.png";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-white bg-purple">
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Reusable animated gradient overlay */}

      {/* Main Content */}
      <main className="relative z-20 flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center px-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
