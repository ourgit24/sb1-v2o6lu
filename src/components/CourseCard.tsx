import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';

interface CourseCardProps {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  duration: string;
  price: string;
  index: number;
}

export function CourseCard({ id, title, icon: Icon, description, duration, price, index }: CourseCardProps) {
  return (
    <AnimatedSection 
      animation="fade-up" 
      delay={index * 100}
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-xl shadow-lg p-4 sm:p-6 transition-all hover:shadow-xl hover:-translate-y-1 border border-gray-700 group"
    >
      <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between items-center text-xs sm:text-sm text-gray-300">
        <span className="flex items-center">
          <span className="mr-1">⏱</span>
          {duration}
        </span>
        <span className="font-bold text-purple-300">{price}</span>
      </div>
      <Link 
        to={`/course/${id}`}
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all font-medium text-sm sm:text-base inline-block text-center"
      >
        Подробнее
      </Link>
    </AnimatedSection>
  );
}