"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";
import { ScrollArea } from '@/components/ui/scroll-area';

const devProjects = [
    {
        num: '01',
        category: 'game development',
        title: 'project 1',
        description: 'A maze game featuring a modular design, 3D environment simulation, and intuitive keyboard controls',
        stack: [{ name: "C programming" }, { name: "SDL2" }, { name: "Raycasting" }],
        Image: '/assets/work/Maze-Game.png',
        live: "https://drive.google.com/file/d/1kZZf_UvUjVOzacDinGtx7geHqSCwG5WG/view?usp=sharing",
        github: "https://github.com/Vusi-Gae/The-Maze/tree/master/The-Maze",
    },
    {
        num: '02',
        category: 'backend',
        title: 'project 2',
        description: 'A facial recognition system for dynamic attendance management and seamless user interaction',
        stack: [{ name: "Python" }, { name: "numpy" }, { name: "OpenCV" }, { name: "OpenCV" }],
        Image: '/assets/work/fr_image.png',
        live: "https://drive.google.com/file/d/19caXGtOoD9OMCuhcVy7umlFQCPGyY71D/view?usp=sharing",
        github: "https://github.com/Vusi-Gae/Real-Time-Facial-Recognition-Attendance-System",
    },
    {
        num: '03',
        category: 'game development',
        title: 'project 3',
        description: 'An arcade-style Street Fighter game, featuring custom characters and fluid animations.',
        stack: [{ name: "python" }, { name: "pygame" }],
        Image: '/assets/work/f_image.png',
        live: "https://drive.google.com/file/d/1oCg2BABTH8Bk3ZTTN1NXYD4Dw_NU_h0y/view?usp=sharing",
        github: "https://github.com/Vusi-Gae/Street-Fighter-Style-Fighting-Game-in-Python/tree/main",
    },
];

const gisProjects = [
    {
        num: '01',
        description: 'Wind energy resources in South Africa',
        image: '/assets/work/map1.png',
    },
    {
        num: '02',
        description: 'Phase 1 and 2 Renewable Energy Development Zones',
        image: '/assets/work/map2.png',
    },
    {
        num: '03',
        description: 'South African Biomes',
        image: '/assets/work/map3.png',
    },
    {
        num: '04',
        description: 'Reclassified South Africa’s solar radiation layer',
        image: '/assets/work/map4.png',
    },
    {
        num: '05',
        description: 'Reclassified South Africa’s power transmission lines layer',
        image: '/assets/work/map5.png',
    },
    {
        num: '06',
        description: 'Reclassified distance (0 – 50 km) from the roads',
        image: '/assets/work/map6.png',
    },
    {
        num: '07',
        description: 'Reclassified distance (2 – 50 km) from the residential areas',
        image: '/assets/work/map7.png',
    },
    {
        num: '08',
        description: 'Reclassified slope layer from < 1 to 11 % distance',
        image: '/assets/work/map8.png',
    },
    {
        num: '09',
        description: 'Suitable land use/land-cover for solar power development in South Africa',
        image: '/assets/work/map9.png',
    },
    {
        num: '10',
        description: 'Geographic locations of the currently operating and planned power plants in South Africa',
        image: '/assets/work/map10.png',
    },
    {
        num: '11',
        description: 'The distribution of suitable lands for solar farms in South African provinces',
        image: '/assets/work/map11.png',
    },
    {
        num: '12',
        description: 'South African unsuitable areas for wind farm development',
        image: '/assets/work/map12.png',
    },
    {
        num: '13',
        description: 'Suitability scale and unsuitable regions for wind power generation in South Africa',
        image: '/assets/work/map13.png',
    },
    {
        num: '14',
        description: 'Land area suitable for wind farms in the South African provinces',
        image: '/assets/work/map14.png',
    },
    {
        num: '15',
        description: 'Suitable and unsuitable regions for wind farms in South African provinces',
        image: '/assets/work/map15.png',
    },
    {
        num: '16',
        description: 'Excellent areas for solar power within the REDZs in South Africa',
        image: '/assets/work/map16.png',
    },
    {
        num: '17',
        description: 'Excellent areas for wind power within the REDZs in South Africa',
        image: '/assets/work/map17.png',
    },
    {
        num: '18',
        description: 'Biomes located within the designated REDZs',
        image: '/assets/work/map18.png',
    },
    {
        num: '19',
        description: 'Potential biome impact of solar power development by 2050 in South Africa',
        image: '/assets/work/map19.png',
    },
    {
        num: '20',
        description: 'Potential biome impact of wind power by 2050',
        image: '/assets/work/map20.png',
    },
];


