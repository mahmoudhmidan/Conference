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

  const contentOfFooter = [
    {
      logo: img,
      text: t('footer.description')
    },
    {
      title: t('footer.company'),
      links: [
        t('footer.links.home'),
        t('footer.links.about'),
        t('footer.links.services'),
      
      ]
    },
    {
      title: t('footer.contact'),
      links: [
        t('footer.contactList.email'),
        t('footer.contactList.phone'),
        t('footer.contactList.address')
      ]
    },
    {
      title: t('footer.policies'),
      links: t('footer.policyLinks', { returnObjects: true })
    },
    {
      title: t('footer.social'),
      isSocialMedia: true,
      links: [
        { icon: <FaSquareFacebook />, label: 'Facebook' },
        { icon: <FaSquareInstagram />, label: 'Instagram' },
        { icon: <FaLinkedin />, label: 'LinkedIn' },
        { icon: <FaSquareXTwitter />, label: 'Twitter' }
      ]
    }
  ];

  return (
    <footer data-testid="footer" className="flex flex-col bg-teal-50 text-black p-8 text-center">
      <div className="flex xl:flex-row flex-col justify-center gap-8 w-full">
        {contentOfFooter.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            {/* Logo and text */}
            {item.logo && (
              <div className="flex flex-col items-start justify-start mt-[-3rem]">
                <img src={item.logo} alt="Logo" className=" mr-[-2rem]" />
                <p className="text-sm text-start text-gray-600 mt-[-4rem]">{item.text}</p>
              </div>
            )}

            {/* Title */}
            {item.title && (
              <h3 className="font-semibold text-start text-lg mb-2">{item.title}</h3>
            )}

            {/* Links */}
            {item.links && (
              <div
                className={`${
                  item.isSocialMedia
                    ? 'flex flex-row items-center gap-3'
                    : 'flex flex-col text-start items-start'
                }`}
              >
                {item.links.map((link, linkIndex) =>
                  typeof link === 'string' ? (
                    <a
                      key={linkIndex}
                      href="#"
                      className="text-sm font-medium text-gray-600 hover:text-gray-800 mb-2"
                    >
                      {link}
                    </a>
                  ) : (
                    <a
                      key={linkIndex}
                      href="#"
                      aria-label={link.label}
                      className="text-gray-600 text-3xl hover:text-gray-800"
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
      <hr className="w-full border-t border-gray-300 mt-8" />
      <p className="text-sm text-center mt-4 text-gray-500">
        {t('footer.copyright')}
      </p>
    </footer>
  );
}
