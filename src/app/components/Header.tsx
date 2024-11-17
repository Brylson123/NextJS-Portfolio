'use client';

import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'pl' ? 'en' : 'pl');
    };

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-darkBlue shadow-lg">
            <nav className="flex justify-between items-center p-4">
                <div className="flex gap-4">
                    <button
                        onClick={() => handleSmoothScroll('about')}
                        className="text-white hover:text-vibrantBlue"
                    >
                        {language === 'pl' ? 'O mnie' : 'About'}
                    </button>
                    <button
                        onClick={() => handleSmoothScroll('projects')}
                        className="text-white hover:text-vibrantBlue"
                    >
                        {language === 'pl' ? 'Projekty' : 'Projects'}
                    </button>
                    <button
                        onClick={() => handleSmoothScroll('contact')}
                        className="text-white hover:text-vibrantBlue"
                    >
                        {language === 'pl' ? 'Kontakt' : 'Contact'}
                    </button>
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
