import React from 'react'
import Logo from '../assets/images/logo.jpg';

const Navbar = () => {
  return (
  <nav class="bg-black text-white py-4 px-6 md:px-2">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center">
      <a href="/" class="text-2xl font-bold mr-4">
        <img src={Logo} alt="Logo" class="h-8" />
      </a>
    </div>
    <div class="hidden md:block">
      <ul class="flex space-x-4">
        <li>
          <a href="/" class="hover:text-royal-yellow">
            Home
          </a>
        </li>
        <li>
          <a href="#about" class="hover:text-royal-yellow">
            About
          </a>
        </li>
        <li>
          <a href="#why" class="texthover:text-royal-yellow">
            Services
          </a>
        </li>
        <li>
          <a href="#cta" class="hover:text-royal-yellow">
            Register
          </a>
        </li>
      </ul>
    </div>
    <div class="md:hidden">
      <button class="flex items-center p-2 text-gray-500 rounded-md hover:text-white hover:bg-gray-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </div>
</nav>
  )
}

export default Navbar