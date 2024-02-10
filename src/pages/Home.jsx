import BauzanLogo from '/src/assets/Blue-Logo-Landing.png'
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'
import imageHero from '/src/assets/Main-Vector-LandingPage.png'
import React from 'react'
import Nav from '../components/Nav'
import { CardServices } from '../components/CardServices'
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Footer from '../components/Footer'

const Home = () => {
  return (
   
    <section className="grid font-Montserrat font-bold">
        <Nav logo={BuazanRoundedLogo}  />
		<div className='h-8 lg:h-2'></div>
    <div className=" text-green-bauzan container mt-6 flex flex-col justify-center md:flex-col mx-auto max-h-screen sm:py-8 lg:py-0 lg:px-10 lg:flex-row lg:gap-10 xl:py-12 xl:text-2xl">
		<div className="flex flex-col justify-center px-6 pb-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:text-lg xl:text-2xl">
            <div className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700'>
            <h1 className="font-Flipahaus text-6xl font-bold leadi sm:text-6xl">Welcome
				<span className="text-blue-bauzan"> to </span>
                <img src={BauzanLogo} alt="" />
			</h1>
            </div>
			
			<p className="mt-6 mb-8 text-md sm:mb-12 font-extrabold">Impulsando la Adopción Digital.
				<br  className="hidden md:inline lg:hidden" /> Estamos aquí para ayudarte a encontrar la solución digital perfecta para tu negocio. Ofrecemos soluciones que se ajustan a tu presupuesto y dejan asombrados a tus clientes.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-blue-bauzan text-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700">Contáctanos</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Servicios</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:text-lg xl:text-2xl">
			<img src={imageHero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700" />
		</div>
	</div>

	<div className='h-10 m-5 lg:m-0'></div>

<section className='flex justify-center'>
	<div className='bg-green-bauzan rounded-lg max-w-6xl w-full shadow-2xl p-12 m-12 lg:m-0 xl:m-0'>
		<h1 className="mx-20 my-5 font-Flipahaus text-center text-6xl font-bold leadi sm:text-6xl text-white">¡Consulta nuestras promociones!</h1> 
		<div className='lg:mx-32 mx-12 mt-12 text-7xl flex justify-center' >

		<a href="https://wa.me/527353593762" target='_blank'>
			<FaWhatsapp className='mr-12 text-white' />
		</a>
		<a href="https://www.linkedin.com/company/bauzan-tech-solutions/" target='_blank'>
		<FaLinkedin className='mr-12 text-white'/>
		</a>
		<a href="https://www.instagram.com/bauzantech?igsh=MWNiYjh6czViamE5cg%3D%3D&utm_source=qr" target='_blank'>
		<FaInstagram className='text-white'/>
		</a>

		</div>
	  </div>
</section>

	<div className='h-10'></div>
	<h1 className="mx-20 my-10 font-Flipahaus text-left text-6xl font-bold leadi sm:text-6xl text-green-bauzan">Nuestros Servicios</h1> 
	<CardServices />
	<div className='h-5'></div>
	<Footer />
</section>
  )
}

export default Home