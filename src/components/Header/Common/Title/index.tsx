import React from "react";

interface TitleProps {
  className?: string;
}

const Title: React.FC<TitleProps> = ({ className }) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center text-center " + className
      }
    >
      <h1 className="font-bold w-[90%] text-5xl md:text-7xl">Portfolio</h1>
      <h4 className="text-[#707070] leading-8 lg:leading-8 mt-[30px] w-[90%] text-sm lg:text-base">
        Agency provides a full service range including technical skills, design,
        business understanding.
      </h4>
    </div>
  );
};

export default Title;
