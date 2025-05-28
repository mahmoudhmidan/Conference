import React from 'react';
import Hero from '../../components/Hero Section/Hero';
import About from '../../components/About Section/About';
import Services from '../../components/Services Section/Services';
import Map from '../../components/Map Section/Map';
import Contact from '../../components/Contact Section/Contact';
import AnimatedSection from '../../utils/AnimatedSetion'
export default function Home() {
  return (
    <div className="m-auto px-8">
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection delay={0.2}><About /></AnimatedSection>
      <AnimatedSection delay={0.4}><Services /></AnimatedSection>
      <AnimatedSection delay={0.6}><Map /></AnimatedSection>
      <AnimatedSection delay={0.8}><Contact /></AnimatedSection>
    </div>
  );
}
