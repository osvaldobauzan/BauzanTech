"use client";
import BuazanRoundedLogo from "/src/assets/Blue-round-Logo.png";
import {
  Button,
  Checkbox,
  Label,
  Radio,
  TextInput,
  Textarea,
} from "flowbite-react";
import Nav from "../components/Nav";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [whatsApp, setWhatsApp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && company && phone && message) {
      const serviceId = "service_qpb0r9p";
      const templateId = "template_zhkry8s";
      const userId = "oo8-tuo0DC0b_dZUx";

      const whatsappStatus = whatsApp
        ? "Sí tiene WhatsApp"
        : "No tiene WhatsApp";

      const templateParams = {
        from_name: name,
        from_email: email,
        from_company: company,
        from_phone: phone,
        to_name: "Bauzan Tech Solutions",
        message: message,
        whatsApp: whatsappStatus,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log("Email sent successfully", response);
          setName("");
          setEmail("");
          setMessage("");
          setCompany("");
          setPhone("");
          setWhatsApp("");

          Swal.fire({
            title: "¡Gracias por ponerte en contacto!",
            text: "¡Te saludaremos en breve!",
            icon: "success",
            confirmButtonColor: "#1F271B",
          });
        })
        .catch((error) => {
          console.log("Error sending email: ", error);
        });
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor, completa todos los campos obligatorios.",
        icon: "error",
        confirmButtonColor: "#1F271B",
        iconColor: '#481620',
      });
    }
  };
  return (
    <section className="font-Montserrat text-left lg:text-lg">
      <Nav logo={BuazanRoundedLogo} />

      <h1 className="lg:mx-32 mx-12 mt-10 font-Flipahaus text-6xl font-bold sm:text-4xl xs:text-4xl text-green-bauzan">
        Contáctanos
      </h1>
      <div className="lg:mx-32 mx-12 mt-5 text-4xl flex ">
        <a href="https://wa.me/527353593762" target="_blank">
          <FaWhatsapp className="mr-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/bauzan-tech-solutions/"
          target="_blank"
        >
          <FaLinkedin className="mr-5" />
        </a>
        <a
          href="https://www.instagram.com/bauzantech?igsh=MWNiYjh6czViamE5cg%3D%3D&utm_source=qr"
          target="_blank"
        >
          <FaInstagram className="mr-5" />
        </a>
      </div>
      <section className="flex flex-col font-bold justify-center items-center">
        <p class="lg:mx-32 mx-12 mt-10 text-gray-600 xl:mb-10">
          ¿Por que no nos cuentas un poco más de la solución que estás buscando?
          Podemos darte una consultoría gratuíta y hablar de tu negocio. Dejanos
          tu información por aquí y nosotros nos contactamos:
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-2xl lg:m-2 p-12 lg:p-2 justify-center"
        >
          <div>
            <div className="mb-2 block font-bold">
              <Label
                htmlFor="username3"
                value="Nombre:"
                className="font-bold"
              />
            </div>
            <TextInput
              type="name"
              value={name}
              placeholder=""
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block font-bold">
              <Label htmlFor="email1" value="E-mail:" className="font-bold" />
            </div>
            <TextInput
              type="email"
              value={email}
              placeholder=""
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block font-bold">
              <Label htmlFor="phone" value="Teléfono:" className="font-bold" />
            </div>
            <TextInput
              type="phone"
              value={phone}
              placeholder=""
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block font-bold">
              <Label
                htmlFor="phone"
                value="Empresa o Negocio:"
                className="font-bold"
              />
            </div>
            <TextInput
              type="company"
              value={company}
              placeholder=""
              required
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block font-bold">
              <Label
                htmlFor="comment"
                value="Me gustaría saber más de ..."
                className="font-bold"
                required
              />
            </div>
            <Textarea
              placeholder=""
              value={message}
              required
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="comment" value="¿Tienes WhatsApp?" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                name="yes"
                checked={whatsApp}
                onChange={(e) => setWhatsApp(e.target.checked)}
              />
              <Label htmlFor="Yes">Si</Label>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox required />
            <Label htmlFor="terms">Aceptar <a href="/terms" className="underline hover:text-rojito1 active:text-rojito1">Terminos de Privacidad</a></Label>
          </div>
          <Button className="bg-blue-bauzan hover:bg-rojito1" type="submit">
            Enviar
          </Button>
        </form>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
