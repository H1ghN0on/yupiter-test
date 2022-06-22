import ContactButton from "./Desktop/ContactButtonDesktop";
import Logo from "./Common/Logo";
import NavigationDesktop from "./Desktop/NavigationDesktop";
import Title from "./Common/Title";

const HeaderDesktop = () => {
  return (
    <header className="px-[135px] pt-[16px] pb-[58px] bg-[#28293E] text-white">
      <section className="flex justify-between items-center">
        <Logo />
        <NavigationDesktop />
        <ContactButton />
      </section>
      <section className="flex justify-center mt-[85px]">
        <Title />
      </section>
    </header>
  );
};

export default HeaderDesktop;
