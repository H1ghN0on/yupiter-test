import React from "react";
import { Container } from "react-bootstrap";
import Logo from "./Common/Logo";
import Title from "./Common/Title";

const HeaderMobile = () => {
  return (
    <header className="pt-5 pb-16 bg-header text-white">
      <Container fluid>
        <section className="flex flex-col justify-around items-center">
          <Logo />
          <Title className="mt-20" />
        </section>
      </Container>
    </header>
  );
};

export default HeaderMobile;
