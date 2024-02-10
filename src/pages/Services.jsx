import React from "react";
import Nav from "../components/Nav";
import BuazanRoundedLogo from "/src/assets/Blue-round-Logo.png";
import { CardServices } from "../components/CardServices";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <section className="font-Montserrat text-left font-semibold lg:text-lg">
      <Nav logo={BuazanRoundedLogo} />

      <h1 className="mx-20 mt-10 font-Flipahaus text-6xl font-bold leadi sm:text-6xl text-green-bauzan">
        Nuestros Servicios
      </h1>

      <CardServices />

      <div className="h-5"></div>
      <Footer />
    </section>
  );
};

export default Services;
