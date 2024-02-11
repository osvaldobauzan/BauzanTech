import React from "react";
import Nav from "../components/Nav";
import BuazanRoundedLogo from "/src/assets/Blue-round-Logo.png";
import { CardServices } from "../components/CardServices";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <section className="font-Montserrat text-left font-semibold lg:text-lg">
      <Nav logo={BuazanRoundedLogo} />

      <div className="container my-8 mx-auto w-full flex justify-left">
        <h1 className="my-10 font-Flipahaus text-left text-6xl leadi sm:text-4xl xs:text-4xl text-green-bauzan">
          Nuestros Servicios
        </h1>
      </div>

      <CardServices />

      <div className="h-5"></div>
      <Footer />
    </section>
  );
};

export default Services;
