import React from 'react'
import Profiles from '../components/Profiles'
import Nav from '../components/Navbar'
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'


const About = () => {


  return (
    
    <section className='font-Montserrat text-left font-semibold lg:text-lg'>
        <Nav logo={BuazanRoundedLogo}/>
        
    <p class="mx-20 mt-10 mb-2 text-gray-500 dark:text-gray-400 xl:mb-10">¡Hola! Gracias por visitar nuestro sitio. Somos una startup comprometida en ayudar a empresas pequeñas y medianas a encontrar soluciones digitales adecuadas para sus negocios sin comprometer su presupuesto. Nos aseguramos de desarrollar soluciones que sorprendan a tus clientes manteniendo altos estándares de calidad técnica. </p>
    <p class="mx-20 mt-4 text-gray-500 dark:text-gray-400">Nos enorgullece ser una empresa tecnológica pequeña pero con alcance internacional, donde más del 50% de nuestros colaboradores son mujeres, un logro destacado en la industria tecnológica. Además, contamos con presencia en México, España, Brasil y Estados Unidos, lo que garantiza nuestra disponibilidad para ayudarte sin importar tu zona horaria o tu idioma de preferencia.</p>

        <Profiles/>
    </section>
    

  )
}

export default About