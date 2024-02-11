import React, { useEffect } from "react";
import Swal from "sweetalert2";

const showTermsAndCookiesModal = () => {
  Swal.fire({
    title: "Términos y Cookies",
    html: "Por favor, lee nuestros <a href='/terms' target='_blank'><span style='color: #95B2B0;'>términos y condiciones</span></a> y acepta el uso de <a href='/terms' target='_blank'><span style='color: #95B2B0;'>cookies</span></a>.",
    icon: "info",
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Rechazar",
    cancelButtonColor: '#481620',
    confirmButtonColor: '#1F271B',
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("acceptedTermsAndCookies", true);
    } else {
      Swal.fire({
        title: "¡Lo sentimos!",
        text: "Para usar nuestro sitio web, debes aceptar nuestros términos y condiciones, así como el uso de cookies.",
        icon: "error",
        confirmButtonColor: '#1F271B',
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: '#481620',
        html: `
          <p>No has aceptado nuestros términos y condiciones ni el uso de cookies.</p>
          <p>¿Deseas aceptarlos ahora?</p>
        `,
      }).then((result) => {
        if (result.isConfirmed) {
          // Mostrar nuevamente la ventana emergente para aceptar los términos y las cookies
          showTermsAndCookiesModal();
        }
      });
    }
  });
};

const TermsAndCookiesModal = () => {
  useEffect(() => {
    const hasAcceptedTermsAndCookies = localStorage.getItem("acceptedTermsAndCookies");

    console.log("hasAcceptedTermsAndCookies:", hasAcceptedTermsAndCookies);
    if (!hasAcceptedTermsAndCookies) {
      showTermsAndCookiesModal();
    }
  }, []);

  return null; // No renderizamos ningún elemento en el DOM
};

export default TermsAndCookiesModal;
