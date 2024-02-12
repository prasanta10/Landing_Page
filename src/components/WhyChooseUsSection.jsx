import React from 'react';
import { FaServicestack } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { FaBuildingShield } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const WhyChooseUsSection = () => {
  return (
    <section id="why" className="text-white bg-primary py-10 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-secondary text-3xl font-bold mb-2">Why?</h2>
        <p className=" font-bold text-3xl mb-10 m-auto w-2/3">
          Darsheel's consultancy programme offers valuable insights and strategies to help fellow founders.
        </p>
      </div>
      <div className='pt-6 grid grid-cols-3 gap-4 gap-y-10'>
        <div className='text-center flex flex-col justify-center items-center'>
          <FaServicestack size={50} />
          <p>Business Growth with oppurtunities</p>
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
          <GiGears size={50}/>
          <p>Structured working with reliable peers</p>
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
          <FaBuildingShield size={50}/>
          <p>'lorem ipsum'</p>
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
          <FaCopy size={50}/>
          <p>'lorem ipsum'</p>
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
          <FaUserClock size={50}/>
          <p>'lorem ipsum'</p>
        </div>
        <div className='text-center flex flex-col justify-center items-center'>
          <AiOutlineGlobal size={50}/>
          <p>'lorem ipsum'</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;