const researchProjects = {
    description: "A relentless seeker of truth, ever driven by the hunger to expand the boundaries of knowledge, one page at a time.",
    items: [
        {
            num: "01",
            title: "Evaluation of siting of renewable energy developement zones in South Africa",
            image: "/assets/work/pub_1.png",
            fullText: "https://drive.google.com/file/d/1mf5y_v4VwR_qX6VhM-JMqldxPpdzRSe1/view?usp=sharing",
        },
        {
            num: "02",
            title: "The land use impact of renewable energy sprawl in South Africa",
            image: "/assets/work/pub_2.png",
            fullText: "https://drive.google.com/file/d/1wnNfRnF5kf66FKUJwLs21GHW3rvhOfY7/view?usp=sharing",
        },
        {
            num: "03",
            title: "A GIS-based approach for the evaluation of land-use impact of energy scenarios in South Africa for 2050",
            image: "/assets/work/pub_3.png",
            fullText: "https://drive.google.com/file/d/1mKh3zHHFTPFTB2DpCVJJRUwDcA-kiESp/view?usp=sharing",
        },
        {
            num: "04",
            title: "2019 BRICS youth energy outlook",
            image: "/assets/work/pub_4.png",
            fullText: "https://drive.google.com/file/d/1_6pd9sKmYnvRn9lQyT1V6w8zirZILqSj/view?usp=sharing",
        },
    ],
};
    
const Work = () => {
    const [project, setProject] = useState(devProjects[0]);
    const [isTabsVisible, setIsTabsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const handleSlideChange = (swiper, projects) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setIsTabsVisible(false);
            } else {
                // Scrolling up
                setIsTabsVisible(true);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col py-12 xl:px-0 relative"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="devProjects" className="relative">
                    <TabsList
                        className={`fixed top-[calc(100px+1rem)] left-0 right-0 z-20 flex justify-center items-center gap-8 bg-white/100 py-2 transition-transform duration-300 ${isTabsVisible ? 'translate-y-0' : '-translate-y-full'}`}
                    >
                        <TabsTrigger value="devProjects">Dev Projects</TabsTrigger>
                        <TabsTrigger value="gisProjects">Geospatial Projects</TabsTrigger>
                        <TabsTrigger value="researchProjects">Research Papers</TabsTrigger>
                    </TabsList>

                    <TabsContent value="devProjects" className="pt-7">
                        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                                <div className="flex flex-col gap-[30px] h-[50px]">
                                    <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                        {project.num}
                                    </div>
                                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                        {project.category}
                                    </h2>
                                    <p className=" text-white/60">{project.description}</p>
                                    <ul className="flex gap-4 capitalize">
                                        {project.stack.map((item, index) => (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="border border-white/20"></div>
                                    <div className="flex items-center gap-4">
                                        <a href={project.live}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Live project</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </a>
                                        <a href={project.github}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>GitHub repository</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                           </TooltipProvider>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-[50%]">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    className="xl:h-[520px] mb-2"
                                    onSlideChange={(swiper) => handleSlideChange(swiper, devProjects)}
                                >
                                    {devProjects.map((project, index) => (
                                        <SwiperSlide key={index} className="w-full">
                                            <div className="h-[400px] w-[600px] relative group flex justify-center items-center bg-primary">
                                                <div className="absolute top-0 top-0 bottom-0 left-0 bg-black/10 z-10"></div>
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={project.Image}
                                                        fill
                                                        className="object-contain"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-4 z-20 w-full justify-between xl:w-max xl:justify-none"
                                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center items-center transition-all"
                                    />
                                </Swiper>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="gisProjects" className="pt-4">
                        <ScrollArea className="h-[calc(100vh-150px)]">
                            <div className="relative container mx-auto mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 justify-center">
                                    {gisProjects.map((project, index) => (
                                        <div key={index} className="bg-white shadow-md rounded-md overflow-hidden relative group w-full h-[500px]">
                                            {/* Image Section */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-contain transition-opacity duration-300 group-hover:opacity-50"
                                                    alt={project.description}
                                                />
                                                {/* Overlay Section */}
                                                <div className="absolute inset-0 flex justify-center bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <p className="text-black text-sm text-center mt-4 mb-4">{project.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollArea>
</TabsContent>
                            
                    <TabsContent value="researchProjects" className="pt-4">
                        <ScrollArea className="h-[calc(100vh-150px)]">
                            <div className="relative container mx-auto mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
                                    {researchProjects.items.map((project, index) => (
                                        <div key={index} className="bg-white shadow-md rounded-md overflow-hidden relative group w-full h-[500px]">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt={project.title}
                                                />
                                            </div>
                                            <div className="absolute bottom-4 right-4 flex items-center">
                                                {/* Full Text arrow icon */}
                                                <a href={project.fullText} target="_blank" rel="noopener noreferrer">
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group">
                                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>Full Text</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollArea>
                    </TabsContent>
                </Tabs>
            </div>
        </motion.section>
    );
};

export default Work;