import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-20 min-h-[80vh]">
      <div className="md:w-1/2">
        <div className="mb-4">
          <span className="text-[#3498db] font-medium">Hello, I'm</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Kavindu
          <br />
          <span className="text-[#3498db]">Suriyawansha</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Web Developer
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
          I'm a passionate web developer specializing in creating modern, responsive 
          websites and applications. Currently pursuing my Bachelor's in Software Engineering, 
          I love turning ideas into digital reality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* <button 
            onClick={() => scrollToSection('contact')}
            className="border border-[#3498db] text-[#3498db] hover:bg-[#3498db] hover:text-white px-8 py-3 rounded-md font-medium transition duration-300 transform hover:scale-105"
          >
            Hire me
          </button> */}

          <Link 
            to="/contact"
            className="border border-[#3498db] text-[#3498db] hover:bg-[#3498db] hover:text-white px-8 py-3 rounded-md font-medium transition duration-300 transform hover:scale-105"
>
            Hire me
          </Link>

          <Link 
            to="/services"
            className="border border-[#3498db] text-[#3498db] hover:bg-[#3498db] hover:text-white px-8 py-3 rounded-md font-medium transition duration-300 transform hover:scale-105"
>
            Services
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-400">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Available for work
          </div>
          <div className="flex items-center">
            {/* <Download size={16} className="mr-2" /> */}
            {/* <a href="#" className="hover:text-[#3498db] transition-colors">
              Download CV
            </a> */}
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 perspective-900">
  <div className="relative">
    {/* Gradient circle behind image for 3D depth */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3498db] to-[#2980b9] blur-3xl opacity-15 transform translate-y-2 scale-75"></div>

    {/* Hero image */}
    <img 
      src="/src/assets/images/myp.png" 
      alt="Kavindu Suriyawansha" 
      className="hero-image w-full max-w-md"
    />
  </div>
</div>



      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('footer')}
          className="text-gray-400 hover:text-[#3498db] transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={24} />
        </button>
      </div>
      
    </div>
    
  );
}