import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);
  const [isInWindow, setIsInWindow] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Optimized spring config for smoother desktop movement
  const springConfig = useMemo(() => ({ 
    damping: 25, 
    stiffness: 200,
    mass: 0.5
  }), []);
  
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Throttled mouse move handler for better desktop performance
  const throttledMouseMove = useCallback((() => {
    let ticking = false;
    return (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          cursorX.set(e.clientX - 2);
          cursorY.set(e.clientY - 2);
          setIsVisible(true);
          ticking = false;
        });
        ticking = true;
      }
    };
  })(), [cursorX, cursorY]);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Hide cursor when mouse leaves the website (body or window)
    const handleSiteMouseLeave = () => setIsInWindow(false);
    const handleSiteMouseEnter = () => setIsInWindow(true);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [data-cursor-hover]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('mousedown', handleMouseDown);
      el.addEventListener('mouseup', handleMouseUp);
    });

    window.addEventListener('mousemove', throttledMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleSiteMouseLeave);
    window.addEventListener('mouseenter', handleSiteMouseEnter);
    document.body.addEventListener('mouseleave', handleSiteMouseLeave);
    document.body.addEventListener('mouseenter', handleSiteMouseEnter);

    // Hide cursor when tab is not active
    const handleVisibility = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleSiteMouseLeave);
      window.removeEventListener('mouseenter', handleSiteMouseEnter);
      document.body.removeEventListener('mouseleave', handleSiteMouseLeave);
      document.body.removeEventListener('mouseenter', handleSiteMouseEnter);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('mousedown', handleMouseDown);
        el.removeEventListener('mouseup', handleMouseUp);
      });
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [cursorX, cursorY, throttledMouseMove]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999] animate-gpu"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isClicking ? 0.9 : isHovering ? 1.3 : 1,
        opacity: isVisible && isTabActive && isInWindow ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.15 },
        scale: { duration: 0.1, ease: "easeOut" },
      }}
    >
      {/* Optimized SVG cursor for desktop */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full drop-shadow-lg absolute inset-0"
        style={{ willChange: 'transform' }}
      >
        {/* Arrow shadow/outline */}
        <path
          d="M2 2L20 12L2 22L8 12L2 2Z"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Main arrow fill */}
        <path
          d="M2 2L20 12L2 22L8 12L2 2Z"
          fill="white"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        {/* Arrow tip highlight */}
        <path
          d="M2 2L8 12L2 22"
          fill="rgba(255,255,255,0.8)"
          stroke="none"
        />
      </svg>
    </motion.div>
  );
}