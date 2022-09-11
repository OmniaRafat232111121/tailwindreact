import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

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
      <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
  </div>
  <div className='h-100% animate__animated animate__animated animate__backInRight'>
  <ul className={nav ? 'fixed left-0 top-0 w-[50%] min-h-[50%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
  <h1 className='w-full text-3xl font-bold text-purple-600 m-4'>REACT.</h1>
      <li className='p-4  border-purple-600  hover:border-b-4'>Home</li>
      <li className='p-4  border-purple-600  hover:border-b-4'>Company</li>
      <li className='p-4  border-purple-600  hover:border-b-4'>Resources</li>
      <li className='p-4  border-purple-600  hover:border-b-4'>About</li>
      <li className='p-4'>Contact</li>
  </ul>
  </div>
</div>
  );
};

export default Navbar;