
import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from './ui/card';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { FaRocket, FaCode, FaUsers, FaCalendarAlt } from 'react-icons/fa';

export function About() {
  const sectionRef = React.useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with modern frameworks and best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that enhance user experience and engagement.'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, accessibility, and search engine performance.'
    },
    {
      icon: Users,
      title: 'Technical Consulting',
      description: 'Providing technical guidance and strategic advice for your digital projects.'
    }
  ];

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="pt-12 pb-24 bg-muted/30"
      initial={{ opacity: 0, y: 60 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl mb-6 text-foreground font-bold drop-shadow-sm"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              I'm a passionate full-stack developer with a love for creating innovative solutions. 
              My journey in tech started with curiosity and has evolved into a career of building 
              applications that make a difference.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.h3 
                className="text-2xl mb-8"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
              >
                Experience
              </motion.h3>
              <div className="space-y-6">
                <motion.div 
                  className="border-l-2 border-primary pl-6 pb-6 relative bg-white/3 backdrop-blur-sm border-0 rounded-lg p-4"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-0"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">2024 - Present</span>
                  </div>
                  <h4 className="text-lg mb-2">Web Developer | Tarunya </h4>
                  <p className="text-muted-foreground">
                    Currently building the digital storefront for Tarunya, my mom's startup, crafting a seamless e-commerce experience from design to deployment. 
                    Leading full-stack development with custom themes, product management, and payment systems.
                    Transforming her vision into a beautiful, user-friendly online shopping destination.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="border-l-2 border-primary pl-6 pb-6 relative bg-white/3 backdrop-blur-sm border-0 rounded-lg p-4"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-0"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">Sept 2024 - Nov 2024</span>
                  </div>
                  <h4 className="text-lg mb-2">Lead Frontend Developer | Skill Guru Foundation</h4>
                  <p className="text-muted-foreground">
                    Built responsive UIs using React.js, HTML, and CSS, enhancing site performance and user engagement.
                    Collaborated with cross-functional teams to deliver high-quality web applications.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <motion.h3 
                className="text-2xl mb-8"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              >
                Achievements
              </motion.h3>
              <div className="space-y-4">
                {[
                  { number: '8+', label: 'Projects Completed', icon: <FaRocket size={24} /> },
                  { number: '20K+', label: 'Lines of Code', icon: <FaCode size={24} /> },
                  { number: '5+', label: 'Happy Clients', icon: <FaUsers size={24} /> },
                  { number: '2+', label: 'Years Experience', icon: <FaCalendarAlt size={24} /> },
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    className="flex items-center gap-4 p-4 bg-white/3 backdrop-blur-sm border-0 rounded-lg"
                    initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -90 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 30, scale: 0.8, rotateX: -90 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                  >
                    <motion.span 
                      className="text-2xl"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.1, type: "spring", stiffness: 100 }}
                    >
                      {achievement.icon}
                    </motion.span>
                    <div>
                      <motion.div 
                        className="text-2xl font-bold text-primary"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1, type: "spring", stiffness: 100 }}
                      >
                        {achievement.number}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            className="mt-16"
          >
            <motion.h3 
              className="text-2xl text-center mb-12"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
            >
              What I Do
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30, scale: 0.8, rotateY: -90 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 30, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                                     <Card className="p-6 text-center group hover:shadow-xl transition-all duration-300 bg-white/3 backdrop-blur-sm border-0">
                    <motion.div
                      className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                    >
                      <service.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.h4 
                      className="text-lg font-semibold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1, type: "spring", stiffness: 100 }}
                    >
                      {service.title}
                    </motion.h4>
                    <motion.p 
                      className="text-muted-foreground text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.1, type: "spring", stiffness: 100 }}
                    >
                      {service.description}
                    </motion.p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}