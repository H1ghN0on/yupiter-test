import React from "react";
import { LogoSvg } from "./LogoSvg";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a href="/">
      <div className={"flex items-center relative bottom-1 " + className}>
        <LogoSvg />
        <h1 className="ml-4 text-2xl">Agency</h1>
      </div>
    </a>
  );
};

export default Logo;
