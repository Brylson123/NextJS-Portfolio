'use client';

import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
    const { language } = useLanguage();

    const content = {
        pl: {
            title: 'Kontakt',
            description:
                'Jeśli chcesz się ze mną skontaktować, napisz e-mail lub odwiedź mój profil LinkedIn:',
            email: 'bryla.kacper08@gmail.com',
            linkedin: 'LinkedIn',
        },
        en: {
            title: 'Contact',
            description:
                'If you would like to get in touch with me, send an email or visit my LinkedIn profile:',
            email: 'bryla.kacper08@gmail.com',
            linkedin: 'LinkedIn',
        },
    };

    return (
        <section
            id="contact"
            className="py-12 px-4 bg-gradient-to-b from-gray-800 via-darkBlue to-gray-900"
        >
            <div className="text-center">
                <h2 className="text-3xl text-cyan-400 font-bold mb-6">
                    {content[language].title}
                </h2>
                <p className="text-lightGray mb-4">
                    {content[language].description}
                </p>
                <div className="mt-6">
                    <a
                        href={`mailto:${content[language].email}`}
                        className="text-cyan-300 underline hover:text-cyan-500"
                    >
                        {content[language].email}
                    </a>
                    <br />
                    <a
                        href="https://www.linkedin.com/in/kacper-bry%C5%82a/"
                        className="text-cyan-300 underline hover:text-cyan-500 mt-2 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {content[language].linkedin}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;