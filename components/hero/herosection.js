'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    src: "/img/hero2.png",
    title: "ऋतम्",
    color: "#fff",
    lines: [
      "'Ritam' (ऋतम्), finds its roots in Rig Veda. It originates from the root word *√ṛt* (ऋत्) in Sanskrit, which means 'to go', 'to move' or 'to fit'.",
      "It is derived from the verbal root ऋ (ṛ) combined with the suffix - am ( अम् ) to form the noun ऋतम्"
    ]
  },
  {
    src: "/img/hero3.png",
    title: "COSMIC ORDER",
    color: "#fff",
    lines: [
      "It reflects the idea of 'truth', 'order', and 'cosmic harmony'; symbolizing cosmic order",
      "The foundational principle of the existence of the Universe."
    ],
    customSize: true
  },
  {
    src: "/img/hero.jpg",
    title: "JUSTICE",
    color: "#fff",
    lines: [
      "It embodies and reflects harmony, integrity, infinity and the unwavering pursuit of righteousness, principles that form",
      "The cornerstone of Ritam Legal's commitment towards the rule of law and the administration of justice."
    ]
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const containerRef = useRef(null);

  // Handle slide changes
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIsChanging(true);
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        
        setTimeout(() => {
          setIsChanging(false);
        }, 500);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  // Variants for the text split animation
  const textContainerVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    enter: { opacity: 1 }
  };

  const titleVariants = {
    initial: { opacity: 0.3, scale: 1 },
    exit: { 
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5 }
    },
    enter: { 
      opacity: 0.3, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.7 }
    }
  };

  const upperBlockVariants = {
    initial: { opacity: 1, y: 0 },
    exit: { 
      opacity: 0,
      y: -50,
      transition: { duration: 0.6 }
    },
    enter: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.8 }
    }
  };

  const lowerBlockVariants = {
    initial: { opacity: 1, y: 0 },
    exit: { 
      opacity: 0,
      y: 50,
      transition: { duration: 0.6 }
    },
    enter: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.8 }
    }
  };

  const imageZoomVariants = {
    zoomIn: {
      scale: 1.1,
      transition: { duration: 10, ease: "easeInOut" }
    },
    zoomOut: {
      scale: 1,
      transition: { duration: 10, ease: "easeInOut" }
    }
  };

  const getVariantForLine = (idx, totalLines) => {
    const middlePoint = Math.floor(totalLines / 2);
    return idx < middlePoint ? upperBlockVariants : lowerBlockVariants;
  };

  const getTitleClass = (img) => {
    const baseClasses = "font-bold text-center w-full opacity-30";
  
    if (img.title === "ऋतम्") {
      return `${baseClasses} text-[5rem] xs:text-[6rem] sm:text-[7rem] md:text-8xl lg:text-9xl xl:text-[14rem]`;
    }
  
    if (img.customSize) {
      return `${baseClasses} text-[4rem] xs:text-[5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`;
    }
  
    return `${baseClasses} text-[4rem] xs:text-[5rem] sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl`;
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[600px] overflow-hidden"
    >
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 flex flex-col md:flex-row justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div 
            className="absolute inset-0"
            initial="zoomOut"
            animate={i === index ? "zoomIn" : "zoomOut"}
            variants={imageZoomVariants}
          >
            <Image
              src={img.src}
              alt="Hero Image"
              fill
              style={{ objectFit: "cover" }}
              priority={i === 0}
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-transparent md:to-black/50"></div>
          
          <div className="absolute inset-0 md:right-0 md:inset-auto md:w-1/2 md:h-full text-white flex justify-center items-center px-4 sm:px-6 md:px-8">
            <motion.div
              className="relative w-full h-full flex justify-center items-center"
              variants={textContainerVariants}
              initial="initial"
              animate={i === index ? "enter" : "exit"}
            >
              <div className="relative flex justify-center items-center w-full">
                <motion.h1
                  className={getTitleClass(img)}
                  style={{ 
                    color: "#fff",
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                  variants={titleVariants}
                  initial="initial"
                  animate={i === index ? "enter" : "exit"}
                >
                  {img.title}
                </motion.h1>
                
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center max-w-md px-2 sm:px-4">
                    {img.lines.map((line, idx) => (
                      <motion.p
                        key={idx}
                        className="text-sm sm:text-base md:text-lg lg:text-[1.3rem] my-1 font-semibold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]"
                        variants={getVariantForLine(idx, img.lines.length)}
                        initial="initial"
                        animate={i === index ? "enter" : "exit"}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}