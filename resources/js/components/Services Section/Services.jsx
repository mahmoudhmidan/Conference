import React from 'react';
import img from '../../assets/img1.png'
import img2 from '../../assets/img 2.png'
import img3 from '../../assets/img 3.png'
import img4 from '../../assets/img 4.png'
import img5 from '../../assets/img 5.png'
import img6 from '../../assets/img 6.png'
import img7 from '../../assets/img 7.png'
import { useTranslation } from 'react-i18next';
export default function Services() {
  const { t } = useTranslation();

  const services = [
    { id: 'legal_claims', img: img },
    { id: 'criminal_cases', img: img6 },
    { id: 'immigration', img: img4 },
    { id: 'contracts', img: img7 },
    { id: 'companies', img: img5 },
    { id: 'customs', img:img2  },
    { id: 'consultation', img: img3 },
  ];

  return (
    <div id='services' className='p-12'>
    
      <div className='text-center mb-12 max-w-2xl mx-auto'>
        <h2 className='lg:text-3xl md:text-xs font-bold bg-gradient-to-r from-[#2E7D59] to-[#4FAF7A] bg-clip-text text-transparent mb-4'>{t('services.title')}</h2>
        <p className='text-gray-600'>{t('services.description')}</p>
      </div>

      
      <div className='flex flex-row flex-wrap gap-6 justify-center'>
        {services.map((service) => {
          const src = service.img;
          return (
            <div
              key={service.id}
              className='flex flex-col w-64 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 items-center text-center'
            >
              <div className='bg-gradient-to-r from-[#3fb297] to-[#6ee5cb]  hover:from-[#73ce9f] hover:to-[#3f9a92] p-3 rounded-full mb-3'>
                <img src={src} className=' w-10 ' alt='' />
              </div>
              <h3 className='  lg:text-lg text-[16px] font-bold text-green-900 mb-1'>
                {t(`services.items.${service.id}.name`)}
              </h3>
              <p className='text-gray-600 lg:text-sm text-[12px] leading-snug '>
                {t(`services.items.${service.id}.text`)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
