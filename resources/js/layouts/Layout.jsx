import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

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
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
