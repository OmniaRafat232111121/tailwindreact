import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);


  return (
    <div className='flex justify-between items-center  text-white'>
      <h1 className='w-full text-3xl font-bold text-[#c900df]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 border-b-4 border-#c900df-500 '>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
     
     
    </div>
  );
};

export default Navbar;