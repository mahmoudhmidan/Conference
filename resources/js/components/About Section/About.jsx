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
    <section id='about' className="flex flex-col md:flex-row gap-10 items-start md:items-center  py-16 bg-white">
      
     
      <div className="flex lg:flex-row flex-col items-center gap-4">
  
        <div className="flex lg:flex-col gap-3">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#4db69d] to-[#0da886]  hover:from-[#73ce9f] hover:to-[#3f9a92]  lg:w-32 lg:h-32 w-16 h-16 rounded-lg flex flex-col justify-center items-center text-white shadow-lg">
              <span className="lg:text-2xl font-bold text-sm ">
                <CountUp end={item.number} duration={2} />+
              </span>
              <p className="lg:text-sm text-[10px] text-center ">{item.label}</p>
            </div>
          ))}
        </div>
        <img src={img} alt="About" className="lg:w-[30rem] lg:h-[550px] object-cover  rounded-xl shadow-md" />
      </div>

     
     <div className="flex-1 text-start space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2E7D59] to-[#4FAF7A] bg-clip-text text-transparent">
          {t('about.title')}
        </h2>
        <p className="text-gray-600    md:leading-relaxed leading-snug lg:text-lg md:text-[12px] max-w-xl">
          {t('about.description')}
        </p>

       
        <ul className="flex flex-wrap lg:flex-row flex-col ">
          {features.map((feature, idx) => (
            <li key={idx} className="flex lg:items-center lg:w-1/2  md:w-full lg:mb-8 mb-4  lg:text-lg text-[12px] leading-relaxed text-gray-700">
              <FaCheckCircle className="w-5 h-5  text-[#3fb297] hover:text-[#3f9a92]  mr-2 ml-2" />
              {feature}
            </li>
          ))}
        </ul>

       
        <button className="mt-4 bg-gradient-to-r from-[#65db9a] to-[#2e9a82]  hover:from-[#66c293] hover:to-[#3f9a72] text-white px-10 py-4 rounded transition">
          {t('about.button')}
        </button>
      </div>
    </section>
  );
}
