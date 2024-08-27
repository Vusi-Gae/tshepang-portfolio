"use client";

import {
    FaPython, 
    FaJs, 
    FaReact, 
    FaNodeJs
} from 'react-icons/fa';

import { SiFlask, SiDjango, SiMysql, SiTailwindcss} from "react-icons/si"

// about data
const about = {
    title: 'About me',
    description:
    'I am deeply passionate about both the artistry of software development and the science of geospatial analysis, seamlessly merging the digital realm with the spatial world.',
    info: [
        {
            fieldName:  "Name",
            fieldvalue: "Tshepang Gaeatlholwe"
        },
        {
            fieldName: "Phone",
            fieldvalue: ":(+27) 74 2619 042"
        },
        {
            fieldName: "GIS experience",
            fieldvalue: "5+ Years"
        },
        {
            fieldName: "Dev experience",
            fieldvalue: "0"
        },
        {
            fieldName: "Nationality",
            fieldvalue: "South African"
        },
        {
            fieldName: "Email",
            fieldvalue: "vusigae@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldvalue: "Available"
        },
        {
            fieldName: "Langauge",
            fieldvalue: "English, SeTswana"
        },
    ],
};

// experience data

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "With 5 years as a Geospatial Technician and a solid foundation in spatial analysis, I am now eager to apply my technical skills and enthusiasm to grow in software development.",
    items: [
        {
            company: "Woolpert Africa",
            position: "Geo-Tech III",
            duration: "2020 - Present"
        },
        {
            company: "Information Decision Systems",
            position: "Geo-Tech Intern",
            duration: "2019 (09 - 12)"
        },
        {
            company: "Council for RSA Industrialist",
            position: "Energy Researcher",
            duration: "2019 (02 - 08)"
        },
        {
            company: "University of Johannesburg",
            position: "GeoInformatics Tutor",
            duration: "2018 - 2019"
        },
        {
            company: "University of Johannesburg",
            position: "Cartography Tutor",
            duration: "2018"
        },
        {
            company: "University of Johannesburg",
            position: "Pedology Tutor",
            duration: "2017"
        },
    ],
};

// education data

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Driven by an insatiable curiosity, I revel in the pursuit of knowledge across disciplines",
    items: [
        {
            institution: "University of Johannesburg",
            degree: "Geography and Anthropology",
            duration: "2015 - 2017"
        },
        {
            institution: "University of Johannesburg",
            degree: "Hons in Geography (Geoinformatics)",
            duration: "2018"
        },
        {
            institution: "University of Johannesburg",
            degree: "Masters in Geography (Geoinformatics)",
            duration: "2022 - 2024"
        },
        {
            institution: "University of Johannesburg",
            degree: "PhD Energy Studies",
            duration: "2022 - 2024"
        },
        {
            institution: "University of Johannesburg",
            degree: "Software Engineering (Backend)",
            duration: "2023 - 2024"
        },
    ],
};

const skills = {
    title: "My Skills",
    description: "Passionate about mastering diverse skills. I thrive on blending technical expertise with creative problem-solving to drive innovation.",
    SkillList: [
        {
            icon: < FaPython />, 
            name: "python"
        },
        {
            icon: < FaJs />, 
            name: "javascipt"
        },
        {
            icon: < FaReact />, 
            name: "react.js"
        },
        {
            icon: < FaNodeJs />, 
            name: "node.js"
        },
        {
            icon: < SiFlask />, 
            name: "flask"
        },
        {
            icon: < SiDjango />, 
            name: "django"
        },
        {
            icon: < SiMysql />, 
            name: "mysql"
        },
        {
            icon: < SiTailwindcss />, 
            name: "tailwaindcss"
        },

    ]
};

import{ Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { delay, motion } from 'framer-motion';


const Resume = () => {
    return (
        <motion.div initial={{opacity: 0}} 
        animate={{
            opacity: 1, 
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}

            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        > 
            <div className='container mx-auto'>
                <Tabs 
                    defaultValue='experience' 
                    className='flex flex-col xl:flex-row gap-[60px]'
            >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] xl:text-left text-center'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>
                                {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className='bg-[#232329] h-[184px] py-6 px-[10px] rounded-xl justify-center items-center flex flex-col gap-1'
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px]'>
                                                        {item.position}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                            </li>
                                            )
                                            
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                        <div className='flex flex-col gap-[30px] xl:text-left text-center'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>
                                {education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className='bg-[#232329] h-[184px] py-6 px-[10px] rounded-xl justify-center items-center flex flex-col gap-1'
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center'>
                                                        {item.degree}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                            </li>
                                            )
                                            
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.SkillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent 
                            value="about" 
                            className="w-full text-center xl:text-left"
                        >
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldvalue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;