import ContactButton from "@ui/Desktop/ContactButtonDesktop";
import Logo from "./Common/Logo";
import NavigationDesktop from "@ui/Desktop/NavigationDesktop";
import Title from "./Common/Title";
import { Container } from "react-bootstrap";

const HeaderDesktop = () => {
  return (
    <header className="pt-dHeaderTop pb-dHeaderBottom bg-header text-white">
      <Container>
        <section className="flex justify-between items-center">
          <Logo />
          <NavigationDesktop />
          <ContactButton />
        </section>

        <section className="flex justify-center mt-20">
          <Title />
        </section>
      </Container>
    </header>
  );
};

export default HeaderDesktop;
