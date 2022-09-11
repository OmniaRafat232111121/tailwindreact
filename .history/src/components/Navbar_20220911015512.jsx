import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);


  return (
    <div className=' animate__animated animate__animated animate__backInRight flex justify-around items-center  text-white h-24 max-w-[1240px] px-4 mx-auto'>
      <h1 className='w-full text-3xl font-bold text-purple-600'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 border-purple-600  hover:border-b-2 '>Home</li>
        <li className='p-4 border-purple-600  hover:border-b-2'>Company</li>
        <li className='p-4 border-purple-600  hover:border-b-2 '>Resources</li>
        <li className='p-4 border-purple-600  hover:border-b-2'>About</li>
        <li className='p-4 border-purple-600  hover:border-b-2 '>Contact</li>
      </ul>
    <div>
    <AiOutlineMenu size={20}/>
    </div>
    <div>
    <ul className='fixed left-0 top-0 w-[60%] h-full border-r border-r-pur-900 bg-[#000300] ease-in-out duration-500' >
    <h1 className='w-full text-3xl font-bold text-purple-600 m-4'>REACT.</h1>
      <li className='p-4 border-b border-pur-600'>Home</li>
      <li className='p-4 border-b border-pur-600'>Company</li>
      <li className='p-4 border-b border-pur-600'>Resources</li>
      <li className='p-4 border-b border-pur-600'>About</li>
      <li className='p-4'>Contact</li>
  </ul>
</div>

    </div>
  );
};

export default Navbar;