import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
        duration: 0.8
      }
    }
  };

  const nameVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 60,
        duration: 1.2
      }
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="container mx-auto px-6 text-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="p-8 md:p-12">
          {/* Name Section */}
          <motion.div variants={nameVariants} className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl">
              <span className="inline-block aurora-silver-white-text">
                Saksham
              </span>
              <span className="inline-block ml-4 aurora-silver-white-text">
                Bhatia
              </span>
            </h1>
          </motion.div>

          {/* Title Section */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xl md:text-2xl lg:text-3xl text-black dark:text-gray-300">
              <span className="inline-block">
                Software
              </span>
              <span className="inline-block ml-2">
                Developer
              </span>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I build web applications and AI solutions that solve real problems. 
              From voice assistants to video calling apps, I enjoy creating useful tools that people actually use.
            </p>
          </motion.div>

          {/* Buttons Section */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <MagneticButton 
              variant="outline"
              size="lg" 
              className="relative overflow-hidden group bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 border-0"
              onClick={() => scrollToSection('#projects')}
              magneticStrength={0.4}
            >
              <span className="relative z-10">View My Work</span>
            </MagneticButton>
            
            <MagneticButton 
              variant="outline" 
              size="lg"
              className="group bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 border-0"
              onClick={() => scrollToSection('#contact')}
              magneticStrength={0.3}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </MagneticButton>
          </motion.div>

          {/* Social Links Section */}
          <motion.div variants={itemVariants} className="flex gap-6 justify-center mb-12">
            {[
              { icon: Github, href: "https://github.com/saksham2602", color: 'hover:text-green-400' },
              { icon: Linkedin, href: "https://www.linkedin.com/in/saksham-bhatia-932aba25a/", color: 'hover:text-blue-400' },
              { icon: Mail, href: "mailto:bhatiasaksham26@gmail.com", color: 'hover:text-red-400' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`p-3 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 ${social.color} group border-0`}
                whileHover={{ 
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={() => scrollToSection('#about')}
              className="p-2 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm border-0 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-6 h-6 text-black dark:text-white" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}