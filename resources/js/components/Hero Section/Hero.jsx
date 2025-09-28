import React from 'react';

export default function Hero() {
  return (
    <section
  className="hero text-black min-h-[80vh] flex items-center justify-center py-10 bg-cover bg-center"
  style={{
    backgroundImage: "url('/assets/img/WhatsApp Image 2025-09-23 at 15.59.42_13803fcf.jpg')",
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Content */}
  <div className="relative z-10 w-full max-w-6xl px-4 text-center">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
      Strengthening Emergency Care
    </h1>
    <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">
      The 1st International Conference
    </h2>

    {/* Red Box with Dates & Venue */}
    <div className="inline-block mt-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg font-medium">
      22 - 23 | Oct | 2025
      <br />
      Mansour Hotel - Baghdad, Iraq
    </div>
  </div>
</section>

  );
}
