'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const experiences = {
    pl: [
        {
            company: 'Krakodlew S.A',
            description:
                'W firmie podczas mojego stażu nauczyłem się JavaScriptu, pomagałem naprawiać komputery i zapoznałem się z zarządzaniem serwerami.',
            image: '/company/krakodlew.png',
            technologies: [
                { name: 'HTML5', icon: '/tech/html.png' },
                { name: 'CSS3', icon: '/tech/css.png' },
                { name: 'JavaScript', icon: '/tech/javascript.png' },
            ],
        },
    ],
    en: [
        {
            company: 'Krakodlew S.A',
            description:
                'In the company during my internship, I learned JavaScript, helped repair computers, and familiarized myself with server management.',
            image: '/company/krakodlew.png',
            technologies: [
                { name: 'HTML5', icon: '/tech/html.png' },
                { name: 'CSS3', icon: '/tech/css.png' },
                { name: 'JavaScript', icon: '/tech/javascript.png' },
            ],
        },
    ],
};

const Experience = () => {
    const { language } = useLanguage();
    const currentExperiences = experiences[language];

    return (
        <section
            id="experience"
            className="py-12 px-4 bg-gradient-to-b from-darkBlue to-gray-800"
        >
            <h2 className="text-3xl text-cyan-400 text-center font-bold mb-8">
                {language === 'pl' ? 'Doświadczenie' : 'Experience'}
            </h2>
            <div className="flex flex-col items-center">
                {currentExperiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-darkBlue rounded-lg shadow-lg overflow-hidden w-full md:w-2/3 lg:w-1/2 mb-6"
                    >
                        <div className="relative w-full h-64 bg-gray-900 flex justify-center items-center">
                            <Image
                                src={exp.image}
                                alt={exp.company}
                                width={300}
                                height={150}
                                style={{ objectFit: 'contain' }}
                                className="rounded-t-lg"
                                priority
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white text-center">
                                {exp.company}
                            </h3>
                            <p className="text-lightGray mt-2 text-center">
                                {exp.description}
                            </p>
                            <div className="flex justify-center gap-3 mt-4 flex-wrap">
                                {exp.technologies.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className="flex items-center gap-2 bg-gray-700 px-2 py-1 rounded-md"
                                    >
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={24}
                                            height={24}
                                            title={tech.name}
                                        />
                                        <span className="text-sm text-white">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;