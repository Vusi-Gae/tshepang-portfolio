"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{
                    opacity: 1, 
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="relative lg:left-[40px] left-[20px] md:left-[30px]"
            >
                {/* Circle */}
                <motion.svg 
                    className="absolute inset-0 right-[-20px] lg:right-[-40px] w-[250px] md:w-[300px] lg:w-[450px] h-[250px] md:h-[300px] lg:h-[506px]" 
                    fill="transparent" 
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="253" 
                        cy="253" 
                        r="250" 
                        stroke="#00ff99" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        strokeLinejoin="round" 
                        initial={{ strokeDasharray: "24 10 00" }}
                        animate={{
                            strokeDasharray: ["15 20 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>

                {/* Image */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{
                        opacity: 1, 
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="relative w-[270px] md:w-[298px] lg:w-[498px] h-[270px] md:h-[298px] lg:h-[498px] rounded-full overflow-hidden"
                >
                    <Image 
                        src="/assets/Photo3.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-cover"
                        style={{transform: 'scale(1.50)', width: '100%', height: '100%', objectFit: 'cover'}}             
                    />   
                </motion.div>
            </motion.div>
        </div>
    );      
};

export default Photo;
