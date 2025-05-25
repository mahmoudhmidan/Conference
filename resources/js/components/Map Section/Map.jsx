import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Map() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col lg:flex-row w-full rounded px-4 py-12 bg-slate-100 gap-8 items-start">
      
      
      <div className="w-full lg:w-1/2 h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103029.21861367868!2d44.08488118277208!3d36.19907494292162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722fe13443461%3A0x3e01d63391de79d1!2z2KfYsdio2YrZhNiMINij2LHYqNmK2YQg2YXYrdin2YHYuNip!5e0!3m2!1sar!2siq!4v1748124312422!5m2!1sar!2siq"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    
      <div className="w-full lg:w-1/2 space-y-6 text-start">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900">{t('map.title')}</h2>
        
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {t('map.description')}
        </p>

        <ul className="space-y-4 text-gray-800 text-base md:text-lg">
          <li className="flex items-center">
            <FaMapMarkerAlt className="text-emerald-700 ml-2 mr-2" />
            {t('map.location')}
          </li>
          <li className="flex items-center">
            <FaClock className="text-emerald-700 ml-2 mr-2" />
            {t('map.hours')}
          </li>
          <li className="flex items-center">
            <FaPhone className="text-emerald-700 ml-2 mr-2" />
            {t('map.phone')}
          </li>
          <li className="flex items-center">
            <FaEnvelope className="text-emerald-700 ml-2 mr-2" />
            {t('map.email')}
          </li>
        </ul>
      </div>
    </section>
  );
}
