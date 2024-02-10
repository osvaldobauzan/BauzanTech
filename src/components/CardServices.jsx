import React from 'react'
import { Link } from 'react-router-dom'
import diseño_marca from '../assets/diseño marca.jpg'
import desarrollo_web from '../assets/desarrollo web.jpg'
import admin from '../assets/admin.jpg'
import consulting from '../assets/conuslting.jpg'
import marketing from '../assets/marketing.jpg'
import ecommerce from '../assets/ecommerce.jpg'
import restaurant from '../assets/restaurant.jpg'
import booking from '../assets/booking.jpg'
import otro from '../assets/otros.jpg'

export const CardServices = () => {
  return (
    <div class="container my-8 mx-auto w-full flex justify-center">
 
    <section class="mb-20 ">
   
       <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-12 ">
         <div class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div class="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                   class="rounded-t-lg"
                   src={desarrollo_web}
                   alt="" />
               </div>
               <div class="p-6">
                   <h5
                   class="font-Flipahaus mb-2 text-xl leading-tight text-green-bauzan text-center font-semibold">
                   Desarrollo y Diseño de Sitios Web Estáticos - Bajo Costo
                   </h5>
                   <p class="text-base text-green-bauzan ">
                   ¿Deseas fortalecer la presencia digital de tu negocio? ¿Estás listo para proyectar una imagen más profesional? No te dejes engañar por plataformas como Wix. En nuestro servicio, diseñamos, alojamos y proporcionamos un dominio para tu proyecto digital estático a un costo accesible, con un diseño adaptado a tus necesidades y la tecnología de seguridad más avanzada.
                   </p>
               </div>
               <ul class="w-full">
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-red-900  line-through">Desde $700</span>
                   </li>
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-green-bauzan ">Desde $499</span>
                   </li>
               </ul>
                   <div class="p-6">
                   <Link to={'/contact'}>
                           <button type="button" class="text-white bg-green-bauzan hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-bauzan dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contáctanos</button>
                   </Link>
                   </div>
            </div>
           
            <div class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div class="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                   class="rounded-t-lg"
                   src={diseño_marca}
                   alt="" />
               </div>
               <div class="p-6">
                   <h5
                   class="font-Flipahaus mb-2 text-xl leading-tight text-green-bauzan   text-center font-semibold">
                   Creación de Marca - Manuales de Marca
                   </h5>
                   <p class="text-base text-green-bauzan ">
                   ¿Listo para convertir tu idea en realidad? Nos encargamos de crear una marca para tu producto o servicio a un costo accesible. Cuéntanos tu visión y la materializaremos ante tus ojos. Estamos comprometidos a brindarte un servicio excepcional y a hacer que el proceso sea lo más fácil y emocionante posible para ti.  No dudes en ponerte en contacto con nosotros.
                   </p>
               </div>
               <ul class="w-full">
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-red-900  line-through">Desde $350</span>
                   </li>
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-black-900 ">Desde $199</span>
                   </li>
               </ul>
                   <div class="p-6">
                   <Link to={'/contact'}>
                           <button type="button" class="text-white bg-green-bauzan hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-bauzan dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contáctanos</button>
                   </Link>
                   </div>
            </div>

            <div class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div class="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                   class="rounded-t-lg"
                   src={admin}
                   alt="" />
               </div>
               <div class="p-6">
                   <h5
                   class="font-Flipahaus mb-2 text-xl leading-tight text-green-bauzan   text-center font-semibold">
                   Correos Corporativos y Sistemas de Administración para Tu Negocio
                   </h5>
                   <p class="text-base text-green-bauzan ">
                   ¡Entendemos los desafíos que enfrentas al administrar un negocio en crecimiento! Las licencias de servicios populares pueden ser costosas, pero estamos aquí para ofrecerte soluciones a medida que se adapten a tus necesidades y presupuesto. Con nuestra experiencia y enfoque personalizado, optimizaremos la gestión de tu negocio y maximizaremos tus recursos
                   </p>
               </div>
               <ul class="w-full">
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-red-900  line-through">Desde $27</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-black-900 ">Desde $15</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
               </ul>
                   <div class="p-6">
                   <Link to={'/contact'}>
                           <button type="button" class="text-white bg-green-bauzan hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-bauzan dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contáctanos</button>
                   </Link>
                   </div>
            </div>

            <div class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div class="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                   class="rounded-t-lg"
                   src={marketing}
                   alt="" />
               </div>
               <div class="p-6">
                   <h5
                   class="font-Flipahaus mb-2 text-xl leading-tight text-green-bauzan   text-center font-semibold">
                   Marketing y Redes Sociales
                   </h5>
                   <p class="text-base text-green-bauzan ">
                   ¡Entendemos los desafíos que enfrentas al administrar un negocio en crecimiento! Las licencias de servicios populares pueden ser costosas, pero estamos aquí para ofrecerte soluciones a medida que se adapten a tus necesidades y presupuesto. Con nuestra experiencia y enfoque personalizado, optimizaremos la gestión de tu negocio y maximizaremos tus recursos
                   </p>
               </div>
               <ul class="w-full">
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-red-900  line-through">Desde $40</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-black-900 ">Desde $25</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
               </ul>
                   <div class="p-6">
                   <Link to={'/contact'}>
                           <button type="button" class="text-white bg-green-bauzan hover:bg-green-bauzan focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-bauzan dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contáctanos</button>
                   </Link>
                   </div>
            </div>

            
            <div class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div class="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                   class="rounded-t-lg"
                   src={ecommerce}
                   alt="" />
               </div>
               <div class="p-6">
                   <h5
                   class="font-Flipahaus mb-2 text-xl leading-tight text-green-bauzan   text-center font-semibold">
                  E-Commerce - Aplicaciones Web
                   </h5>
                   <p class="text-base text-green-bauzan ">
                   ¿Quieres vender tus productos en línea con mayor profesionalismo? Con nuestra experiencia en desarrollo web y diseño, construiremos una tienda en línea o aplicación web que refleje la esencia de tu marca y brinde una experiencia de compra excepcional a tus clientes. Olvídate de pagar comisiones a plataformas como Amazon, eBay o Mercado Libre, ¡tu negocio estará en control total de sus ventas en línea!
                   </p>
               </div>
               <ul class="w-full">
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-red-900  line-through">Desde $1100</span>
                   </li>
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-black-900 ">Desde $699</span>
                   </li>
               </ul>
                   <div class="p-6">
                   <Link to={'/contact'}>
                           <button type="button" class="text-white bg-green-bauzan hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-bauzan dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contáctanos</button>
                   </Link>
                   </div>
            </div>

            <div class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div class="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                   class="rounded-t-lg"
                   src={restaurant}
                   alt="" />
               </div>
               <div class="p-6">
                   <h5
                   class="font-Flipahaus mb-2 text-xl leading-tight text-green-bauzan   text-center font-semibold">
                  Servicios Especializados para Restaurantes/Cafeterías
                   </h5>
                   <p class="text-base text-green-bauzan ">
                   ¿Acabas de abrir tu restaurante o cafetería? Estamos aquí para ofrecerte soluciones integrales. Desde la implementación de menús digitales y códigos QR hasta sistemas completos de administración y puntos de venta, te ayudaremos a optimizar tu negocio y brindar una experiencia excepcional a tus clientes. Confía en nosotros para hacer que la gestión de tu establecimiento sea más eficiente y exitosa.
                   </p>
               </div>
               <ul class="w-full">
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-red-900  line-through">Desde $12</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-black-900 ">Desde $5</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
               </ul>
                   <div class="p-6">
                   <Link to={'/contact'}>
                           <button type="button" class="text-white bg-green-bauzan hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-bauzan dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contáctanos</button>
                   </Link>
                   </div>
            </div>

            <div class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div class="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                   class="rounded-t-lg"
                   src={consulting}
                   alt="" />
               </div>
               <div class="p-6">
                   <h5
                   class="font-Flipahaus mb-2 text-xl leading-tight text-green-bauzan   text-center font-semibold">
                  Consultoría
                   </h5>
                   <p class="text-base text-green-bauzan ">
                   ¿Estás teniendo problemas con tus sistemas digitales actuales? Estamos aquí para ayudarte. Nuestras sesiones de consultoría, a precios accesibles, te proporcionarán soluciones personalizadas para optimizar tus operaciones y superar cualquier obstáculo tecnológico. Confía en nosotros para encontrar las mejores soluciones y llevar tu negocio al siguiente nivel digital.
                   </p>
               </div>
               <ul class="w-full">
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-red-900  line-through">Desde $30</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-black-900 ">Desde $19</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
               </ul>
                   <div class="p-6">
                   <Link to={'/contact'}>
                           <button type="button" class="text-white bg-green-bauzan hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-bauzan dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contáctanos</button>
                   </Link>
                   </div>
            </div>     
            
            <div class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div class="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                   class="rounded-t-lg"
                   src={booking}
                   alt="" />
               </div>
               <div class="p-6">
                   <h5
                   class="font-Flipahaus mb-2 text-xl leading-tight text-green-bauzan   text-center font-semibold">
                  Gestión de Citas y Reservaciones de Eventos
                   </h5>
                   <p class="text-base text-green-bauzan ">
                   Transforma la gestión de tu negocio con nuestra plataforma de citas y reservaciones. Con soluciones personalizadas, agilizamos la programación, reducimos cancelaciones y elevamos la experiencia del cliente. Confía en nosotros para optimizar tus operaciones y mejorar tu servicio, permitiéndote enfocarte en lo más importante: hacer crecer tu negocio.                    
                   </p>
               </div>
               <ul class="w-full">
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-red-900  line-through">Desde $30</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
                   <li
                   class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                   <span class="text-3xl font-bold text-black-900 ">Desde $19</span>
                   <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                   </li>
               </ul>
                   <div class="p-6">
                   <Link to={'/contact'}>
                           <button type="button" class="text-white bg-green-bauzan hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-bauzan dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contáctanos</button>
                   </Link>
                   </div>
            </div>

            <div class="block max-w-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div class="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                   class="rounded-t-lg"
                   src={otro}
                   alt="" />
               </div>
               <div class="p-6">
                   <h5
                   class="font-Flipahaus mb-2 text-xl leading-tight text-green-bauzan   text-center font-semibold">
                  Otro
                   </h5>
                   <p class="text-base text-green-bauzan ">
                   ¿Tienes alguna otra necesidad tecnológica? Permítenos ayudarte. Estamos seguros de que, si nos das la oportunidad, resolveremos tus problemas digitales y potenciaremos tu negocio.
                   </p>
               </div>
               <div class="p-6">
                   <Link to={'/contact'}>
                           <button type="button" class="text-white bg-green-bauzan hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-bauzan dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contáctanos</button>
                   </Link>
                   </div>      
            </div>
    
       </div>
 </section>
 
</div>   
  )
}
