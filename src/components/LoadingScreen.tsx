import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    'Initializing portfolio...',
    'Loading components...',
    'Compiling creativity...',
    'Deploying innovation...',
    'Optimizing experience...',
    'Ready to showcase!'
  ];

  const codeLines = [
    'import { Creativity } from "./skills";',
    'import { Innovation } from "./projects";',
    'import { Experience } from "./background";',
    '',
    'const Portfolio = () => {',
    '  const developer = new Developer({',
    '    name: "Saksham Bhatia",',
    '    passion: "unlimited",',
    '    skills: [...allTechnologies]',
    '  });',
    '',
    '  return <Amazing>{developer}</Amazing>;',
    '};',
    '',
    'export default Portfolio;'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        const stepIndex = Math.floor(newProgress / 17);
        
        if (stepIndex !== currentStep && stepIndex < steps.length) {
          setCurrentStep(stepIndex);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
        }
        
        return Math.min(newProgress, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [currentStep, onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Code Editor Mockup */}
          <motion.div
            className="mb-12 mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card border rounded-lg overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm text-muted-foreground ml-4">Portfolio.tsx</div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm bg-card min-h-[300px]">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center min-h-[1.5em]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: progress > (index * 7) ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-muted-foreground mr-4 w-6 text-right">
                      {index + 1}
                    </span>
                    <span className={line.includes('import') ? 'text-purple-400' : 
                                   line.includes('const') || line.includes('return') ? 'text-blue-400' :
                                   line.includes('"') ? 'text-green-400' :
                                   line.includes('//') ? 'text-gray-400' :
                                   'text-foreground'}>
                      {line}
                    </span>
                    {progress > (index * 7) && index === Math.floor(progress / 7) && (
                      <motion.div
                        className="w-2 h-5 bg-primary ml-1"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Loading Progress */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <motion.h2 
                className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {steps[currentStep]}
              </motion.h2>
              <span className="text-sm text-muted-foreground font-mono">
                {progress.toFixed(0)}%
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Terminal Output */}
          <motion.div
            className="bg-black/90 rounded-lg p-4 font-mono text-left max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-green-400 text-sm">
              <div className="flex items-center gap-2 mb-2">
                <span>$</span>
                <span>npm run build</span>
                {progress > 80 && (
                  <motion.div
                    className="w-2 h-4 bg-green-400"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </div>
              {progress > 20 && <div className="text-gray-300">Building for production...</div>}
              {progress > 40 && <div className="text-gray-300">Optimizing bundle...</div>}
              {progress > 60 && <div className="text-gray-300">Generating static files...</div>}
              {progress > 80 && <div className="text-green-400">✓ Build completed successfully!</div>}
              {isComplete && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 mt-2"
                >
                  🚀 Portfolio deployed and ready!
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}