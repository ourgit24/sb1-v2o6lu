import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedSection animation="fade-up" delay={0}>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ITC Bootcamp
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Ваш путь к успешной карьере в IT начинается здесь
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Контакты
            </h3>
            <div className="space-y-2">
              <a href="mailto:almaty.itcbootcamp@gmail.com" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                almaty.itcbootcamp@gmail.com
              </a>
              <a href="tel:+77077828088" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +7 707 782 80 88
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Адрес
            </h3>
            <div className="flex items-start text-sm sm:text-base text-gray-400">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              <p className="whitespace-pre-line">
                г. Алматы,
                ул. Толе би 73А,
                БЦ "Нур"
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Социальные сети
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/itcbootcamp.almaty/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/p/ITC-BOOT-CAMP-100083112593727/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/itc-bootcamp/mycompany/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
          © 2024 ITC Bootcamp. Все права защищены.
        </div>
      </div>
    </footer>
  );
}