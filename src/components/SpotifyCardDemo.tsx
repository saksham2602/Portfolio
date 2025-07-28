import { useState } from 'react';
import { motion } from 'framer-motion';
import SpotifyCard from './SpotifyCard';

const SpotifyCardDemo = () => {
  const [currentSong, setCurrentSong] = useState(0);
  
  const songs = [
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      currentTime: "2:15",
      totalTime: "5:55",
      progress: 37,
      isPlaying: true
    },
    {
      title: "Hotel California",
      artist: "Eagles",
      currentTime: "1:42",
      totalTime: "6:30",
      progress: 26,
      isPlaying: true
    },
    {
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      currentTime: "4:18",
      totalTime: "8:02",
      progress: 53,
      isPlaying: false
    },
    {
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      currentTime: "0:45",
      totalTime: "5:56",
      progress: 13,
      isPlaying: true
    }
  ];

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Spotify Card Demo
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Click the button below to cycle through different songs
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSong}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Next Song
          </motion.button>
        </motion.div>

        <motion.div
          key={currentSong}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <SpotifyCard 
            songTitle={songs[currentSong].title}
            artist={songs[currentSong].artist}
            currentTime={songs[currentSong].currentTime}
            totalTime={songs[currentSong].totalTime}
            progress={songs[currentSong].progress}
            isPlaying={songs[currentSong].isPlaying}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto border border-green-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Current Song Info</h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-green-400">Title:</span> {songs[currentSong].title}</p>
              <p><span className="text-green-400">Artist:</span> {songs[currentSong].artist}</p>
              <p><span className="text-green-400">Progress:</span> {songs[currentSong].progress}%</p>
              <p><span className="text-green-400">Status:</span> {songs[currentSong].isPlaying ? 'Playing' : 'Paused'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpotifyCardDemo; 