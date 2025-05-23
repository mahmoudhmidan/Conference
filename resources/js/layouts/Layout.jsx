import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import i18next from 'i18next';

const Layout = ({ children }) => {
    useEffect(() => {
        const currentLang = i18next.language;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        document.documentElement.classList.remove('lang-ar', 'lang-en');
        document.documentElement.classList.add(currentLang === 'ar' ? 'lang-ar' : 'lang-en');
    }, [i18next.language]);

    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
