import { motion } from 'framer-motion';
import SpotifyCard from './SpotifyCard';
import DailyWorkCard from './DailyWorkCard';

const CurrentlyPlaying = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground drop-shadow-sm">
              Personal Space
            </h2>
            <p className="text-sm md:text-base text-green-400 mb-4 font-medium">
              Daily Work & Current Vibes
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              A glimpse into my daily work routine and what's currently playing. From coding sessions to music that keeps the flow going.
            </p>
          </motion.div>

          {/* Main content grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto"
          >
            {/* Daily Work Cards - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center h-full mb-4 lg:mb-0"
            >
              <div className="text-center mb-6 lg:mb-8 w-full max-w-md mx-auto flex-shrink-0">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  Daily Work
                </h3>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base">
                  My daily work routine captured in moments
                </p>
              </div>
              
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center -ml-4 sm:ml-0">
                <DailyWorkCard 
                  images={[
                    '/IMG-20250728-WA0001.jpg',
                    '/IMG-20250728-WA0002.jpg',
                    '/IMG-20250728-WA0003.jpg',
                    '/IMG-20250728-WA0004.jpg'
                  ]}
                />
              </div>
              
              {/* Floating elements around the cards */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -left-4 w-6 h-6 bg-primary/30 rounded-full"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -right-4 w-8 h-8 bg-accent/30 rounded-full"
              />
            </motion.div>

            {/* Spotify Card - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center h-full mt-40 lg:mt-0"
            >
              <div className="text-center mb-6 lg:mb-8 w-full max-w-md mx-auto flex-shrink-0">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  Currently Playing
                </h3>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base">
                  What's keeping me motivated today
                </p>
              </div>
              
              <div className="relative mt-4 lg:mt-8">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full scale-150" />
                
                {/* Spotify Card */}
                <div className="relative z-10">
                  <SpotifyCard 
                    songTitle="I Ain't Worried"
                    artist="OneRepublic"
                    currentTime="2:18"
                    totalTime="4:26"
                    progress={52}
                    isPlaying={true}
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-30"
                />
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-20"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyPlaying; 