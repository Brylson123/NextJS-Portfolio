'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
    const { language } = useLanguage();
    const [text, setText] = useState('');
    const fullText = language === 'pl'
        ? 'Jestem studentem drugiego roku informatyki stosowanej, poszukuję nowych doświadczeń, które wzbogacą mój rozwój, aby w przyszłości tworzyć narzędzia pomagające ludziom w codziennej pracy. Lubię pracować w zespole i integrować się z innymi. Aktualnie rozwijam swoje umiejętności w NextJS oraz Javie.'
        : 'I am a second-year applied computer science student seeking new experiences to enhance my growth so that in the future I can create tools that help people in their daily work. I enjoy working in a team and integrating with others. I am currently developing my skills in NextJS and Java.';

    useEffect(() => {
        let index = 0;
        setText('');
        const typingInterval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30);
        return () => clearInterval(typingInterval);
    }, [fullText]);

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-darkBlue"
        >
            <div className="text-center px-6 lg:px-20">
                <h2 className="text-5xl font-bold text-cyan-400 mb-6">
                    {language === 'pl' ? 'HEJ!' : 'HELLO!'}
                </h2>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                    {text}
                </p>
            </div>
        </section>
    );
};

export default About;
