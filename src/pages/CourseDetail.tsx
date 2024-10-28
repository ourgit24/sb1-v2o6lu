import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, GraduationCap, Briefcase, Calendar, Users, Phone, Sun, Moon } from 'lucide-react';
import { courses } from '../data/courses';
import { AnimatedSection } from '../components/AnimatedSection';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';

export function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  const [activeTab, setActiveTab] = useState('overview');
  const [timeSlot, setTimeSlot] = useState<'morning' | 'evening'>('morning');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Курс не найден</h1>
          <div className="text-center mt-4">
            <Link to="/" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться на главную
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = course.icon;
  const pricing = 'pricing' in course && typeof course.pricing === 'object' && 'morning' in course.pricing
    ? course.pricing[timeSlot]
    : course.pricing;

  const tabs = [
    { id: 'overview', label: 'Обзор' },
    { id: 'curriculum', label: 'Программа' },
    { id: 'schedule', label: 'Расписание' },
    { id: 'pricing', label: 'Стоимость' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-24">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к курсам
        </Link>

        <AnimatedSection animation="fade" className="mb-12">
 <div className="flex items-center mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-3 w-16 h-16 flex items-center justify-center mr-4">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white">
                {course.title}
              </h1>
            </div>
          </div>

          {'morning' in (course.pricing || {}) && (
            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={() => setTimeSlot('morning')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  timeSlot === 'morning'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>Утренняя группа</span>
              </button>
              <button
                onClick={() => setTimeSlot('evening')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  timeSlot === 'evening'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>Вечерняя группа</span>
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center text-gray-300">
              <Clock className="w-5 h-5 mr-2 text-blue-400" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <DollarSign className="w-5 h-5 mr-2 text-green-400" />
              <span>{pricing?.monthly || course.price}/в месяц</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2 text-purple-400" />
              <span type="tel">{course.contact}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-700 mb-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                    ${activeTab === tab.id
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'overview' && (
              <>
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 text-white">О курсе</h2>
                  <p className="text-gray-300 whitespace-pre-line">{course.fullDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-blue-400" />
                      Технологии
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {course.technologies?.map((tech, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <span className="text-blue-400 mr-2">•</span>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
                      Преимущества
                    </h2>
                    <div className="grid grid-cols-1 gap-2">
                      {course.features?.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <span className="text-purple-400 mr-2">•</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-8">
                {course.modules?.map((module, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={index * 100}
                    className="bg-gray-800/50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold mb-4 text-white">{module.title}</h3>
                    <ul className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span className="text-gray-300">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                ))}
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6 text-white">Расписание занятий</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-4">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                        Длительность
                      </h3>
                      <p className="text-gray-300">{course.schedule?.duration}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-400" />
                        Частота занятий
                      </h3>
                      <p className="text-gray-300">{course.schedule?.frequency}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-400" />
                        Длительность занятия
                      </h3>
                      <p className="text-gray-300">{course.schedule?.dailyHours}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-4 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-purple-400" />
                      Группы
                    </h3>
                    <ul className="space-y-2">
                      {course.schedule?.groups.map((time, index) => (
                        <li key={index} className="text-gray-300">
                          <span className="text-purple-400 mr-2">•</span>
                          {time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6 text-white">Стоимость обучения</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                    <h3 className="font-semibold text-white mb-2">Ежемесячно</h3>
                    <p className="text-2xl font-bold text-blue-400">{pricing?.monthly}</p>
                    <p className="text-gray-400 text-sm mt-2">в месяц</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                    <h3 className="font-semibold text-white mb-2">Полная оплата</h3>
                    <p className="text-2xl font-bold text-green-400">{pricing?.fullCourse}</p>
                    <p className="text-gray-400 text-sm mt-2">за весь курс</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                    <h3 className="font-semibold text-white mb-2">Рассрочка</h3>
                    <p className="text-2xl font-bold text-purple-400">{pricing?.installment}</p>
                    <p className="text-gray-400 text-sm mt-2">рассрочка 0-0-12</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Записаться на курс
            </button>
          </AnimatedSection>
        </AnimatedSection>
      </div>
      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        courseName={course.title}
      />
    </div>
  );
}