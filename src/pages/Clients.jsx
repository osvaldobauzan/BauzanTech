import React from 'react'
import { Testimonials } from '../components/Testimonials'
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Clients = () => {
  return (
    <section className='font-Montserrat text-left font-semibold lg:text-lg'>
        <Nav logo={BuazanRoundedLogo}/>
        <Testimonials />
        <div className='h-5'></div>
        <Footer />
    </section>
    )
}

export default Clients