import React from 'react';
import 'tailwindcss/tailwind.css';

const CTASection = () => {
  return (
    <div id="cta" className="bg-primary text-white py-16">
      <div className="flex justify-evenly container mx-auto px-4 text-center">
        <div>
        <h2 className="text-4xl font-bold mb-4 text-secondary">Ready to get started?</h2>
        <p className="text-xl mb-8">Sign up now and get 75% off your first month!</p>
        </div>
        <div className='w-1/2'>
          <h2>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h2>
          <button className="mt-4 bg-secondary hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          Sign Up Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;