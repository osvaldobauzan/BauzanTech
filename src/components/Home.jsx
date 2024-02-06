import BauzanLogo from '../assets/Blue-Logo-Landing.png'
import BuazanRoundedLogo from '../assets/Blue-round-Logo.png'
import imageHero from '../assets/Main-Vector-LandingPage.png'
import React from 'react'
import Nav from './Navbar'

export const logo = BuazanRoundedLogo
const Home = () => {
  return (
   
   
    <section className="font-Montserrat font-bold">
        <Nav logo={BuazanRoundedLogo}  />

     

	<div className=" text-green-bauzan container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-4 lg:px-10 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
            <div className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700'>
            <h1 className="font-Flipahaus text-6xl font-bold leadi sm:text-6xl">Welcome
				<span className="text-blue-bauzan"> to </span>
                <img src={BauzanLogo} alt="" />
			</h1>
            </div>
			
			<p className="mt-6 mb-8 text-md sm:mb-12 font-extrabold">Empowering Digital Adoption.
				<br  className="hidden md:inline lg:hidden" /> We're here to help you find the perfect digital solution for your business. We offer solutions that fit your budget and leave your customers amazed.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-blue-bauzan text-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700">Contact Us</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={imageHero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700" />
		</div>
	</div>
</section>
  )
}

export default Home