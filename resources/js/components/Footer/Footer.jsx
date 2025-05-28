import React from 'react';
import img from '../../assets/logoFooter.png';
import {
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareFacebook,
} from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const contentOfFooter = [
    {
      logo: img,
      text: t('footer.description'),
    },
    {
      title: t('footer.company'),
      links: [t('footer.links.home'), t('footer.links.about'), t('footer.links.services')],
    },
    {
      title: t('footer.contact'),
      links: [
        t('footer.contactList.email'),
        t('footer.contactList.phone'),
        t('footer.contactList.address'),
      ],
    },
    {
      title: t('footer.policies'),
      links: t('footer.policyLinks', { returnObjects: true }),
    },
    {
      title: t('footer.social'),
      isSocialMedia: true,
      links: [
        { icon: <FaSquareFacebook />, label: 'Facebook' },
        { icon: <FaSquareInstagram />, label: 'Instagram' },
        { icon: <FaLinkedin />, label: 'LinkedIn' },
        { icon: <FaSquareXTwitter />, label: 'Twitter' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#E6F4EA] via-[#F4FBF7] to-white text-black pt-12 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-wrap justify-between gap-y-10">
        {contentOfFooter.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 xl:w-[18%] min-w-[180px] px-2"
          >
            {/* Logo & Description */}
            {item.logo && (
              <div className="flex flex-col gap-3">
                <img src={item.logo} alt="Logo" className="w-28 h-auto" />
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            )}

            {/* Section Title */}
            {item.title && (
              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                {item.title}
              </h3>
            )}

            {/* Links or Socials */}
            {item.links && (
              <div
                className={`${
                  item.isSocialMedia
                    ? 'flex flex-row items-center gap-4'
                    : 'flex flex-col gap-2'
                }`}
              >
                {item.links.map((link, linkIndex) =>
                  typeof link === 'string' ? (
                    <a
                      key={linkIndex}
                      href="#"
                      className="text-sm text-gray-600 hover:text-black transition duration-200"
                    >
                      {link}
                    </a>
                  ) : (
                    <a
                      key={linkIndex}
                      href="#"
                      aria-label={link.label}
                      className="text-2xl text-gray-500 hover:text-black transition duration-200"
                    >
                      {link.icon}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <hr className="mt-10 border-gray-300" />

      <p className="text-center text-sm text-gray-500 py-6">
        {t('footer.copyright', { year })}
      </p>
    </footer>
  );
}
