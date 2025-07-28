
import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const sectionRef = React.useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'JARVIS - YouTube Voice Assistant',
      description: 'A voice- and gesture-controlled assistant for YouTube with 95% command execution accuracy. Features custom NLP-based intent recognition and gesture detection with 90% precision.',
      image: '/unnamed.webp',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'SpeechRecognition', 'MediaPipe'],
      github: 'https://github.com/saksham2602/JARVIS---Youtube-Assistant'
    },
    {
      title: 'Green Thumb - Gardening Website',
      description: 'A modern gardening website with plant care guides, product showcase, and interactive features. Features dark/light mode, smooth animations, and comprehensive plant encyclopedia.',
      image: '/Screenshot 2025-07-26 182920.png',
      tech: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
      github: 'https://github.com/saksham2602/Green-Thumb',
      demo: 'https://greenth.netlify.app'
    },
    {
      title: 'Tarunya - E-commerce Platform',
      description: 'Built a complete e-commerce solution for my mom\'s startup on Shopify, featuring custom theme development, product management, and seamless payment integration. Transformed her vision into a beautiful online shopping destination.',
      image: '/Screenshot 2025-07-27 123017.png',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'E-commerce', 'Payment Integration', 'UI/UX Design'],
      demo: 'https://tarunyaindia.com'
    },
    {
      title: 'ConnectLive - Video Calling App',
      description: 'A real-time, peer-to-peer video calling application built with WebRTC and Socket.IO. Features room management, screen sharing, text chat, and media controls with modern UI/UX.',
      image: '/Screenshot 2025-07-27 125746.png',
      tech: ['React.js', 'WebRTC', 'Socket.IO', 'Node.js', 'Express', 'TailwindCSS'],
      github: 'https://github.com/saksham2602/ConnectLive',
      demo: 'https://webrtc-frontend-yduf.onrender.com/'
    }
  ];

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Floating Space Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
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
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80, damping: 15 }}
              whileHover={{ 
                y: -3,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              A showcase of my recent work, featuring innovative solutions and creative approaches to complex problems.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="group"
                whileHover={{ 
                  y: -8,
                  rotateY: 2,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] bg-white/3 backdrop-blur-sm border-0">
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                      />
                      
                      {/* Enhanced overlay with better visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      
                      {/* Hover indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-white/10 backdrop-blur-sm rounded-full p-3 border-0"
                        >
                          <Eye className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Enhanced action buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors border-0"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors border-0"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <motion.h3 
                      className="text-xl mb-3 group-hover:text-primary transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2, type: "spring", stiffness: 100 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground mb-4 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2, type: "spring", stiffness: 100 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + techIndex * 0.05, ease: "easeOut" }}
                        >
                          <Badge variant="outline" className="text-xs bg-white/10 border-0 !border-0 text-foreground">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {project.github && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="group/btn border-0 bg-white/10 hover:bg-white/20 text-foreground"
                          >
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                              Source Code
                            </motion.a>
                          </Button>
                        </motion.div>
                      )}
                      {project.demo && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                        >
                          <Button
                            size="sm"
                            asChild
                            className="group/btn bg-primary/20 hover:bg-primary/30 text-foreground border-0"
                          >
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                              {project.title === 'Tarunya - E-commerce Platform' ? 'Live Website' : 'Live Demo'}
                            </motion.a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group border-0 bg-white/10 hover:bg-white/20 text-foreground backdrop-blur-md bg-white/20 dark:bg-black/20"
            >
              <motion.a
                href="https://github.com/saksham2602?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                View All Projects
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}