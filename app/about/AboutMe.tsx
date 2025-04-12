'use client';

import Image, { StaticImageData } from 'next/image';
import background from '../assest/background.png';
import avatar2 from '../assest/avatar2.png';
import aiIcon from '../assest/ai.png';
import psIcon from '../assest/ps.png';
import aeIcon from '../assest/ae.png';
import prIcon from '../assest/pr.png';
import idIcon from '../assest/id.png';
import figmaIcon from '../assest/figma.png';
import { motion } from 'framer-motion';

const iconMap: Record<string, StaticImageData> = {
    ai: aiIcon,
    ps: psIcon,
    ae: aeIcon,
    pr: prIcon,
    id: idIcon,
    figma: figmaIcon,
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

type SkillCardProps = {
    title: string;
    description?: string;
    items?: string[];
    icons?: string[];
};

export default function AboutMe() {
    return (
        <>
            <motion.section
                className="bg-cover bg-center min-h-screen text-black py-12 px-6"
                style={{ backgroundImage: `url(${background.src})` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.4 }}
            >
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-[auto_122px_1fr] items-center">
                        <motion.div
                            className="relative w-[420px] h-[500px]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.4 }}
                        >
                            <Image
                                src={avatar2}
                                alt="Avatar"
                                fill
                                className="object-cover rounded-[32px] shadow-[8px_8px_0px_0px_rgba(20,19,15,1)]"
                            />
                            <span className="w-[190px] h-[52px] absolute top-[-20px] left-[-24px] bg-[#DE7D08] text-white rounded-full text-base font-bevietnam font-bold shadow-md flex items-center justify-center text-center">
                                11th August 2004
                            </span>
                            <span className="w-[190px] h-[52px] absolute bottom-[-20px] right-[-24px] bg-[#DE7D08] text-white rounded-full text-base font-bevietnam font-bold shadow-md flex items-center justify-center text-center">
                                Vietnamese
                            </span>
                        </motion.div>

                        <div className="hidden md:block" />

                        <motion.div
                            className="max-w-2xl"
                            initial="hidden"
                            whileInView="visible"
                            transition={{ staggerChildren: 0.2 }}
                            viewport={{ once: false, amount: 0.4 }}
                        >
                            <motion.h1
                                className="text-[80px] md:text-[96px] font-extrabold tracking-tight font-sans leading-[115px] whitespace-nowrap"
                                variants={{ hidden: {}, visible: {} }}
                            >
                                <motion.span
                                    className="block"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    NGỌC THẢO
                                </motion.span>
                                <motion.span
                                    className="block"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    TRƯƠNG
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                className="text-base font-[Montserrat] text-[#14130F] mt-[106px] leading-7"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: false, amount: 0.4 }}
                            >
                                {"Hi, I’m Ngọc Thảo — a graphic designer specializing in branding and UI/UX. "}
                                {"Illustration might not be my strongest skill, but I thrive on creative thinking. "}
                                {"I enjoy exploring ideas through the lens of customer psychology and brand values, "}
                                {"turning insights into designs that feel both timely and true to each brand."}
                                <br /><br />
                                {"Below is a bit more about me — let’s get to know each other better."}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Education */}
            <div className="mt-24">
                <SectionTitle text="education." />
                <div className="max-w-6xl mx-auto px-6">
                    <motion.p
                        className="text-base leading-[24px] font-alt mb-12 mt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Here’s a look at my academic background and the certifications I’ve collected along the way.
                    </motion.p>
                    <div className="flex flex-col gap-14 pl-10">
                        {[
                            {
                                title: '2022 / Achieved an IELTS score of 7.0',
                                desc: '',
                                height: 120,
                            },
                            {
                                title: '2022 - Present / Studied at FPT University',
                                desc: 'Student majoring in Digital Art & Graphic Design',
                                details: ['Recognized as an honorable student for six consecutive semesters.'],
                                height: 190,
                            },
                            {
                                title: 'May 2024 / Won 2nd Place at Our Space 8: ONEIRIC competition',
                                desc: 'Won Second Prize in the Animation category',
                                height: 160,
                            },
                            {
                                title: 'Sep 2024 / Completed a Coursera Specialization in UI/UX Design',
                                desc: '',
                                height: 0,
                            },
                        ].map((edu, i) => (
                            <motion.div
                                key={i}
                                className={`relative ${i !== 3 ? 'pb-8' : ''}`}
                                initial="hidden"
                                whileInView="show"
                                variants={item}
                                viewport={{ once: true }}
                            >
                                {edu.height > 0 && (
                                    <div
                                        className="absolute left-[-30px] top-1.5 w-[2px] bg-black"
                                        style={{ height: `${edu.height}px` }}
                                    />
                                )}
                                <div className="absolute left-[-38px] top-1.5 w-4 h-4 rounded-full bg-black z-10" />
                                <h3 className="font-semibold font-alt text-[20px]">{edu.title}</h3>
                                {edu.desc && (
                                    <p className="font-alt font-semibold text-base leading-9">{edu.desc}</p>
                                )}
                                {edu.details && (
                                    <ul className="list-disc ml-5 mt-1 text-sm leading-relaxed">
                                        {edu.details.map((d, idx) => (
                                            <li key={idx} className="font-alt text-base leading-8">{d}</li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Languages */}
            <div className="mt-[66px]">
                <SectionTitle text="language." />
            </div>
            <motion.div
                className="max-w-6xl mx-auto px-6 mt-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <TagList
                    tags={[
                        { label: 'Vietnamese', level: 'Native' },
                        { label: 'English', level: 'Fluent' },
                        { label: 'German', level: 'Basic' },
                        { label: 'Japanese', level: 'Basic' },
                    ]}
                />
            </motion.div>

            {/* Technical Skills */}
            <div className="mt-[178px]">
                <WideSectionTitle text="technical skills." />
            </div>
            <motion.p
                className="max-w-3xl px-6 mt-6 text-base font-alt font-normal leading-relaxed text-left ml-30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                I am confident using most design tools and often mix and match them depending on the project.
                This flexible approach helps me speed up the process and push the quality of my work even further.
            </motion.p>
            <motion.div
                className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
                viewport={{ once: true }}
            >
                <SkillCard title="CODING SKILLS" description="Basic knowledge of:" items={['HTML', 'CSS']} />
                <SkillCard title="SOFTWARE SKILLS" icons={['ai', 'ps', 'ae', 'pr', 'id', 'figma']} />
                <SkillCard
                    title="PERSONAL SKILLS"
                    items={['Leading', 'Teamwork', 'Creativity', 'Communication', 'Time management', 'Layout', 'Copywriting', 'Adaptive']}
                />
            </motion.div>

            {/* Experience */}
            <div className="mt-[200px]">
                <SectionTitle text="experience." />
            </div>

            <motion.div
                className="w-full flex justify-center relative"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.5 }}
            >
                <div className="flex flex-col gap-14 relative w-full max-w-3xl px-4 sm:px-6 md:px-0">
                    {/* 1. Video Editor */}
                    <motion.div className="relative pb-8" variants={item}>
                        <div className="absolute -left-10 top-1.5 w-[2px] h-[320px] bg-black" />
                        <div className="absolute -left-[46px] top-1.5 w-4 h-4 rounded-full bg-black z-10" />
                        <h3 className="font-semibold font-alt text-[20px]">
                            2020 - 2023 <span className="font-alt font-semibold">/ Video Editor</span>
                        </h3>
                        <p className="font-semibold font-alt text-base leading-6">Tieng Viet Giau Dep organization</p>
                        <ul className="list-disc ml-5 mt-1 text-sm leading-relaxed">
                            <li className="font-alt text-base leading-8">
                                Selected and arranged video clips, visuals, and audio to align with the content’s theme.
                            </li>
                            <li className="font-alt text-base leading-8">
                                Researched topics and structured video scripts to match the intended tone and format.
                            </li>
                            <li className="font-alt text-base leading-8">
                                Handled end-to-end editing for <strong>more than 15 videos</strong>, including cutting,
                                transitions, sound mixing, and adding visual elements.
                            </li>
                        </ul>
                    </motion.div>

                    {/* 2. Webtoon Editor */}
                    <motion.div className="relative pb-8" variants={item}>
                        <div className="absolute -left-10 top-1.5 w-[2px] h-[250px] bg-black" />
                        <div className="absolute -left-[46px] top-1.5 w-4 h-4 rounded-full bg-black z-10" />
                        <h3 className="font-semibold font-alt text-[20px]">
                            2023 - 2024 <span className="font-alt font-semibold">/ Freelance Webtoon Editor</span>
                        </h3>
                        <p className="font-semibold font-alt text-base leading-6">Nevi Digital</p>
                        <ul className="list-disc ml-5 mt-1 text-sm leading-relaxed">
                            <li className="font-alt text-base leading-8">
                                Successfully completed <strong>over 30 comic chapters</strong>.
                            </li>
                            <li className="font-alt text-base leading-8">
                                Handled tasks such as speech font selection, bubble formatting, text placement, and redraws.
                            </li>
                        </ul>
                    </motion.div>

                    {/* 3. Freelance Designer */}
                    <motion.div className="relative" variants={item}>
                        <div className="absolute -left-[46px] top-1.5 w-4 h-4 rounded-full bg-black z-10" />
                        <h3 className="font-semibold font-alt text-[20px]">
                            Jan 2025 - Mar 2025 <span className="font-alt font-semibold">/ Freelance Designer</span>
                        </h3>
                        <p className="font-semibold font-alt text-base leading-6">Minh Dung Coffee Co., Ltd.</p>
                        <ul className="list-disc ml-5 mt-1 text-sm leading-relaxed">
                            <li className="font-alt text-base leading-6">
                                Took on the role of <strong>team leader</strong>, overseeing the brand identity system.
                            </li>
                            <li className="font-alt text-base leading-6">
                                Designed the logo, packaging and website for the brand.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
            <br/>
            <br/>
            <br/>

        </>
    );
}

function SectionTitle({ text }: { text: string }) {
    return (
        <motion.h2
            className="h-[140px] bg-[#DE7D08] text-white text-[100px] leading-[1] font-extrabold font-sans lowercase flex items-center rounded-md shadow-lg mb-6 max-w-[750px] pl-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
        >
            <span className="pl-40">{text}</span>
        </motion.h2>
    );
}

function WideSectionTitle({ text }: { text: string }) {
    return (
        <motion.h2
            className="h-[140px] bg-[#DE7D08] text-white text-[100px] leading-[116px] font-extrabold font-sans lowercase flex items-center justify-start rounded-md shadow-lg ml-0 mb-6 max-w-[975px] pl-25"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
        >
            <span className="pl-6">{text}</span>
        </motion.h2>
    );
}

function TagList({ tags }: { tags: { label: string; level: string }[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {tags.map((tag) => (
                <motion.div
                    key={tag.label}
                    className="space-y-[20px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-6 py-2 border-[1.5px] border-black rounded-full font-alt font-semibold text-[20px] leading-[30px]">
                        {tag.label}
                    </span>
                    <div className="font-alt font-normal text-sm text-black">{tag.level}</div>
                </motion.div>
            ))}
        </div>
    );
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, items, icons }) => {
    const isPersonalSkills = items?.includes('Leading');

    return (
        <motion.div
            className="border-2 border-black rounded-xl p-6 text-center space-y-4"
            variants={item}
        >
            <h3 className="font-alt font-bold text-sm">{title}</h3>
            {description && <p className="text-basic font-alt">{description}</p>}
            {items && (
                <ul
                    className={`font-alt text-sm ${isPersonalSkills
                        ? 'grid grid-cols-2 gap-y-1 justify-center'
                        : 'flex flex-col items-start space-y-1 mx-auto w-fit'
                        }`}
                >
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}
            {icons && (
                <div className="grid grid-cols-3 gap-4 justify-center items-center">
                    {icons.map((icon, i) => (
                        <Image
                            key={i}
                            src={iconMap[icon]}
                            alt={icon}
                            width={50}
                            height={50}
                            className="object-contain mx-auto"
                        />
                    ))}
                </div>
            )}
        </motion.div>
    );
};
