import { useState } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

export default function MiniPlayer({ song, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!song) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-20 md:right-20 bg-gray-800 rounded-2xl shadow-lg flex items-center justify-between px-4 py-3 z-50 backdrop-blur-md border border-gray-700">
      {/* Song info */}
      <div className="flex items-center gap-4">
        <img src={song.image} alt={song.title} className="w-14 h-14 rounded-md object-cover" />
        <div>
          <h2 className="text-white font-semibold text-base">{song.title}</h2>
          <p className="text-sm text-gray-400">{song.artist}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white text-lg">
          <FaStepBackward />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className="text-gray-400 hover:text-white text-lg">
          <FaStepForward />
        </button>
      </div>

      {/* Close button */}
      <button onClick={onClose} className="ml-4 text-gray-400 hover:text-red-400 text-xl font-bold">
        ×
      </button>
    </div>
  );
}
