'use client';

import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'pl' ? 'en' : 'pl');
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-darkBlue shadow-lg">
            <nav className="flex justify-between items-center p-4">
                <div className="flex gap-4">
                    <a href="#about" className="text-white hover:text-vibrantBlue">
                        {language === 'pl' ? 'O mnie' : 'About'}
                    </a>
                    <a href="#projects" className="text-white hover:text-vibrantBlue">
                        {language === 'pl' ? 'Projekty' : 'Projects'}
                    </a>
                    <a href="#contact" className="text-white hover:text-vibrantBlue">
                        {language === 'pl' ? 'Kontakt' : 'Contact'}
                    </a>
                </div>
                <button
                    onClick={toggleLanguage}
                    className="text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-darkBlue transition"
                >
                    {language.toUpperCase()}
                </button>
            </nav>
        </header>
    );
};

export default Header;
