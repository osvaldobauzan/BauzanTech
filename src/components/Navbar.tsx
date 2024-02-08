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
        <Navbar.Link href="#"  className="flex font-bold items-center px-4 mb-1 lg:text-sm xl:text-xl hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">About</Navbar.Link>
        </Link>
        <Navbar.Link href="#"  className="flex font-bold items-center px-4 mb-1 xl:text-xl hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">Services</Navbar.Link>

        <Link to={'/'}>
        <Navbar.Link>
          <img src={logo} className="hidden h-6 sm:h-9 md:flex items-center px-4 mb-1  hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300" alt="" />
        </Navbar.Link>
        </Link>

        <Navbar.Link href="#"  className="flex font-bold items-center px-4 mb-1 xl:text-xl hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">Clients</Navbar.Link>
        <Navbar.Link href="#"  className="flex font-bold items-center px-4 mb-1 xl:text-xl hover:text-green-bauzan hover:border-b-2-green-bauzan transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    
  );
}

export default Nav