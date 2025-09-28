import React from 'react';

export default function Agenda() {
  return (
    <section className="py-16 px-4 bg-white text-black" id="agenda" style={{ backgroundColor: '#03045E' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          – Agenda
        </h2>

        {/* Download Button */}
        <a
          href="/agenda.pdf" // PDF should be in the public folder
          download
          className="inline-block px-6 py-3 bg-[#03049E] text-white font-semibold rounded-md shadow hover:bg-[#023e8a] transition"
        >
          Download Agenda PDF
        </a>
      </div>
    </section>
  );
}
