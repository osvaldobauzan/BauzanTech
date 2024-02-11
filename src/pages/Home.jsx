import BauzanLogo from "/src/assets/Blue-Logo-Landing.png";
import BuazanRoundedLogo from "/src/assets/Blue-round-Logo.png";
import imageHero from "/src/assets/Main-Vector-LandingPage.png";
import React from "react";
import Nav from "../components/Nav";
import { CardServices } from "../components/CardServices";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";
import TermsAndCookiesModal from "../components/TermsAndCookiesModal";

const Home = () => {
  return (
    <section className="flex flex-col font-Montserrat font-bold">
    <TermsAndCookiesModal />
      <Nav logo={BuazanRoundedLogo} />
      <div className="h-10 lg:h-2"></div>
      <div className=" text-green-bauzan container mt-6 md:mt-24 flex flex-col justify-center md:flex-col mx-auto max-h-screen sm:py-8 lg:py-0 lg:px-10 lg:flex-row lg:gap-10 xl:py-12 xl:text-2xl">
        <div className="flex flex-col justify-center px-6 pb-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:text-lg xl:text-2xl">
          <div className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700">
            <h1 className="font-Flipahaus text-6xl leadi sm:text-5xl sm:text-left ">
              Welcome
              <span className="text-blue-bauzan"> to </span>
              <img src={BauzanLogo} alt="" />
            </h1>
          </div>

          <p className="mt-6 mb-8 text-md sm:mb-12 font-extrabold">
            Impulsando la Adopción Digital.
            <br className="hidden md:inline lg:hidden" /> Estamos aquí para
            ayudarte a encontrar la solución digital perfecta para tu negocio.
            Ofrecemos soluciones que se ajustan a tu presupuesto y dejan
            asombrados a tus clientes.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
            <a
              rel="noopener noreferrer"
              href="/contact"
              className="px-8 py-3 text-lg font-semibold rounded bg-blue-bauzan text-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700"
            >
              Contáctanos
            </a>
            <a
              rel="noopener noreferrer"
              href="/services"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Servicios
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:text-lg xl:text-2xl">
          <img
            src={imageHero}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700"
          />
        </div>
      </div>

      <div className="h-10 m-5 lg:m-0"></div>

      <section className="flex justify-center">
        <div className="bg-rojito1 rounded-xl p-7 mt-20 lg:mt-0 xl:mt-0 w-3/4">
          <h1 className="font-Montserrat font-medium text-center text-4xl leadi text-white">
            ¡Consulta nuestras promociones!
          </h1>
          <div className="lg:mx-32 mx-12 mt-12 text-7xl flex justify-center sm:text-3x1">
            <a
              href="https://www.linkedin.com/company/bauzan-tech-solutions/"
              target="_blank"
            >
              <FaLinkedin className="mr-12 sm:mr-5 xs:mr-5 text-white" />
            </a>
            <a
              href="https://www.instagram.com/bauzantech?igsh=MWNiYjh6czViamE5cg%3D%3D&utm_source=qr"
              target="_blank"
            >
              <FaInstagram className="mr-12 sm:mr-5 xs:mr-5 text-white" />
            </a>
            <a
              href="https://www.facebook.com/people/Bauzan-Tech-Solutions/61555996810861/"
              target="_blank"
            >
              <FaFacebook className="text-white" />
            </a>
          </div>
        </div>
      </section>

      <div className="h-10"></div>
      <div className="w-3/4 flex m-auto">
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

export default Home;
