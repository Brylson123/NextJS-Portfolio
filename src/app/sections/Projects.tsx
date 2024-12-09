'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: 'HeadHunter',
        description: 'Projekt wspomagający HR w znajdowaniu kandydatów do pracy.',
        link: 'https://github.com/Brylson123/MegaK-grupa3-frontend',
        image: '/projects/hh.png',
        demoLink: null,
        technologies: [
            { name: 'React', icon: '/tech/reactjs.png' },
            { name: 'NestJS', icon: '/tech/nestjs.png' },
            { name: 'TypeScript', icon: '/tech/typescript.png' },
        ],
    },
    {
        title: 'uClothes',
        description: 'Aplikacja do tworzenia i zarządzania ofertami sprzedaży.',
        link: 'https://github.com/Brylson123/NextJS-uChlothes-frontend',
        image: '/projects/shop.png',
        demoLink: 'https://uclothes.pl/',
        technologies: [
            { name: 'Java', icon: '/tech/java.png' },
            { name: 'Next.js', icon: '/tech/next.png' },
            { name: 'MySql', icon: '/tech/mysql.png' },
            { name: 'Spring Boot', icon: '/tech/spring.png' },
        ],
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-12 px-4 lg:px-20 bg-gradient-to-b from-darkBlue to-gray-800"
        >
            <h2 className="text-3xl text-lightGray text-center mb-8">Projekty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-darkBlue rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="relative w-full h-64 bg-gray-900 flex justify-center items-center">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                style={{ objectFit: "contain" }}
                                className="rounded-md"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white">
                                {project.title}
                            </h3>
                            <p className="text-lightGray mt-2">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-white hover:text-cyan-400"
                            >
                                <div className="flex items-center">
                                    <Image
                                        src="/icons/github.png"
                                        alt="GitHub"
                                        width={24}
                                        height={24}
                                    />
                                    <span className="ml-2">GitHub</span>
                                </div>
                            </a>
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block text-white hover:text-cyan-400 ml-2"
                                >
                                    <div className="flex items-center">
                                        <Image
                                            src="/icons/demo.png"
                                            alt="Demo"
                                            width={24}
                                            height={24}
                                        />
                                        <span className="ml-2">{project.demoLink}</span>
                                    </div>
                                </a>
                            )}
                            <div className="flex flex-wrap gap-3 mt-4">
                                {project.technologies.map((tech, techIndex) => (
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

export default Projects;