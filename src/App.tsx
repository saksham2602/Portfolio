import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { RotatingTechTools } from './components/RotatingTechTools';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { CursorFollower } from './components/CursorFollower';
import { LoadingScreen } from './components/LoadingScreen';
import Aurora from './components/Aurora';
import FloatingDockDemo from './components/floating-dock-demo';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Lenis from 'lenis';

function AppContent() {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Global Aurora Background */}
      <div className="fixed inset-0 z-0">
        <Aurora
          colorStops={isDark ? ["#3A29FF", "#FF94B4", "#FF3232"] : ["#6366F1", "#8B5CF6", "#EC4899"]}
          blend={0.5}
          amplitude={isDark ? 1.0 : 0.6}
          isDark={isDark}
        />
      </div>

      {/* Dark overlay for better content readability */}
      <div className={`fixed inset-0 ${isDark ? 'bg-black/20' : 'bg-white/10'} z-5`} />

      <CursorFollower />

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <RotatingTechTools />
        <Projects />
        <CurrentlyPlaying />
        <Contact />
      </main>

      {/* Floating Dock Navigation */}
      <FloatingDockDemo />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-50"
        style={{ scaleX: 0, transformOrigin: "0%" }}
        initial={{ scaleX: 0 }}
      />

      {/* Floating Action Button for Quick Contact */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      >
        <motion.button
          className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg flex items-center justify-center text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💬
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}