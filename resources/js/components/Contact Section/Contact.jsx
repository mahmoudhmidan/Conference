import React, { useState } from 'react';
import contactImage from '../../assets/contcat.jpg';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact_us" data-testid="contact_us" className="mt-20 mb-20 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="w-full lg:w-1/2 flex flex-col items-start text-start">
          <h1 className=" text-3xl font-bold uppercase  text-emerald-900">{t('contact.title')}</h1>
          <p className="text-gray-600 text-md mt-2 mb-4 leading-relaxed">
            {t('contact.description')}
          </p>
          <img
            src={contactImage}
            alt="Contact Us"
            className="w-full mt-4 rounded-md shadow-md object-fit max-h-[28rem]"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-white shadow-md p-8 rounded-md mt-10 lg:mt-0"
        >
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-md mb-2 text-gray-700 font-semibold">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-md mb-2 text-gray-700 font-semibold">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-md mb-2 text-gray-700 font-semibold">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-teal-500 hover:bg-teal-700  rounded-md transition duration-300"
            >
              {t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
