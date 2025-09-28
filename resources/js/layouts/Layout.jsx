import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/Hero Section/Hero';
import WelcomeLetter from '../components/Hero Section/WelcomeLetter';
import About from '../components/About Section/About';
import OrganizingCommitte from '../components/About Section/OrganizingCommittee';
import ScientificCommittee from '../components/About Section/ScientificCommittee';
import Organizer from '../components/About Section/OrganizerSec';
import SpeakersCO from '../components/About Section/SpeakersCO';
import Agenda from '../components/About Section/Agenda'
import Footer from '../components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import BackToTop from '../components/common/BackToTop';
const Layout = ({ children }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const currentLang = i18n.language;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        document.documentElement.classList.remove('lang-ar', 'lang-en');
        document.documentElement.classList.add(currentLang === 'ar' ? 'lang-ar' : 'lang-en');
    }, [i18n.language]); 
    return (
        <div>
            <Navbar />
            <Hero />
            <WelcomeLetter />
            <About />
            <OrganizingCommitte />
            <ScientificCommittee />
            <Organizer />
            <SpeakersCO />
            <Agenda />
              <BackToTop/>
            <Footer />
        </div>
    );
};

export default Layout;
