import { useState } from 'react';
import { motion } from 'framer-motion';

interface DailyWorkCardProps {
  images?: string[];
}

const DailyWorkCard = ({ images = [] }: DailyWorkCardProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use only IMG files, no screenshots
  const defaultImages = [
    '/IMG-20250728-WA0001.jpg',
    '/IMG-20250728-WA0002.jpg', 
    '/IMG-20250728-WA0003.jpg',
    '/IMG-20250728-WA0004.jpg',
    '/IMG-20250728-WA0001.jpg', // Reuse first image for 5th card
    '/IMG-20250728-WA0002.jpg', // Reuse second image for 6th card
    '/IMG-20250728-WA0003.jpg'  // Reuse third image for 7th card
  ];

  const cardImages = images.length > 0 ? images : defaultImages;

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container relative w-full h-full">
        {/* Individual cards with infinite scroll animation */}
        <motion.div 
          className={`absolute h-40 w-28 sm:h-48 sm:w-32 md:h-56 md:w-40 bg-muted/60 backdrop-blur-sm border-4 border-white/70 border-b-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg transform origin-bottom-left scale-100 transition-all duration-300 overflow-hidden cursor-pointer ${
            activeCard === 0 ? 'z-50' : 'z-10'
          }`}
          animate={!isHovered && activeCard === null ? {
            rotate: [-54, -54, -54, -54, -54],
            translateX: [-12, -12, -12, -12, -12],
            translateY: [-6, -6, -6, -6, -6],
            scale: [1, 1.05, 1, 1.05, 1],
          } : {
            rotate: -54,
            translateX: activeCard === 0 ? -18 : -12,
            translateY: activeCard === 0 ? -12 : -6,
            scale: activeCard === 0 ? 1.4 : 1.1,
          }}
          transition={!isHovered && activeCard === null ? {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          } : {
            duration: 0.4,
            ease: "easeOut"
          }}
          whileHover={{ 
            rotate: -54,
            translateX: -12,
            translateY: -6,
            scale: 1.1,
          }}
          onClick={() => handleCardClick(0)}
        >
          <img 
            src={cardImages[0] || '/IMG-20250728-WA0001.jpg'} 
            alt="Daily work 1"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        <motion.div 
          className={`absolute h-40 w-28 sm:h-48 sm:w-32 md:h-56 md:w-40 bg-muted/60 backdrop-blur-sm border-4 border-white/70 border-b-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg transform origin-bottom-left scale-100 transition-all duration-300 overflow-hidden cursor-pointer ${
            activeCard === 1 ? 'z-50' : 'z-10'
          }`}
          animate={!isHovered && activeCard === null ? {
            rotate: [-36, -36, -36, -36, -36],
            translateX: [-9, -9, -9, -9, -9],
            translateY: [-4, -4, -4, -4, -4],
            scale: [1, 1.05, 1, 1.05, 1],
          } : {
            rotate: -36,
            translateX: activeCard === 1 ? -14 : -9,
            translateY: activeCard === 1 ? -9 : -4,
            scale: activeCard === 1 ? 1.4 : 1.1,
          }}
          transition={!isHovered && activeCard === null ? {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          } : {
            duration: 0.4,
            ease: "easeOut"
          }}
          whileHover={{ 
            rotate: -36,
            translateX: -9,
            translateY: -4,
            scale: 1.1,
          }}
          onClick={() => handleCardClick(1)}
        >
          <img 
            src={cardImages[1] || '/IMG-20250728-WA0002.jpg'} 
            alt="Daily work 2"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        <motion.div 
          className={`absolute h-56 w-40 bg-muted/80 backdrop-blur-sm border-4 border-white/90 border-b-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg transform origin-bottom-left scale-100 transition-all duration-300 overflow-hidden cursor-pointer ${
            activeCard === 2 ? 'z-50' : 'z-10'
          }`}
          animate={!isHovered && activeCard === null ? {
            rotate: [-18, -18, -18, -18, -18],
            translateX: [-10, -10, -10, -10, -10],
            translateY: [-6, -6, -6, -6, -6],
            scale: [1, 1.05, 1, 1.05, 1],
          } : {
            rotate: -18,
            translateX: activeCard === 2 ? -20 : -10,
            translateY: activeCard === 2 ? -12 : -6,
            scale: activeCard === 2 ? 1.4 : 1.1,
          }}
          transition={!isHovered && activeCard === null ? {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          } : {
            duration: 0.4,
            ease: "easeOut"
          }}
          whileHover={{ 
            rotate: -18,
            translateX: -10,
            translateY: -6,
            scale: 1.1,
          }}
          onClick={() => handleCardClick(2)}
        >
          <img 
            src={cardImages[2] || '/IMG-20250728-WA0003.jpg'} 
            alt="Daily work 3"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        <motion.div 
          className={`absolute h-56 w-40 bg-muted/80 backdrop-blur-sm border-4 border-white/90 border-b-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg transform origin-bottom-left scale-100 transition-all duration-300 overflow-hidden cursor-pointer ${
            activeCard === 3 ? 'z-50' : 'z-10'
          }`}
          animate={!isHovered && activeCard === null ? {
            rotate: [0, 0, 0, 0, 0],
            translateX: [0, 0, 0, 0, 0],
            translateY: [-4, -4, -4, -4, -4],
            scale: [1, 1.05, 1, 1.05, 1],
          } : {
            rotate: 0,
            translateX: 0,
            translateY: activeCard === 3 ? -20 : -4,
            scale: activeCard === 3 ? 1.4 : 1.1,
          }}
          transition={!isHovered && activeCard === null ? {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          } : {
            duration: 0.4,
            ease: "easeOut"
          }}
          whileHover={{ 
            rotate: 0,
            translateX: 0,
            translateY: -4,
            scale: 1.1,
          }}
          onClick={() => handleCardClick(3)}
        >
          <img 
            src={cardImages[3] || '/IMG-20250728-WA0004.jpg'} 
            alt="Daily work 4"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        <motion.div 
          className={`absolute h-56 w-40 bg-muted/80 backdrop-blur-sm border-4 border-white/90 border-b-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg transform origin-bottom-left scale-100 transition-all duration-300 overflow-hidden cursor-pointer ${
            activeCard === 4 ? 'z-50' : 'z-10'
          }`}
          animate={!isHovered && activeCard === null ? {
            rotate: [18, 18, 18, 18, 18],
            translateX: [10, 10, 10, 10, 10],
            translateY: [-6, -6, -6, -6, -6],
            scale: [1, 1.05, 1, 1.05, 1],
          } : {
            rotate: 18,
            translateX: activeCard === 4 ? 20 : 10,
            translateY: activeCard === 4 ? -12 : -6,
            scale: activeCard === 4 ? 1.4 : 1.1,
          }}
          transition={!isHovered && activeCard === null ? {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          } : {
            duration: 0.4,
            ease: "easeOut"
          }}
          whileHover={{ 
            rotate: 18,
            translateX: 10,
            translateY: -6,
            scale: 1.1,
          }}
          onClick={() => handleCardClick(4)}
        >
          <img 
            src={cardImages[4] || '/IMG-20250728-WA0001.jpg'} 
            alt="Daily work 5"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        <motion.div 
          className={`absolute h-56 w-40 bg-muted/80 backdrop-blur-sm border-4 border-white/90 border-b-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg transform origin-bottom-left scale-100 transition-all duration-300 overflow-hidden cursor-pointer ${
            activeCard === 5 ? 'z-50' : 'z-10'
          }`}
          animate={!isHovered && activeCard === null ? {
            rotate: [36, 36, 36, 36, 36],
            translateX: [15, 15, 15, 15, 15],
            translateY: [-8, -8, -8, -8, -8],
            scale: [1, 1.05, 1, 1.05, 1],
          } : {
            rotate: 36,
            translateX: activeCard === 5 ? 25 : 15,
            translateY: activeCard === 5 ? -15 : -8,
            scale: activeCard === 5 ? 1.4 : 1.1,
          }}
          transition={!isHovered && activeCard === null ? {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          } : {
            duration: 0.4,
            ease: "easeOut"
          }}
          whileHover={{ 
            rotate: 36,
            translateX: 15,
            translateY: -8,
            scale: 1.1,
          }}
          onClick={() => handleCardClick(5)}
        >
          <img 
            src={cardImages[5] || '/IMG-20250728-WA0002.jpg'} 
            alt="Daily work 6"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
        
        <motion.div 
          className={`absolute h-56 w-40 bg-muted/80 backdrop-blur-sm border-4 border-white/90 border-b-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg transform origin-bottom-left scale-100 transition-all duration-300 overflow-hidden cursor-pointer ${
            activeCard === 6 ? 'z-50' : 'z-10'
          }`}
          animate={!isHovered && activeCard === null ? {
            rotate: [54, 54, 54, 54, 54],
            translateX: [20, 20, 20, 20, 20],
            translateY: [-10, -10, -10, -10, -10],
            scale: [1, 1.05, 1, 1.05, 1],
          } : {
            rotate: 54,
            translateX: activeCard === 6 ? 30 : 20,
            translateY: activeCard === 6 ? -20 : -10,
            scale: activeCard === 6 ? 1.4 : 1.1,
          }}
          transition={!isHovered && activeCard === null ? {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          } : {
            duration: 0.4,
            ease: "easeOut"
          }}
          whileHover={{ 
            rotate: 54,
            translateX: 20,
            translateY: -10,
            scale: 1.1,
          }}
          onClick={() => handleCardClick(6)}
        >
          <img 
            src={cardImages[6] || '/IMG-20250728-WA0003.jpg'} 
            alt="Daily work 7"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DailyWorkCard; 