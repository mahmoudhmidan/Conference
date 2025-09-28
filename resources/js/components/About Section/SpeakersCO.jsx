import React, { useState } from 'react';

export default function ScientificCommitteeSection() {
  const [showAll, setShowAll] = useState(false);

  const scientificCommittee = [
   {
        "name": "Mr. Ahmed Mohamed Elsaid",
        "description": "Emergency Room Nurse Specialist, International Committee of the Red Cross (ICRC)",
        "city": "Station",
        "country": ""
    },
    {
        "name": "Alaa Abdul Rahman",
        "description": "Emergency Department, Al-Safeer Hospital, Karbala Ministry of Health (MOH)-Iraq",
        "city": "Karbala",
        "country": "Iraq"
    },
    {
        "name": "Dr. Alaa Fawzi Abdulameer",
        "description": "EMS Speaker - Medical Assistant, Babylon Health department - OEMS Ministry of Health (MoH) - Iraq",
        "city": "Babylon",
        "country": "Iraq"
    },
    {
        "name": "Dr. Alaa Khalil Asmail",
        "description": "Head of Disaster in Emergency Operations Center (EOC) Ministry of Health (MoH) - Iraq",
        "city": "Baghdad",
        "country": "Iraq"
    },
    {
        "name": "Dr. Alexander Colin Inglis",
        "description": "Head of Emergency Department Support (EDS) Program - HQ Metier, International Committee of the Red Cross (ICRC)",
        "city": "Geneva",
        "country": "Switzerland"
    },
    {
        "name": "Dr. Ali Ardalan",
        "description": "Regional Adviser & Unit Head, Health Systems Resilience, EMRO, WHO",
        "city": "Cairo",
        "country": "Egypt"
    },
    {
        "name": "Dr. Ali Hasan Rashid Rawaf",
        "description": "President, Iraqi Society for Emergency Medicine",
        "city": "Baghdad",
        "country": "Iraq"
    },
    {
        "name": "Dr. Ali Hussam",
        "description": "Emergency Department, Al-Hussein Teaching Hospital, Karbala, Ministry of Health (MoH) - Iraq",
        "city": "Karbala",
        "country": "Iraq"
    },
    {
        "name": "Dr. Ali Kazem Mahmoud Hassani",
        "description": "EMS Speaker - Muthanna Health Department, - OEMS Ministry of Health (MoH) - Iraq",
        "city": "Muthanna",
        "country": "Iraq"
    },
    {
        "name": "Dr. Ali Sameer Hasan",
        "description": "Emergency Medicine Consultant, East And North Hertfordshire NHS Trust",
        "city": "UK",
        "country": "UK"
    },
    {
        "name": "Ana Elisa Barbar",
        "description": "Health Care in Danger (HCiD) - Specialist, International Committee of the Red Cross (ICRC)",
        "city": "Sao Paulo",
        "country": "Brazil"
    },
    {
        "name": "Ms. Anabel Julia Carreras Rouma",
        "description": "Mental health and Psychosocial (MHPSS) Delegate, ICRC",
        "city": "Baghdad",
        "country": "Iraq"
    },
    {
        "name": "Dr. Dara Farhad Abd-Alkadar",
        "description": "Head of Emergency Department, Rojawa Emergency Hospital, MoH - Kurdistan",
        "city": "Erbil",
        "country": "Iraq"
    },
    {
        "name": "Ms. Diana Kirkorian",
        "description": "International Committee of the Red Cross (ICRC)",
        "city": "Geneva",
        "country": "Switzerland"
    },
    {
        "name": "Dr. Emad Fawzi",
        "description": "Emergency Medicine Residency Program, Ministry of Health (MoH) - Jordan",
        "city": "Amman",
        "country": "Jordan"
    },
    {
        "name": "Ms. Eve Charbonneau",
        "description": "Health Coordinator, ICRC",
        "city": "Baghdad",
        "country": "Iraq"
    },
    {
        "name": "Dr. Fadi Issa",
        "description": "Director of Education, Harvard Disaster Medicine Fellowship at BIDMC",
        "city": "Boston, MA",
        "country": "USA"
    },
    {
        "name": "Dr. Fahim Ali",
        "description": "Deputy Head of Emergency Department, Al-Hussein Teaching Hospital, Karbala, MoH - Iraq",
        "city": "Karbala",
        "country": "Iraq"
    },
    {
        "name": "Firas Jaafar Kareem Al-Najjar",
        "description": "Director of Emergency Medicine Residency Program, Al-Rashid Hospital, Dubai",
        "city": "Dubai",
        "country": "UAE"
    },
    {
        "name": "Dr. Firas Majid",
        "description": "Representative, United Iraqi Medical Association of UK and Ireland",
        "city": "Diyala",
        "country": "Iraq"
    },
    {
        "name": "Dr. Hazem Abdel Rahim Hammadi",
        "description": "EMS Speaker - Senior Technical Head Nurse, OEMS Training Department, MoH - Iraq",
        "city": "Basra",
        "country": "Iraq"
    },
    {
        "name": "Dr. Hend Mahmood Sayaly",
        "description": "Emergency Physician, Emergency Department, Baghdad Medical City Teaching Hospital",
        "city": "Baghdad",
        "country": "Iraq"
    },
    {
        "name": "Dr. Hussam Abdul Rassol",
        "description": "Neuromedicine, Baghdad Medical City, MoH - Iraq",
        "city": "Baghdad",
        "country": "Iraq"
    },
    {
        "name": "Dr. Ibrahim Labib",
        "description": "Director of Crisis Management, MoH Jordan",
        "city": "Amman",
        "country": "Jordan"
    },
    {
        "name": "Ms. Ico Bautista Garcia",
        "description": "Emergency Room Nurse Specialist, ICRC",
        "city": "London",
        "country": "UK"
    },
    {
        "name": "Dr. Karwan Yasin Mohammed",
        "description": "Director of Rojawa Emergency Hospital, MoH - Kurdistan",
        "city": "Erbil",
        "country": "Iraq"
    },
    {
        "name": "Dr. Killiam Alberto Argote Aramendiz",
        "description": "Emergency Medicine Specialist Doctor, ICRC",
        "city": "Kabul",
        "country": "Afghanistan"
    },
    {
        "name": "Dr. Lee Wallis",
        "description": "Lead - Emergency Care Program, WHO",
        "city": "Geneva",
        "country": "Switzerland"
    },
    {
        "name": "Dr. Liqaa Raffee",
        "description": "Vice President - Jordanian Society for Emergency Medicine, MoH - Jordan",
        "city": "Amman",
        "country": "Jordan"
    },
    {
        "name": "Ms. Maria Jose Roldan Cordoba",
        "description": "Emergency Room Nurse Specialist, ICRC",
        "city": "Madrid",
        "country": "Spain"
    },
    {
        "name": "Dr. Marwan Abdul Rahman",
        "description": "Head of Emergency Department, Basra Teaching Hospital, MoH - Iraq",
        "city": "Basra",
        "country": "Iraq"
    },
    {
  "name": "Dr. Marwan Al-ani",
  "description": "Emergency Coordinator, World Health Organisation (WHO)",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Marwan Zakariya Yahya",
  "description": "Head of Emergency Medicine Department, OEMS Directorate, Ministry of Health (MoH) - Iraq",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Matthew Earl",
  "description": "Prehospital Emergency Care Specialist, International Committee of the Red Cross (ICRC)",
  "city": "",
  "country": "Australia"
},
{
  "name": "Dr. Mohammed Husam Sadeq",
  "description": "Hospital Technical Deputy, Rufasa Hospital, Baghdad, Ministry of Health (MoH) - Iraq",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Mohammed Jummah",
  "description": "Deputy to Health Coordinator, International Committee of the Red Cross (ICRC)",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Moustafa Khalife",
  "description": "Emergency Room Nurse Specialist, International Committee of the Red Cross (ICRC)",
  "city": "Beirut",
  "country": "Lebanon"
},
{
  "name": "Dr. Muath Mazin",
  "description": "Head of Emergency Department, Al-Salam Hospital, Ministry of Health (MoH) - Iraq",
  "city": "Mosul",
  "country": "Iraq"
},
{
  "name": "Dr. Muddather Mohammed",
  "description": "Head of Emergency Medicine Department, College of Medicine / University of Mosul",
  "city": "Mosul",
  "country": "Iraq"
},
{
  "name": "Dr. Noor Razzaq AbdulHussein",
  "description": "Emergency Physician, Al Yarmouk Hospital, Ministry of Health (MoH) - Iraq",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Ms. Nour Ibrahim",
  "description": "Prehospital Emergency Care Delegate, International Committee of the Red Cross (ICRC)",
  "city": "Sana",
  "country": "Yemen"
},
{
  "name": "Dr. Rabeea Zaki Nnjee",
  "description": "Head of Emergency Department, Hela Surgical Hospital, Babylon, Ministry of Health (MoH) - Iraq",
  "city": "Babylon",
  "country": "Iraq"
},
{
  "name": "Mr. Raed Al-Alanazi",
  "description": "First Saudi Representative of the Saudi Red Crescent Authority to the ICRC, International Committee of the Red Cross (ICRC)",
  "city": "Kuwait City",
  "country": "Kuwait"
},
{
  "name": "Dr. Rafid Ismail Aziz",
  "description": "President, United Iraqi Medical Association of UK and Ireland",
  "city": "",
  "country": "UK"
},
{
  "name": "Dr. Rafid Shakir Nazzal",
  "description": "Deputy Head of Emergency Department, Baghdad Medical City Teaching Hospital, Ministry of Health (MoH) - Iraq",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Sada Kareem Hameed",
  "description": "Head of Emergency Department, Al Yarmouk Hospital, Ministry of Health (MoH) - Iraq",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Sadiq Hema Aziz",
  "description": "Emergency Physician at Sullemania, Kurdistan, Ministry of Health (MoH) - Kurdistan",
  "city": "Erbil",
  "country": "Iraq"
},
{
  "name": "Dr. Saif Al-bader",
  "description": "Communication Head of MOH, Ministry of Health (MoH) - Iraq",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Salam Abas",
  "description": "Head of Emergency Department, Baghdad Medical City Teaching Hospital, Ministry of Health (MoH) - Iraq",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Saleh Fares",
  "description": "President, International Federation of Emergency Medicine (IFEM)",
  "city": "Abu Dhabi",
  "country": "UAE"
},
{
  "name": "Dr. Sally Samir AlFahad",
  "description": "Emergency Physician, Emergency Department, Baghdad Medical City Teaching Hospital, Ministry of Health (MoH) - Iraq",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Mr. Sherzod Musrifshoev",
  "description": "Mental Health and Psychosocial (MHPSS) Delegate, International Committee of the Red Cross (ICRC)",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Solin Kawa Kamal",
  "description": "Co-head of Arabic Board of Emergency Medicine in Kurdistan, Ministry of Health (MoH) - Kurdistan",
  "city": "Erbil",
  "country": "Iraq"
},
{
  "name": "Dr. Soran Ahamed Khedir",
  "description": "Emergency Physician at the Higher Education Department of Kurdistan, Ministry of Health (MoH) - Kurdistan",
  "city": "Erbil",
  "country": "Iraq"
},
{
  "name": "Dr. Srihari Cattamanchi",
  "description": "Emergency Medicine Specialist, Doctor, International Committee of the Red Cross (ICRC)",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Wael Kassem",
  "description": "Spine Surgery Specialist, Subspecialty in Spinal Deformity and Scoliosis Surgery, Expert in Minimally Invasive and Endoscopic Spine Surgery",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Mr. William Andre Clucas",
  "description": "Prehospital Emergency Care Delegate, International Committee of the Red Cross (ICRC)",
  "city": "Damascus",
  "country": "Syria"
},
{
  "name": "Dr. Wissam Hussein Al-Temimi",
  "description": "Director of International Health Department, Ministry of Health (MoH) - Iraq",
  "city": "Baghdad",
  "country": "Iraq"
},
{
  "name": "Dr. Zohaib Akthar",
  "description": "Psychiatrist, Researcher, Digital Health Innovator and Entrepreneur, Johns Hopkins School of Public Health / Kellog School of Management",
  "city": "Chicago, Illinois",
  "country": "USA"
},
  // Add more up to 50...
];

  const displayedMembers = showAll ? scientificCommittee : scientificCommittee.slice(0, 5);

  return (
    <section
      id="scientific-committee"
      className="py-16 px-4"
      style={{ backgroundColor: '#03045E' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Scientific Committee
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {displayedMembers.map((member, idx) => (
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

        {/* Show More / Show Less Button */}
        {scientificCommittee.length > 5 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="bg-white text-blue-900 px-6 py-2 rounded shadow hover:bg-gray-100 transition"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
