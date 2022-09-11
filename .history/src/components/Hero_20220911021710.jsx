import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-purple-600 font-bold p-2'>
          GROWING WITH WebDevelopment
        </p>
        <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with FrontendDeveloper.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>
            ReactJs,Typescript
          </p>
          <Typed
          className='md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Hooks', 'practical', 'Forms',]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-purple-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;