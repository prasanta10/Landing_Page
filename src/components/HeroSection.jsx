import React from 'react';
import HeroImg from '../assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Innovation and Creativity
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
            </p>
            <div className="flex flex-col md:flex-row md:justify-start justify-center items-center md:mb-0 mb-8">
              <button className="font-bold px-4 py-2 btn hover:bg-gray-950 bg-gray-400 rounded-md mr-4">
                Sign Up
              </button>
            </div>
            <p className='p-4 sm:p-2'>Click here for <span className='text-red-900 hover:underline' >Discount!</span></p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img className="rounded-lg" src={HeroImg} alt="Image Placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;