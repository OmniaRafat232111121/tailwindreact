import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);


  return (
    <div className='flex justify-around items-center  text-white'>
      <h1 className='w-full text-3xl font-bold text-[#c900df]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4   '>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
     
     
    </div>
  );
};

export default Navbar;