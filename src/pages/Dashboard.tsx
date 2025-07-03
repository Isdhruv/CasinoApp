// pages/Dashboard.tsx

import HeartIcon from "@assets/heart.svg";
import DiamondIcon from "@assets/diamond.svg";
import TimeIcon from "@assets/time.svg";
import SettingsIcon from "@assets/setting.svg";
import WalletIcon from "@assets/funds.svg";
import LogoIcon from "@assets/app-logo.svg";
import LogOutIcon from "@assets/logout.svg";
import LeftArrowIcon from "@assets/left-arrow.svg";
import StatsIcon from "@assets/stats.svg"
import Card from "@components/Card";
import PointsBox from "@components/PointsBox";

export default function Dashboard() {
  return (
    <div className="w-full max-w-full">
      <div className="flex items-center justify-between py-7">
        {/* Left: Change PIN */}
        <div className="flex items-center gap-2  cursor-pointer hover:opacity-80">
          <img src={LeftArrowIcon} alt="Back" className="w-4 h-4" />
          <span className="text-white text-md font-semibold uppercase">Change Pin</span>
        </div>

        {/* Center: Logo */}
        <img src={LogoIcon} alt="Logo" className="w-[50px] h-[50px] " />

        {/* Right: Card Return */}
        <div className="flex items-center gap-2  cursor-pointer hover:opacity-80">
          <span className="text-white text-md font-semibold uppercase">Card Return</span>
          <img src={LogOutIcon} alt="Return" className="w-5 h-5" />
        </div>
      </div>
      <div className="flex gap-6 items-center">
        {/* Left Column: Points */}
        <div className="flex flex-col gap-4 max-w-[527px] w-full">
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
        <div className="grid grid-cols-2 gap-4 w-full max-w-[calc(100%_-_527px)] ">
          <Card title="History" icon={<img src={TimeIcon}  alt="time" />} />
          <Card title="Stats" icon={<img src={StatsIcon}  alt="stats" />} />
          <Card title="Settings" icon={<img src={SettingsIcon}  alt="settings" />} />
          <Card title="Funds" icon={<img src={WalletIcon}  alt="wallet" />} />
        </div>
      </div>
    </div>
  );
}
