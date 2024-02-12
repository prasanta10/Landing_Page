import profilepic from '../assets/images/profile-picture.jpeg'

const AboutFounderSection = () => {
    return (
      <section id="about" className="flex justify-center items-center bg-gray-100 py-16">
        <div className="w-[70vw] flex justify-evenlycontainer text-center">
        <img src={profilepic} alt="Darsheel Savla" className="w-64 h-64 rounded-full mx-auto mb-8" />
        <div className='w-1/2 px-2'>
          <h2 className="text-4xl font-extrabold mb-4 text-secondary">Visionary Founder</h2>
          <p className="text-xl mb-8">
            Darsheel Savla is a charismatic and creative powerhouse who infuses his passion for food, people, and brand building into everything he does.
          </p>
          <button className='p-2 w-1/2 rounded-md cursor-pointer hover:bg-yellow-500 bg-secondary text-black'>Connect</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutFounderSection;