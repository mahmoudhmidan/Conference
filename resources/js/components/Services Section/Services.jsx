import React from 'react';
import { FaBalanceScale } from 'react-icons/fa';
import { GiHandcuffs } from 'react-icons/gi';
import { MdTravelExplore, MdOutlineSupportAgent } from 'react-icons/md';
import { RiFilePaper2Line } from 'react-icons/ri';
import { HiOfficeBuilding } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { id: 'legal_claims', icon: FaBalanceScale },
    { id: 'criminal_cases', icon: GiHandcuffs },
    { id: 'immigration', icon: MdTravelExplore },
    { id: 'contracts', icon: RiFilePaper2Line },
    { id: 'companies', icon: HiOfficeBuilding },
    { id: 'customs', icon: TbTruckDelivery },
    { id: 'consultation', icon: MdOutlineSupportAgent },
  ];

  return (
    <div className='p-12'>
    
      <div className='text-center mb-12 max-w-2xl mx-auto'>
        <h2 className='text-3xl font-bold text-green-900 mb-4'>{t('services.title')}</h2>
        <p className='text-gray-600'>{t('services.description')}</p>
      </div>

      
      <div className='flex flex-row flex-wrap gap-6 justify-center'>
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className='flex flex-col w-64 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 items-center text-center'
            >
              <div className='bg-green-700 p-3 rounded-full mb-3'>
                <Icon className='text-white text-2xl' />
              </div>
              <h3 className='text-lg font-bold text-green-900 mb-1'>
                {t(`services.items.${service.id}.name`)}
              </h3>
              <p className='text-gray-600 text-sm'>
                {t(`services.items.${service.id}.text`)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
