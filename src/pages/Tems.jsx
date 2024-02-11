import React from "react";
import BuazanRoundedLogo from "/src/assets/Blue-round-Logo.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <section className="font-Montserrat text-left font-semibold lg:text-lg">
      <Nav logo={BuazanRoundedLogo} />
      <div className="h-5"></div>

      <h1 className="mx-20 mt-10 font-Flipahaus text-6xl font-bold leadi sm:text-4xl xs:text-4xl text-green-bauzan">
        Terminos y condiciones
      </h1>
      <p class="mx-20 mt-10 mb-2 text-gray-500 dark:text-gray-400 xl:mb-10">
        Términos y Condiciones Al acceder y utilizar nuestros servicios, aceptas
        los siguientes términos y condiciones: Uso del Servicio: Nuestros
        servicios están destinados únicamente para uso personal o comercial. No
        se permite el uso indebido del servicio con fines ilegales o no
        autorizados. Pago y Facturación: Los precios de nuestros servicios están
        sujetos a cambios sin previo aviso. Se te facturará de acuerdo con la
        tarifa acordada en el momento de la contratación del servicio.
        Cancelación y Reembolso: Cualquier cancelación de servicio debe
        realizarse de acuerdo con nuestra política de cancelación. No se
        garantizan reembolsos una vez que se haya iniciado la prestación del
        servicio. Privacidad y Seguridad: Respetamos tu privacidad y protegemos
        tus datos personales de acuerdo con nuestra política de privacidad. Sin
        embargo, no podemos garantizar la seguridad absoluta de la información
        transmitida a través de Internet. Propiedad Intelectual: Todos los
        derechos de propiedad intelectual relacionados con nuestros servicios
        son propiedad de nuestra empresa. No se permite la reproducción,
        distribución o modificación de nuestros servicios sin nuestro
        consentimiento previo por escrito. Limitación de Responsabilidad: No nos
        hacemos responsables de ningún daño directo, indirecto, incidental,
        especial o consecuente que pueda surgir del uso de nuestros servicios.
        Modificaciones: Nos reservamos el derecho de modificar estos términos y
        condiciones en cualquier momento sin previo aviso. Se te notificará
        cualquier cambio a través de nuestro sitio web. Al utilizar nuestros
        servicios, aceptas estos términos y condiciones en su totalidad. Si no
        estás de acuerdo con alguno de estos términos, te rogamos que no
        utilices nuestros servicios. Para más detalles sobre nuestros términos y
        condiciones, por favor contáctanos.
      </p>

      <h1 className="mx-20 mt-10 font-Flipahaus text-6xl font-bold leadi sm:text-4xl xs:text-4xl text-green-bauzan">
        Politica de cookies
      </h1>
      <p class="mx-20 mt-10 mb-2 text-gray-500 dark:text-gray-400 xl:mb-10">
        Nuestro sitio web utiliza cookies para mejorar tu experiencia de
        usuario. Las cookies son pequeños archivos de texto que se almacenan en
        tu dispositivo cuando visitas nuestro sitio web. Estas cookies nos
        ayudan a recordar tus preferencias y a analizar cómo interactúas con
        nuestro sitio, lo que nos permite ofrecerte un servicio mejor y más
        personalizado. Al utilizar nuestro sitio web, aceptas el uso de cookies
        de acuerdo con esta política. Puedes controlar y gestionar el uso de
        cookies en tu navegador. Sin embargo, deshabilitar las cookies puede
        afectar la funcionalidad de nuestro sitio web y limitar tu experiencia
        de usuario. Utilizamos diferentes tipos de cookies, incluyendo cookies
        esenciales que son necesarias para el funcionamiento básico del sitio,
        cookies de rendimiento que nos ayudan a mejorar el rendimiento del
        sitio, y cookies de terceros que se utilizan para fines de análisis y
        marketing. Si deseas obtener más información sobre cómo utilizamos las
        cookies y cómo puedes gestionarlas, por favor consulta nuestra política
        de privacidad.
      </p>

      <Footer />
    </section>
  );
};

export default Terms;
