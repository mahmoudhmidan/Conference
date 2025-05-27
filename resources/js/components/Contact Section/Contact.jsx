import React, { useRef, useState } from 'react';
import contactImage from '../../assets/contact.jpg';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef();

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

    emailjs.sendForm(
      'service_y4xjw66',       // Replace with your EmailJS service ID
      'template_0dh341h',      // Replace with your EmailJS template ID
      form.current,
      'qauJAOZGI6kMuq-SF'        // Replace with your EmailJS public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact_us" data-testid="contact_us" className="mt-20 mb-20 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 flex flex-col items-start text-start">
          <h1 className="text-3xl font-bold uppercase bg-gradient-to-r from-[#2E7D59] to-[#4FAF7A] bg-clip-text text-transparent">
            {t('contact.title')}
          </h1>
          <p className="text-gray-600 text-md mt-2 mb-4 leading-relaxed">
            {t('contact.description')}
          </p>
          <img
            src={contactImage}
            alt="Contact Us"
            className="mt-4 rounded-md shadow-md object-fit h-96 w-full"
          />
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-gradient-to-b from-[#E6F4EA] via-[#F4FBF7] to-[#FFFFFF] shadow-md p-8 rounded-md mt-10 lg:mt-0"
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
                required
                className="w-full p-3 border-2 bg-transparent border-[#97cac2ee] rounded-md outline-none focus:ring focus:ring-gray-100"
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
                required
                className="w-full p-3 border-2 bg-transparent border-[#97cac2ee] rounded-md outline-none focus:ring focus:ring-gray-100"
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
                rows="6"
                required
                className="w-full p-3 border-2 bg-transparent border-[#97cac2ee] rounded-md outline-none focus:ring focus:ring-gray-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-gradient-to-r from-[#65db9a] to-[#2e9a82] hover:from-[#66c293] hover:to-[#3f9a72] rounded-md transition duration-300"
            >
              {t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
