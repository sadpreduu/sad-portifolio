import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-centefr justify-between mx-auto p-8">
           <Link href={"/"} className="text-5xl text-white font-semibold">
            SADBOY
           </Link>
        </div>
    </nav>
  )
}

export default Navbar