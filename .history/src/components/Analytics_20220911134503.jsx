import React from 'react';
import Laptop from '../assets/Lifesavers - Consulting.png';

const Analytics = () => {
  return (
    <div className='w-full  bg-white py-16 px-4'>
      <div className='  animate__animated animate__fadeInRight max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className=' w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-purple-600 font-bold '>Share with learning and conversation with others</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-purple-600 text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;