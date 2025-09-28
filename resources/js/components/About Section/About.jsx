import React, { useState } from 'react';

// Named export for AboutSection
export function AboutSection({ section }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4 min-h-[300px] cursor-pointer">
        {/* Images */}
        <div
          className="flex flex-row gap-4 justify-center"
          onClick={() => setIsModalOpen(true)}
        >
          {section.images.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt={`${section.title} logo ${i + 1}`}
              className="w-20 h-20 object-cover rounded-full shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>

        {/* Text */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
          {section.subtitle && (
            <h4 className="text-md text-gray-600 mb-2">{section.subtitle}</h4>
          )}

          <button
            className="text-red-600 font-medium text-sm md:text-base hover:underline mt-2"
            onClick={() => setIsModalOpen(true)}
          >
            Read more
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-3xl w-full relative shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 font-bold text-xl hover:text-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
            {section.subtitle && (
              <h4 className="text-md text-gray-600 mb-4">{section.subtitle}</h4>
            )}
            <div className="text-gray-700 text-sm md:text-base leading-relaxed">
              {section.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Default export for AboutUsFull
export default function AboutUsFull() {
  const sections = [
    {
      title: 'Ministry of Health (MoH)',
      subtitle: 'MoH Operations and Emergency Medical Services (OEMS) Directorate – Iraq',
      images: ['/assets/img/health-minisitry.png', '/assets/img/OMES.jpeg'],
      description: `The Ministry of Health (MoH) Directorate of Operations and Emergency Medical Services (OEMS) serves 
as the central authority responsible for the oversight, regulation, and advancement of emergency care 
systems across Iraq. As the nodal body, the MoH OEMS Directorate oversees hospital emergency 
departments, EMS ambulance services, and national emergency preparedness and response mechanisms, 
ensuring that lifesaving care is delivered in a timely, safe, and effective manner.

A key mandate of the MoH OEMS Directorate is the accreditation of Emergency Departments (EDs) and EMS 
services in both the MoH and private sector hospitals. By developing and enforcing clinical guidelines, 
care standards, and treatment protocols in EMS and Emergency Medicine, OEMS ensures uniformity, 
quality, and accountability in the delivery of emergency care nationwide.

The MoH OEMS Directorate also plays a frontline role in national emergency response, coordinating action 
during disasters, public health crises, and large-scale emergencies. Its scope includes leading Iraq’s 
readiness for mass gatherings, disaster preparedness, and specialized CBRNE (Chemical, Biological, 
Radiological, Nuclear, and Explosives) response.

Through capacity-building, system reform, and collaboration with international partners such as the ICRC, 
WHO and other NGOs, the MoH OEMS Directorate is working to strengthen the continuum of emergency 
care, improve patient outcomes, and enhance Iraq’s resilience in the face of crises.`,
    },
    {
      title: 'Kimadia',
      subtitle: 'Providing medicines and high-quality supplies through the use of highly efficient import policy .',
      images: ['/assets/img/Marketing-drugs.jpeg'],
      description: `Kimadia is a public company founded in 1964, governed by the general companies law No.22 of 1997 
as amended and the rules of procedure NO.1 of 1999. The company is managed by the Board of Directors. 
It is an economic unit, self-founded and wholly owned by the state with financial and administrative independence. 

The company targets: providing medicines, medical supplies, medical equipment, and laboratory materials, 
maintaining service and devices, contributing to local manufacturing, and serving governmental and non-governmental health institutions.

Vision: Providing medicines and high-quality supplies through an efficient import policy, ensuring provision 
of medicines and medical appliances for all citizens with high quality and appropriate cost.`,
    },
    {
      title: 'International Committee of the Red Cross (ICRC)',
      subtitle: 'ICRC’s Work in Strengthening Emergency Care in Iraq',
      images: ['/assets/img/icrc.png'],
      description: `The International Committee of the Red Cross (ICRC) has been working in Iraq since 1980, supporting 
the health system and responding to humanitarian needs during decades of conflict and crisis. Building 
on this long-standing presence, in 2024 the ICRC launched the Emergency Care Support (ECS) Program 
in close partnership with the Ministry of Health’s Directorate of Operations and Emergency Medical 
Services (OEMS). This program is dedicated to strengthening the continuum of emergency care across Iraq.

Through the ECS program, the ICRC focuses on improving both prehospital EMS ambulance services 
and hospital-based Emergency Departments (EDs). At the prehospital level, the priority is ensuring 
that patients receive timely, skilled care at the site of injury or illness and during transport by trained 
EMS professionals in well-equipped ambulances. By standardizing clinical protocols and building EMS 
capacity, the ICRC helps ensure rapid, high-quality interventions that can save lives before hospital 
arrival.

Within EDs, the ICRC supports the delivery of safe, effective, and internationally benchmarked 
emergency care. This includes capacity building, human resource development, and awareness 
programs to strengthen the skills of physicians, residents, nurses, and other healthcare providers.

The ICRC also works with the MoH OEMS Directorate to support policy reforms, legislation, and 
accreditation systems that uphold national standards for EMS and EDs across both public and private 
hospitals.

By combining technical expertise, training, and system-level reform, the ICRC aims to reduce preventable 
mortality and morbidity while ensuring that people across Iraq have access to timely, high-quality 
emergency care.`,
    },
  ];

  return (
    <section id="about-us" className="py-16 px-4 bg-gray-50" style={{ backgroundColor: '#03045E' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">About Us</h2>

        {/* Grid layout for three boxes side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <AboutSection key={idx} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
