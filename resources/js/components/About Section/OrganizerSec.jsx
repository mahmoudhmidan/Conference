import React from 'react';

export default function Organizer() {
  return (
    <section className="py-16 px-4 bg-gray-50 flex justify-center" style={{ backgroundColor: '#03045E' }}>
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-10 relative">

        {/* Logo + Organizer Name */}
        <div className="flex items-center mb-6">
          <div className="w-36 h-36 mr-4">
            <img src="/assets/img/Logo .png" alt="What an Art Logo" className="w-full h-full object-contain"/>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-justify text-base leading-relaxed mb-4">
          WHAT AN ART is a leading event management and creative production agency specializing in 
          planning and delivering high-level medical and scientific conferences.
        </p>

        <p className="text-gray-700 text-justify text-base leading-relaxed mb-4">
          With extensive experience in organizing large-scale healthcare events, we provide end-to-end 
          solutions including concept development, program coordination, venue management, speaker 
          support, logistics, branding, and on-site operations. 
        </p>

        <p className="text-gray-700 text-justify text-base leading-relaxed">
          Our mission is to transform ideas into impactful experiences, ensuring every conference we manage 
          meets the highest professional standards and leaves a lasting impression on all participants.
        </p>
      </div>
    </section>
  );
}
