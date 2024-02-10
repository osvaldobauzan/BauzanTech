import React from 'react'
import Nav from '../components/Navbar'
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'
import BauzanRoundedRedLogo from '/src/assets/Red-round-Logo.png'
import { CardServices } from '../components/CardServices'



const Services = () => {
  return (
    <section className='font-Montserrat text-left font-semibold lg:text-lg'>
        <Nav logo={BuazanRoundedLogo}/>

    <h1 className="mx-20 mt-10 font-Flipahaus text-6xl font-bold leadi sm:text-6xl text-green-bauzan">Nuestros Servicios</h1> 

    <CardServices />
    
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

export default Services

