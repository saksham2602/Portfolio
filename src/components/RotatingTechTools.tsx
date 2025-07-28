// import * as React from 'react';
import { useState, useRef, useLayoutEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from './ui/card';
import {
  SiJavascript, SiReact, SiFramer, SiFigma, SiMysql, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiPostman, SiNodedotjs, SiPython, SiTensorflow, SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export function RotatingTechTools() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const techTools = [
    { name: 'C++', icon: <SiCplusplus size={24} /> },
    { name: 'Java', icon: <FaJava size={24} /> },
    { name: 'JavaScript', icon: <SiJavascript size={24} /> },
    { name: 'React', icon: <SiReact size={24} /> },
    { name: 'Framer Motion', icon: <SiFramer size={24} /> },
    { name: 'Figma', icon: <SiFigma size={24} /> },
    { name: 'MySQL', icon: <SiMysql size={24} /> },
    { name: 'HTML', icon: <SiHtml5 size={24} /> },
    { name: 'CSS', icon: <SiCss3 size={24} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} /> },
    { name: 'Git', icon: <SiGit size={24} /> },
    { name: 'Postman', icon: <SiPostman size={24} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={24} /> },
    { name: 'Python', icon: <SiPython size={24} /> },
    { name: 'AI/ML', icon: <SiTensorflow size={24} /> },
  ];

  // Measure the width of the scrolling content
  useLayoutEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.scrollWidth / 2); // since we duplicate
    }
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl mb-4 text-foreground font-bold drop-shadow-sm">
          Tech Stack
        </h3>
        <p className="text-muted-foreground">
          Technologies and tools I work with
        </p>
      </motion.div>

      {/* Horizontal scrolling animation for all screen sizes */}
      <div className="relative overflow-hidden">
        {/* Minimal gradient overlays for subtle fade effect */}
        <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-20 h-full bg-gradient-to-r from-background/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-20 h-full bg-gradient-to-l from-background/20 to-transparent z-10 pointer-events-none" />

        {/* Seamless infinite scroll */}
        <motion.div
          className="flex gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4"
          style={{ x: 0 }}
          animate={{
            x: [0, -containerWidth],
          }}
          transition={{
            duration: hoveredCard ? 36 : 18,
            repeat: Infinity,
            ease: "linear",
          }}
          onMouseEnter={() => setHoveredCard(true)}
          onMouseLeave={() => setHoveredCard(false)}
        >
          {/* Duplicate the tech stack for seamless loop */}
          {[...techTools, ...techTools].map((tool, index) => (
            <motion.div
              key={`${tool.name}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="p-2 sm:p-3 md:p-4 bg-card/50 backdrop-blur-sm border-0 transition-all duration-300 min-w-[100px] sm:min-w-[120px] md:min-w-[150px] text-center group">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                  <div className="text-foreground">
                    {tool.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground text-center">{tool.name}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 