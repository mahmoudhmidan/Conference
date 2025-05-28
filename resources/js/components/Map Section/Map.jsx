import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Map() {
  const { t } = useTranslation();

  return (
    <section id="map" className="flex flex-col lg:flex-row w-full rounded px-8 h-[40rem] py-12 bg-gradient-to-b from-[#E6F4EA] via-[#F4FBF7] to-[#FFFFFF] gap-8 items-start">
      
      
      <div className="w-full lg:w-1/2 h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13290.578609308866!2d44.0643311!3d36.2119484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722d0f0b8d9c1%3A0x0!2zMzbCsDEyJzQzLjAiTiA0NMKwMDMnNTEuNiJF!5e0!3m2!1sen!2siq!4v1716899999999!5m2!1sen!2siq"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location on Google Maps"
          aria-label="Map showing company location"
        />
      </div>

    
      <div className="w-full lg:w-1/2 space-y-6 text-start">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2E7D59] to-[#4FAF7A] bg-clip-text text-transparent">{t('map.title')}</h2>
        
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
    <a
      href={`tel:${t('map.phone')}`}
      dir="ltr"
      className="text-emerald-700 hover:underline ltr:inline rtl:inline-block"
    >
      {t('map.phone')}
    </a>
  </li>
  <li className="flex items-center">
    <FaEnvelope className="text-emerald-700 ml-2 mr-2" />
    <a
      href={`mailto:${t('map.email')}`}
      dir="ltr"
      className="text-emerald-700 hover:underline ltr:inline rtl:inline-block"
    >
      {t('map.email')}
    </a>
  </li>
</ul>

      </div>
    </section>
  );
}
