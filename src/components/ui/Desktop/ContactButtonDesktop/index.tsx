import React from "react";

const ContactButtonDesktop = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!");
  };

  return (
    <button
      className="px-[40px] py-[15px] border-2 rounded border-[#707070]"
      onClick={handleButtonClick}
    >
      <span className="text-sm font-bold uppercase">Contact</span>
    </button>
  );
};

export default ContactButtonDesktop;
