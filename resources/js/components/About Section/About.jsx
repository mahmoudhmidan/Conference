import React from 'react';
import img from '../../assets/team.jpg';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { FaCheckCircle } from 'react-icons/fa';
export default function About() {
  const { t } = useTranslation();

  const stats = [
    { number: 250, label: t('about.stats.cases') },
    { number: 15, label: t('about.stats.years') },
    { number: 500, label: t('about.stats.clients') },
    { number: 10, label: t('about.stats.team') },
  ];
   const features = [
    t('about.features.quality'),
    t('about.features.experience'),
    t('about.features.trust'),
    t('about.features.success'),
  ];

  return (
    <section className="flex flex-col md:flex-row gap-10 items-start px-6 py-16 bg-white">
      
     
      <div className="flex lg:flex-row flex-col items-center gap-4">
  
        <div className="flex lg:flex-col gap-4">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-emerald-700 lg:w-32 lg:h-32 w-24 h-24 rounded-lg flex flex-col justify-center items-center text-white shadow-lg">
              <span className="text-2xl font-bold">
                <CountUp end={item.number} duration={2} />+
              </span>
              <p className="text-sm text-center">{item.label}</p>
            </div>
          ))}
        </div>
        <img src={img} alt="About" className="lg:w-[30rem] lg:h-[550px] object-cover  rounded-xl shadow-md" />
      </div>

     
     <div className="flex-1 text-start space-y-6">
        <h2 className="text-3xl font-bold text-emerald-950">
          {t('about.title')}
        </h2>
        <p className="text-gray-600  leading-snug text-lg max-w-xl">
          {t('about.description')}
        </p>

       
        <ul className="flex flex-wrap flex-row">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center w-1/2 mb-8 text-gray-700">
              <FaCheckCircle className="w-5 h-5  text-emerald-950 mr-2 ml-2" />
              {feature}
            </li>
          ))}
        </ul>

       
        <button className="mt-4 bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded transition">
          {t('about.button')}
        </button>
      </div>
    </section>
  );
}
