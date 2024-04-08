import Link from "next/link"
import React from 'react'


const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-centefr justify-between mx-auto p-8">
           <Link href={"/"} className="text-5xl text-white font-semibold self-center h-3">
            SADBOY
           </Link>
           <div className="menu"></div>
        </div>
    </nav>
  )
}

export default Navbar