import React, { useEffect, useState } from 'react';
import {
  Code2,
  Terminal,
  Smartphone,
  Globe2,
  Database,
  Cpu,
} from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { Footer } from '../components/Footer';
import { courses } from '../data/courses';
import { ContactModal } from '../components/ContactModal';
import { useAnalytics } from '../utils/analytics';

export function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { timeSpent, clicks, scrollDepth, location } = useAnalytics();

  return (
    <>
      {/* Hero Section */}
      <header
        id="home"
        className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 border-b border-gray-800 pt-16"
      >
        <AnimatedSection
          animation="fade"
          className="container mx-auto px-4 py-12 sm:py-16 md:py-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white">
                Стань профессиональным разработчиком с ITC Bootcamp
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300">
                Практические навыки, современные технологии и поддержка опытных
                менторов
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Начать обучение
              </button>
            </div>
            <div className="block relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://i.ibb.co/pbX4q6G/guy-Photoroom.png"
                  alt="Программист за работой"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-3xl -z-10"></div>
            </div>
          </div>
        </AnimatedSection>
      </header>

      {/* Stats Section */}
      <div id="about" className="container mx-auto px-4 py-12 sm:py-16">
        <p class="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ITC Bootcamp — это образовательная программа, которая создана для того, чтобы помочь вам освоить современные и востребованные навыки в сфере IT и войти в профессию с минимальными затратами времени. Наша цель — не только дать вам технические знания, но и подготовить к реальным вызовам, которые встретятся на карьерном пути. Мы стремимся вдохновить и поддержать каждого студента, помогая создать прочную базу для успешной карьеры в технологиях.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {[
            { number: '2000+', text: 'Выпускников' },
            { number: '5', text: 'Филиалов' },
            { number: '4+', text: 'Года на рынке' },
            { number: '50+', text: 'Менторов' },
          ].map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 200}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.text}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection
            animation="fade"
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Terminal,
                title: 'Практический подход',
                description: '80% практики, 20% теории',
              },
              {
                icon: Code2,
                title: 'Современные технологии',
                description: 'Актуальные инструменты разработки',
              },
              {
                icon: Database,
                title: 'Поддержка менторов',
                description: 'Персональное сопровождение',
              },
              {
                icon: Globe2,
                title: 'Карьерный рост',
                description: 'Помощь в трудоустройстве',
              },
            ].map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {feature.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div id="courses" className="container mx-auto px-4 py-12 sm:py-16">
        <AnimatedSection animation="fade" className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Наши направления
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} index={index} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <AnimatedSection
        animation="fade"
        className="container mx-auto px-4 py-12 sm:py-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Готовы начать свой путь в IT?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
            Запишитесь на бесплатную консультацию и узнайте больше о наших
            курсах
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Записаться на консультацию
          </button>
        </div>
      </AnimatedSection>

      {/* Contacts Section */}
      <div id="contacts">
        <Footer />
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}