import BauzanLogo from '/src/assets/Blue-Logo-Landing.png'
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'
import BauzanRoundedRedLogo from '/src/assets/Red-round-Logo.png'
import imageHero from '/src/assets/Main-Vector-LandingPage.png'
import React from 'react'
import Nav from '../components/Navbar'


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
			
			<p className="mt-6 mb-8 text-md sm:mb-12 font-extrabold">Impulsando la Adopción Digital
				<br  className="hidden md:inline lg:hidden" /> Estamos aquí para ayudarle a encontrar la solución digital perfecta para su negocio. Ofrecemos soluciones que se ajustan a su presupuesto y dejan asombrados a sus clientes.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-blue-bauzan text-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700">Contactanos</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Nuestros Clientes</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:text-lg xl:text-2xl">
			<img src={imageHero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700" />
		</div>
	</div>
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

export default Home