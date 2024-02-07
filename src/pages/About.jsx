import React from 'react'
import Profiles from '../components/Profiles'
import Nav from '../components/Navbar'
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'


const About = () => {


  return (
    
    <section className='font-Montserrat'>
        <Nav logo={BuazanRoundedLogo}/>
        <h1></h1>
        <Profiles/>
    </section>
    

  )
}

export default About