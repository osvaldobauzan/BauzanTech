import React from 'react'
import Profiles from '../components/Profiles'
import Nav from '../components/Navbar'
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'
import BauzanRoundedRedLogo from '/src/assets/Red-round-Logo.png'


const About = () => {


  return (

   // <h1 className="font-Flipahaus text-6xl font-bold leadi sm:text-6xl">About
   // <span className="text-blue-bauzan"> to </span>
   // </h1>

    
    <section className='font-Montserrat text-left font-semibold lg:text-lg'>
        <Nav logo={BuazanRoundedLogo}/>

    <h1 className="mx-20 mt-10 font-Flipahaus text-6xl font-bold leadi sm:text-6xl text-green-bauzan">Sobre nosotros...</h1>    
    <p class="mx-20 mt-10 mb-2 text-gray-500 dark:text-gray-400 xl:mb-10">¡Hola! Gracias por visitar nuestro sitio. Somos una startup comprometida en ayudar a empresas pequeñas y medianas a encontrar soluciones digitales adecuadas para sus negocios sin comprometer su presupuesto. Nos aseguramos de desarrollar soluciones que sorprendan a tus clientes manteniendo altos estándares de calidad técnica. </p>
    <p class="mx-20 mt-4 text-gray-500 dark:text-gray-400">Nos enorgullece ser una empresa tecnológica pequeña pero con alcance internacional, donde más del 50% de nuestros colaboradores son mujeres, un logro destacado en la industria tecnológica. Además, contamos con presencia en México, España, Brasil y Estados Unidos, lo que garantiza nuestra disponibilidad para ayudarte sin importar tu zona horaria o tu idioma de preferencia.</p>

        <Profiles/>
    
    
    <div className='h-5'></div>
	<footer className="bg-white rounded-lg max-h-full mt-4 sm:flex sm:flex-col sm:text-center sm:justify-between ">
		<div className="w-full max-w-screen-xl mx-auto md:py-8 lg:px-8">
			<div className="lg:flex lg:flex-row lg:justify-between sm:flex sm:flex-row sm:justify-between flex flex-col items-center space-y-7 mt-4 md:mt-0">
				<a href="https://www.bauzantech.com/" className="flex w-auto items-center mb-4  space-x-3 rtl:space-x-reverse">
					<img src={BauzanRoundedRedLogo} className="h-12 sm:hidden md:flex" />
				</a>
				<ul className="flex flex-wrap items-center mb-6 text-xs font-semibold text-gray-500 sm:mb-0 ">
					<span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://www.bauzantech.com/" className="hover:underline">Bauzan Tech Solutions</a>. All Rights Reserved.</span>
				</ul>
			</div>
		</div>
	</footer>

  </section>

  )
}

export default About