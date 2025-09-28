import React from 'react';

export default function WelcomeLetter() {
  return (
    <section className="py-16 px-4 flex justify-center" style={{ backgroundColor: '#03045E' }}>
      <div className="max-w-7xl w-full">
        {/* Paper Container */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative">
          {/* Top Ribbon */}
          <div className="h-3 bg-red-600 w-full"></div>

          {/* Content */}
          <div className="p-12 space-y-6">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center">
              Welcome Letter
            </h2>

            {/* Subtitle */}
            <h3 className="text-xl font-semibold text-center text-gray-700">
              Welcome Message from the Organizing Committee
            </h3>

            {/* Conference Info */}
            <p className="text-center text-gray-600 font-medium">
              <strong>The 1st International Conference on Strengthening Emergency Care in Iraq</strong>
              <br />
              22–23 October 2025 – Mansour Hotel, Baghdad, Iraq
            </p>

            {/* Body Text */}
            <div className="space-y-4 text-gray-700 text-justify text-base leading-relaxed">
              <p>Dear Esteemed Guests,</p>

              <p>
                It is our great honor to welcome you to the 1st International Conference on Strengthening Emergency 
                Care in Iraq, held on 22–23 October 2025 at the Mansour Hotel, Baghdad, under the theme 
                <strong> “From Crisis to Opportunity.”</strong>
              </p>

              <p>
                This historic gathering brings together a diverse and distinguished group of speakers – global experts and 
                those from within Iraq – and audience members, including policymakers, hospital directors, emergency 
                department leaders, physicians, residents, junior doctors, nurses, EMS officials, paramedics, and 
                responders.
              </p>

              <p>
                Your presence reflects the collective determination to strengthen the continuum of emergency care in Iraq, 
                from the site of injury or illness through to the emergency department, improving the quality of emergency 
                medical care provided in the field, ambulance, and emergency department.
              </p>

              <p>
                With the invaluable technical and financial support of the International Committee of the Red Cross 
                (ICRC), the Ministry of Health’s Operations and Emergency Medical Services (OEMS) Directorate, and 
                Kimadia, this conference represents more than a meeting—it is a commitment to action.
              </p>

              <p>
                Over the next two days, you will engage in scientific sessions, share experiences, and explore innovations 
                that can transform challenges into opportunities for progress.
              </p>

              <p>
                The resilience of Iraq’s health system depends on collaboration, knowledge-sharing, and the unwavering 
                dedication of professionals like you. Together, we aim to fill existing gaps, build sustainable capacity, and 
                enhance patient outcomes nationwide.
              </p>

              <p>
                On behalf of the organizing committee, I thank you for your participation and commitment. May this 
                conference inspire lasting partnerships and impactful strategies to save lives and advance emergency 
                care in Iraq.
              </p>
            </div>

            {/* Signature */}
            <p className="mt-6 font-semibold text-gray-800">
              With warm regards,
              <br />
              The Organizing Committee
              <br />
              The 1st International Conference on Strengthening Emergency Care in Iraq
              <br />
              <span className="italic text-gray-600">Organized by WHAT AN ART!</span>
            </p>
          </div>

          {/* Decorative Shadow Elements */}
          <div className="absolute top-4 left-4 w-28 h-28 bg-yellow-100 rounded-full -z-10 mix-blend-multiply"></div>
          <div className="absolute bottom-4 right-4 w-28 h-28 bg-red-100 rounded-full -z-10 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
}
