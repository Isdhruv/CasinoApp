// pages/Dashboard.tsx

import HeartIcon from "@assets/heart.svg";
import DiamondIcon from "@assets/diamond.svg";
import TimeIcon from "@assets/time.svg";
import SettingsIcon from "@assets/setting.svg";
import WalletIcon from "@assets/funds.svg";
import LogoIcon from "@assets/app-logo.svg";
import LogOutIcon from "@assets/logout.svg";
import LeftArrowIcon from "@assets/left-arrow.svg";

import Card from "@components/Card";
import PointsBox from "@components/PointsBox";

export default function Dashboard() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between px-4 py-4 md:py-6">
        {/* Left: Change PIN */}
        <div className="flex items-center gap-2 text-white text-xs md:text-sm uppercase tracking-wide cursor-pointer hover:opacity-80">
          <img src={LeftArrowIcon} alt="Back" className="w-4 h-4" />
          <span>Change Pin</span>
        </div>

        {/* Center: Logo */}
        <img src={LogoIcon} alt="Logo" className="w-6 h-6 md:w-8 md:h-8" />

        {/* Right: Card Return */}
        <div className="flex items-center gap-2 text-white text-xs md:text-sm uppercase tracking-wide cursor-pointer hover:opacity-80">
          <span>Card Return</span>
          <img src={LogOutIcon} alt="Return" className="w-4 h-4" />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Points */}
        <div className="flex flex-col gap-4">
          <PointsBox
            title="Bonus Points"
            value="89.07"
            icon={<img src={HeartIcon} className="w-6 h-6" alt="heart" />}
          />
          <PointsBox
            title="Cashback Points"
            value="726.26"
            icon={<img src={DiamondIcon} className="w-6 h-6" alt="diamond" />}
          />
        </div>

        {/* Right Column: Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">
          <Card title="History" icon={<img src={TimeIcon} className="w-5 h-5" alt="time" />} />
          <Card title="Stats" icon={<img src={DiamondIcon} className="w-5 h-5" alt="stats" />} />
          <Card title="Settings" icon={<img src={SettingsIcon} className="w-5 h-5" alt="settings" />} />
          <Card title="Funds" icon={<img src={WalletIcon} className="w-5 h-5" alt="wallet" />} />
        </div>
      </div>
    </div>
  );
}
