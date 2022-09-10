import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center' >
    <h1 className='w-full text-3xl font-bold text-[#a000df]'>REACT.</h1>
    <ul className=' md:flex'>
    <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
    </ul>
    </div>
  )
}

export default Navbar;