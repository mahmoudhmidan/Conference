import React from 'react'
import Hero from '../../components/Hero Section/Hero';
import About from '../../components/About Section/About';
import Services from '../../components/Services Section/Services';
import Map from '../../components/Map Section/Map';
import Contact from '../../components/Contact Section/Contact';

export default function Home() {
     return (
        <div className='m-auto px-8'>
           <Hero/>
           <About/>
           <Services/>
           <Map/>
           <Contact/>
        </div>
    );
}
