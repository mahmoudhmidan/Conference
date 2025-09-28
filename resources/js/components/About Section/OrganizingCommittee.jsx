import React from 'react';

const organizers = [
  {
    name: 'Dr. Hani Mousa Bader Al Iqabi',
    role: 'Technical Deputy Minister of Health',
    position: 'Chair of the Organising Committee',
    image: '/assets/img/doctors/doctor1.jpg',
  },
  {
    name: 'Dr. Ahmed Sami Abdul Sattar',
    role: 'General Manager of KIMADIA, The state company for drug and medical appliances',
    position: 'Co-Chair of the Organising Committee',
    image: '/assets/img/doctors/doctor2.jpg',
  },
  {
    name: 'Dr. Fadil Agla Bonyan',
    role: 'General Director, Operations & Emergency Medical Services (OEMS) Directorate',
    position: 'Co-Chair of the Organising Committee',
    image: '/assets/img/doctors/doctor3.jpg',
  },
  {
    name: 'Dr. Ali Kareem Mohammed',
    role: 'General Manager, Technical Department Directorate',
    position: 'Member of the Organising Committee',
    image: '/assets/img/doctors/doctor4.jpg',
  },
  {
    name: 'Dr. Marwan Zakariya Yahya',
    role: 'Manager of Emergency Medicine Department',
    position: 'Member of the Organising Committee',
    image: '/assets/img/doctors/doctor5.jpg',
  },
  {
    name: 'Dr. Moddather Aziz Mohammed',
    role: 'Professor and Head of Emergency Medicine Department, College of Medicine/ University of Mosul',
    position: 'Member of the Organising Committee',
    image: '/assets/img/doctors/doctor6.jpg',
  },
  {
    name: 'Dr. Mohammed Jumaah Jasim Alhadeethi',
    role: 'Deputy to Health Coordinator, International Committee of the Red Cross (ICRC)',
    position: 'Member of the Organising Committee',
    image: '/assets/img/doctors/doctor7.jpg',
  },
  {
    name: 'Dr. Srihari Cattamanchi',
    role: 'Emergency Medicine Specialist, International Committee of the Red Cross (ICRC)',
    position: 'Member of the Organising Committee',
    image: '/assets/img/doctors/doctor8.jpg',
  },
];

export default function OrganizingCommittee() {
  return (
    <section id="organizing-committee" className="py-16 px-4 bg-gray-50" style={{ backgroundColor: '#03045E' }}>
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Organizing Committee
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {organizers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
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
