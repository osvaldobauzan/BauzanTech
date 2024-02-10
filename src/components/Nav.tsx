'use client';
import { Link } from "react-router-dom";
import React from 'react'
import { Navbar } from 'flowbite-react';


const Nav = ({ logo }) => {
  return (
    <Navbar fluid rounded className="md:flex md:justify-center xl:h-20 lg:h-16 ">    
       <Navbar.Toggle className="bg-transparent text-green-bauzan" />
      <Navbar.Collapse>
        
        <Link to={'/about'}>
        <Navbar.Link href="#"  className="flex font-bold items-center px-4 mb-1 lg:text-sm xl:text-xl hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">Nosotros</Navbar.Link>
        </Link>
        <Link to={'/services'}>
        <Navbar.Link href="#"  className="flex font-bold items-center px-4 mb-1 xl:text-xl hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">Servicios</Navbar.Link>
        </Link>

        <Link to={'/'}>
        <Navbar.Link>
          <img src={logo} className="hidden h-6 sm:h-9 md:flex items-center px-4 mb-1  hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 " alt="Home" />
          <p className="lg:hidden md:hidden text-left px-1 text-green-bauzan font-bold hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">Inicio</p>
        </Navbar.Link>
        </Link>

        <Link to={'/clients'}>
        <Navbar.Link href="#"  className="flex font-bold items-center px-4 mb-1 xl:text-xl hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">Clientes</Navbar.Link>
        </Link>
        <Link to={'/contact'}>
        <Navbar.Link href="#"  className="flex font-bold items-center px-4 mb-1 xl:text-xl hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">Contáctanos</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>

    
  );
}

export default Nav