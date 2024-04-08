import Link from "next/link"
import React from 'react'


const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-centefr justify-between mx-auto p-8">
           <Link href={"/"} className="text-5xl text-white font-semibold self-center h-3">
            SADBOY
           </Link>
           <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul>
                <li><Link href={"#about"}className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl roudend md:p-0 hover:text-white">Sobre</Link></li>
                <li><Link href={"#projects"}>Projetos</Link></li>
                <li><Link href={"#contact"}>Contato</Link></li>
            </ul>
           </div>
        </div>
    </nav>
  )
}

export default Navbar