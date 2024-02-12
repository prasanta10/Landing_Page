import React,{useState,useEffect} from 'react';
import HeroSection from './components/HeroSection.jsx';
import AboutFounderSection from './components/AboutFounderSection.jsx';
import WhyChooseUsSection from './components/WhyChooseUsSection.jsx';
import CountdownTimer from './components/CountdownTimer.jsx';
import CTASection from './components/CTASection.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { TiDelete } from "react-icons/ti";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const closePopup = () =>{
    setShowForm(!showForm);
  }

  return (
    <div className="min-h-screen">
      <Navbar/>
      <HeroSection />
      <AboutFounderSection />
      <WhyChooseUsSection />
      <CountdownTimer time={10}/>
      <CTASection />
      <Footer/>
      <div className="relative">
      {showForm && (
        <form className="fixed bottom-10 left-10 w-2/3 bg-white p-4 rounded-t-lg shadow-lg">
          <button onClick={closePopup}><TiDelete size={20}/></button>
          <h2 className=" text-center text-xl font-extrabold mb-4 text-[#FADA5E] underline">Sign Up Now</h2>
          <h2 className=' pb-4 text-center'>Limited seats and opportunities</h2>
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              placeholder='Enter your Phone Number'
              name="phone"
              className="w-full border rounded-lg p-2 border-grey-300"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your Email Address'
              className="w-full border rounded-lg p-2 border-grey-300"
              required
            />
          </div>
          <button
            type="submit"
            className=" bg-secondary w-full bg-royal-yellow text-white p-2 rounded-lg hover:bg-royal-yellow-dark"
          >
            Submit
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default App