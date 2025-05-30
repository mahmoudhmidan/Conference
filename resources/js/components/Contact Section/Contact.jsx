import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const { t, i18n } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs
      .sendForm(
        'service_y4xjw66',
        'template_0dh341h',
        form.current,
        'qauJAOZGI6kMuq-SF'
      )
      .then(
        () => {
          setTimeout(() => {
            setLoading(false);
            setStatusMessage({
              type: 'success',
              text:
                i18n.language === 'ar'
                  ? ' تم إرسال رسالتك بنجاح!'
                  : ' Your message has been sent successfully!',
            });
            setFormData({ name: '', email: '', message: '' });
          }, 3000); 
        },
        () => {
          setTimeout(() => {
            setLoading(false);
            setStatusMessage({
              type: 'error',
              text:
                i18n.language === 'ar'
                  ? ' فشل في إرسال الرسالة. حاول مرة أخرى.'
                  : ' Failed to send your message. Please try again.',
            });
          }, 1500);
        }
      );
  };

  useEffect(() => {
    if (statusMessage.text) {
      const timer = setTimeout(() => {
        setStatusMessage({ type: '', text: '' });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <section
      id="contact_us"
      data-testid="contact_us"
      className="mt-20 mb-20 relative rounded-md bg-gray-50 shadow-md text-white overflow-hidden"
    >
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-50 bg-gray-50/80 flex items-center justify-center">
          <DotLottieReact 
            src='/assets/animations/loading.lottie'
            autoplay
            loop
            style={{ width: '60%', height: 'auto' }}
          />
        </div>
      )}

      {/* Status Message */}
      {statusMessage.text && (
        <div className="fixed inset-0 z-[700] flex items-center bg-gray-50 rounded-md shadow-md justify-center">
          <div
            className={`px-6 py-4  flex  flex-col justify-center items-center  rounded-lg shadow-lg text-white text-center max-w-md w-full mx-4
             `}
          >
           
            <DotLottieReact 
              src={`${statusMessage.type ==='success'?'/assets/animations/sucess.lottie':'/assets/animations/error.lottie'} `}
              autoplay
              loop
              style={{ width: '100%', height: 'auto' }}
          />
       
        
            <p className="text-lg font-medium text-gray-800">{statusMessage.text}</p>
          </div>
        </div>
      )}

      {/* Layout */}
      <div className="flex flex-col lg:flex-row justify-between relative z-10">
        {/* Left Side */}
        <div className="w-full h-[35rem] lg:w-1/2 flex flex-col rounded-br-md rounded-tr-md bg-gradient-to-r from-[#d9f5f4] to-[#c7e7e3] items-start text-start">
          <h1 className="text-3xl font-bold uppercase text-[#02B2BB] px-4 mt-8">
            {t('contact.title')}
          </h1>
          <p className="text-gray-600 text-md mb-4 px-4 leading-relaxed">
            {t('contact.description')}
          </p>
          
          <div className="self-center w-[50rem]">
              <DotLottieReact 
                src='/assets/animations/contact.lottie'
                autoplay
                loop
               
              />
        
          </div>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-gradient-to-b p-8 rounded-md mt-10 lg:mt-0"
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
                className="w-full p-3 text-gray-900 border-2 bg-transparent border-[#97cac2ee] rounded-md outline-none focus:ring focus:ring-gray-100"
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
                className="w-full p-3 border-2 text-gray-900 bg-transparent border-[#97cac2ee] rounded-md outline-none focus:ring focus:ring-gray-100"
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
                className="w-full p-3 border-2 text-gray-900 bg-transparent border-[#97cac2ee] rounded-md outline-none focus:ring focus:ring-gray-100"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-4 text-white bg-gradient-to-r from-[#65db9a] to-[#2e9a82] hover:from-[#66c293] hover:to-[#3f9a72] rounded-md transition duration-300"
            >
              {loading ? t('contact.sending') : t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
