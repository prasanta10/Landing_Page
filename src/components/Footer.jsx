import React, { useState } from 'react';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Company</h4>
            <p className="mb-4 px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
              posuere et sit amet ligula.
            </p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="list-unstyled">
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of Service</li>
              <li className="mb-2">Refund Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="mb-4">123-456-7890</p>
            <p className="mb-4">example@example.com</p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <form onSubmit={handleSubmit} className="">
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:border-blue-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:border-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:border-blue-400"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                className="bg-secondary hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer