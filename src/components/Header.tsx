import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ContactModal } from './ContactModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="https://i.ibb.co/dr3Mztk/itc-logo.jpg" 
                alt="ITC Bootcamp" 
                className="h-8 sm:h-10 w-auto rounded"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
              >
                Курсы
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
              >
                Контакты
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm lg:text-base"
              >
                Записаться
              </button>
            </div>
            
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-b border-gray-800">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-base text-gray-300 hover:text-white transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="block w-full text-left px-3 py-2 text-base text-gray-300 hover:text-white transition-colors"
            >
              Курсы
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-base text-gray-300 hover:text-white transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="block w-full text-left px-3 py-2 text-base text-gray-300 hover:text-white transition-colors"
            >
              Контакты
            </button>
            <div className="px-3 py-2">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Записаться
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}