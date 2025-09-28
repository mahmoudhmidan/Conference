import React from 'react';

const scientificCommittee = [
  {
    name: 'Dr. Fadil Agla Bonyan',
    role: 'General Director, Operations & Emergency Medical Services (OEMS Directorate)',
    position: 'Chair of the Scientific Committee',
    image: '/assets/img/doctors/doctor1.jpg',
  },
  {
    name: 'Dr. Marwan Zakariya Yahya',
    role: 'Manager of Emergency Medicine Department',
    position: 'Co-Chair of the Scientific Committee',
    image: '/assets/img/doctors/doctor2.jpg',
  },
  {
    name: 'Dr. Srihari Cattamanchi',
    role: 'Emergency Medicine Specialist, International Committee of the Red Cross (ICRC)',
    position: 'Co-Chair of the Scientific Committee',
    image: '/assets/img/doctors/doctor3.jpg',
  },
  {
    name: 'Hend Mahmood Sayaly',
    role: 'Head of the Scientific Board of Emergency Medicine in Iraq',
    position: 'Member of the Scientific Committee',
    image: '/assets/img/doctors/doctor4.jpg',
  },
  {
    name: 'Dr. Fahem Ali Hasan',
    role: 'Department of Health in Holy Karbla',
    position: 'Member of the Scientific Committee',
    image: '/assets/img/doctors/doctor5.jpg',
  },
  {
    name: 'Dr. Ali Hasan Rashid Al Rawaf',
    role: 'Head of Iraqi Society for Emergency Medicine (ISEM)',
    position: 'Member of the Scientific Committee',
    image: '/assets/img/doctors/doctor6.jpg',
  },
  {
    name: 'Dr. Alaa Abdullrahman Habib',
    role: 'Department of Health in Holy Karbla',
    position: 'Member of the Scientific Committee',
    image: '/assets/img/doctors/doctor7.jpg',
  },
  {
    name: 'Dr. Nusrat Shakir Mohammad Hussain',
    role: 'Manager of Training Center of Emergency Medicine services',
    position: 'Member of the Scientific Committee',
    image: '/assets/img/doctors/doctor8.jpg',
  },
];

export default function ScientificCommittee() {
  return (
    <section id="scientific-committee" className="py-16 px-4 bg-white" style={{ backgroundColor: '#03045E' }}>
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Scientific Committee
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {scientificCommittee.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm font-medium">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
