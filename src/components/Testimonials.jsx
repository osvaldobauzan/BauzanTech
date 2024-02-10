import React from "react";
import { Carousel } from "flowbite-react";

export const Testimonials = () => {
  return (
    <>
      <section>
        <h1 className="mx-20 mt-10 font-Flipahaus text-6xl font-bold leadi sm:text-6xl text-green-bauzan">
          Nuestros Clientes
        </h1>

        <p className="mx-20 mt-10 mb-2 text-gray-500 dark:text-gray-400 xl:mb-10">
          ¿Todavía tienes algunas dudas? ¡Entendemos! Echa un vistazo a algunos
          de nuestros clientes y descubre cómo los hemos ayudado a iniciar y
          hacer crecer sus negocios. Estamos orgullosos de haber colaborado con
          empresas de diversos sectores y tamaños, brindándoles soluciones
          digitales personalizadas que han impulsado su éxito en el mundo
          digital.{" "}
        </p>

        <p className="mx-20 mt-4 mb-12 text-gray-500 dark:text-gray-400">
          ¡Inspírate con nuestros casos de éxito y únete a la lista de
          empresarios que han confiado en nosotros para llevar sus negocios al
          siguiente nivel!
        </p>

        <h1 className="mx-20 mt-10 font-Flipahaus text-3xl font-bold leadi text-green-bauzan">
          Proximamente...
        </h1>


        {/* <div className="flex justify-center"> */}
        {/* "p-7 lg:mt-0 xl:mt-0 w-3/4" */}
          {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 max-w-5xl w-3/4 bg-rojito1 rounded-xl m-5 md:m-0 shadow-2xl">
            <Carousel indicators={true}>
              <figure className="max-w-screen-md mx-auto text-center">
                <blockquote>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl italic font-medium text-white mx-12 md:mx-0">
                    "¡Estoy encantado con el servicio que recibí de BauzanTech!
                    No solo entregaron mi sitio web antes de lo esperado, sino
                    que también superaron mis expectativas en términos de diseño
                    y funcionalidad."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-white dark:text-white">
                      Michael Gough
                    </cite>
                    <a href="https://www.estacalalibertad.org/" target="_blank">
                      <cite className="ps-3 text-sm lg:text-base text-white">
                        Estaca La Libertad
                      </cite>
                    </a>
                  </div>
                </figcaption>
              </figure>
              <figure className="max-w-screen-md mx-auto text-center">
                <blockquote>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl italic font-medium text-white mx-12 md:mx-0">
                    "¡Estoy encantado con el servicio que recibí de BauzanTech!
                    No solo entregaron mi sitio web antes de lo esperado, sino
                    que también superaron mis expectativas en términos de diseño
                    y funcionalidad."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-white dark:text-white">
                      Michael Gough
                    </cite>
                    <cite className="ps-3 text-sm lg:text-base text-white">
                      Empresa111
                    </cite>
                  </div>
                </figcaption>
              </figure>

              <figure className="max-w-screen-md mx-auto text-center">
                <blockquote>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl italic font-medium text-white mx-12 md:mx-0">
                    "¡Estoy encantado con el servicio que recibí de BauzanTech!
                    No solo entregaron mi sitio web antes de lo esperado, sino
                    que también superaron mis expectativas en términos de diseño
                    y funcionalidad."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-white dark:text-white">
                      Michael Gough
                    </cite>
                    <cite className="ps-3 text-sm lg:text-base text-white">
                      Empres222
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </Carousel>
          </div> */}
        {/* </div>  */}
      </section>
    </>
  );
};

// <div className='flex justify-center'>
// <div className="relative flex items-center justify-center max-w-5xl w-full text-gray-50">
//   <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:ri focus:ri focus:ri bg-gray-900">
//     <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
//       <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//     </svg>
//   </button>
//     <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">

//       <div className="relative flex flex-shrink-0 w-full sm:w-auto">
//       <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-black">
// <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-black" />
// <blockquote className="max-w-lg text-lg italic font-medium text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
// <div className="text-center dark:text-black">
//   <p className='text-black'>Leroy Jenkins</p>
//   <p className='text-black'>CEO of Company Co.</p>
// </div>
// <div className="flex space-x-2">
//   <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-black"></button>
//   <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
//   <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
//   <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
// </div>
// </div>
// </div>

// </div>
// <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:ri focus:ri focus:ri bg-gray-900">
// <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
// <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
// </svg>
// </button>
// </div>
// </div>
