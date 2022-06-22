import React from "react";
import Logo from "./Common/Logo";
import Title from "./Common/Title";

const HeaderMobile = () => {
  return (
    <header className="px-[20px] pt-[20px] pb-[70px] bg-[#28293E] text-white">
      <section className="flex flex-col justify-around items-center">
        <Logo />
        <Title className="mt-[80px]" />
      </section>
    </header>
  );
};

export default HeaderMobile;
