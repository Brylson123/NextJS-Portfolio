'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
    { name: 'HTML', icon: '/tech/html.png' },
    { name: 'CSS', icon: '/tech/css.png' },
    { name: 'JavaScript', icon: '/tech/javascript.png' },
    { name: 'React', icon: '/tech/reactjs.png' },
    { name: 'Angular', icon: '/tech/angular.png' },
    { name: 'Next', icon: '/tech/next.png' },
    { name: 'Node.js', icon: '/tech/nodejs.png' },
    { name: 'NestJS', icon: '/tech/nestjs.png' },
    { name: 'TypeScript', icon: '/tech/typescript.png' },
    { name: 'Git', icon: '/tech/git.png' },
    { name: 'Java', icon: '/tech/java.png' },
    { name: 'SpringBoot', icon: '/tech/spring.png' },
    { name: 'PostgresSQL', icon: '/tech/postgresql.png' },
    { name: 'MySql', icon: '/tech/mysql.png' },
    { name: 'Insomnia', icon: '/tech/insomnia.png' },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-12 bg-darkBlue">
            <h2 className="text-3xl text-lightGray text-center mb-8">Tech Stack</h2>
            <div className="grid grid-cols-3 gap-6 px-4 sm:px-12">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center bg-vibrantBlue rounded-md p-4 shadow-md"
                    >
                        <div className="relative w-16 h-16">
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                fill
                                style={{ objectFit: "contain" }}
                                className="rounded-md"
                            />
                        </div>
                        <p className="mt-3 text-white text-sm">{tech.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
