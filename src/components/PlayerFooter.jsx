import { useEffect, useRef, useState } from 'react';
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
} from 'react-icons/fa';

export default function PlayerFooter({ song, onNext, onPrev }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (song) {
      setCurrentTime(0);
      setIsPlaying(true);
    }
  }, [song]);

  const handleSeek = (e) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (onNext) onNext(); // tự động chuyển bài nếu có callback
  };

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const s = String(Math.floor(sec % 60)).padStart(2, '0');
    return `${min}:${s}`;
  };

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-4 py-3 flex flex-col md:flex-row md:items-center justify-between z-50 shadow-md transition-colors duration-300">
      {/* Hidden audio */}
      <audio
        ref={audioRef}
        src={song.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Song info */}
      <div className="flex items-center gap-4 w-full md:w-1/3 mb-3 md:mb-0">
        <img
          src={song.image}
          alt={song.title}
          className="w-14 h-14 object-cover rounded-md shadow"
        />
        <div>
          <h2 className="text-sm md:text-base font-semibold">{song.title}</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">{song.artist}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col w-full md:w-1/3 items-center">
        <div className="flex gap-5 items-center mb-2">
          <button onClick={onPrev} className="text-gray-500 hover:text-green-500 text-lg">
            <FaStepBackward />
          </button>
          <button
            className="p-3 bg-green-500 hover:bg-green-600 rounded-full text-white"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={onNext} className="text-gray-500 hover:text-green-500 text-lg">
            <FaStepForward />
          </button>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={song.duration || 180}
            value={currentTime}
            onChange={handleSeek}
            className="w-full accent-green-500"
          />
          <span className="text-xs text-gray-400">{formatTime(song.duration || 180)}</span>
        </div>
      </div>

      {/* Volume */}
      <div className="hidden md:flex w-1/3 justify-end pr-4 items-center gap-2">
        <FaVolumeUp className="text-gray-500" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24 accent-green-500"
        />
      </div>
    </div>
  );
}
