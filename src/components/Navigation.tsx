import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ProfileModal } from './ProfileModal';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   setIsScrolled(latest > 100);
  // });

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href === '#home' ? 'body' : href);
    if (element) {
      const yOffset = href === '#home' ? 0 : -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Sleek Rounded Navigation Bar */}
          <motion.div
            className="w-full max-w-4xl mx-auto bg-black/20 backdrop-blur-xl rounded-full px-8 py-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              {/* Logo with Profile Picture */}
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <motion.button
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsProfileModalOpen(true)}
                >
                  <img
                    src="/profile-pic.jpg"
                    alt="Saksham Bhatia"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a colored background if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.style.backgroundColor = '#6366f1';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white font-bold text-sm">SB</div>';
                    }}
                  />
                </motion.button>
                <span className="text-xl font-bold text-white">Saksham Bhatia</span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white hover:text-gray-300 transition-colors relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Desktop Theme Toggle */}
              <div className="hidden md:flex items-center space-x-4">
                <ThemeToggle size="md" />
              </div>

              {/* Mobile Theme Toggle */}
              <div className="md:hidden flex items-center">
                <ThemeToggle size="sm" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </motion.nav>
  );
}