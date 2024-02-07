import BauzanLogo from '/src/assets/Blue-Logo-Landing.png'
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'
import BauzanRoundedRedLogo from '/src/assets/Red-round-Logo.png'
import imageHero from '/src/assets/Main-Vector-LandingPage.png'
import React from 'react'
import Nav from '../components/Navbar'


const Home = () => {
  return (
   
   
    <section className="font-Montserrat font-bold">
        <Nav logo={BuazanRoundedLogo}  />
		<div className='h-4'></div>
    	<div className=" text-green-bauzan container flex flex-col justify-center md:flex-col p- mx-auto max-h-screen xs sm:py-12 lg:py-2 lg:px-10 lg:flex-row lg:justify-between xl:py-20 xl:text-2xl">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:text-lg xl:text-2xl">
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
		<div className="flex items-center justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:text-lg xl:text-2xl">
			<img src={imageHero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700" />
		</div>
	</div>

	<footer className="bg-white rounded-lg max-h-full mt-4 sm:flex sm:flex-col sm:text-center-center sm:justify-between">
		<div className="w-full max-w-screen-xl mx-auto  md:py-8 lg:px-8">
			<div className="lg:flex lg:flex-row lg:justify-between sm:flex sm:flex-row sm:justify-between flex flex-col items-center space-y-7">
				<a href="https://www.bauzantech.com/" className="flex w-auto items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
					<img src={BauzanRoundedRedLogo} className="h-12" />
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