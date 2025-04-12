import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

export default function MiniPlayer({ song, onClose, onNext, onPrev }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (song) {
      setCurrentTime(0);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
  }, [song]);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (e) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (onNext) onNext(); // Tự động chuyển bài nếu có
  };

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const s = String(Math.floor(sec % 60)).padStart(2, '0');
    return `${min}:${s}`;
  };

  if (!song) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-20 md:right-20 bg-gray-800 rounded-2xl shadow-lg px-4 py-3 z-50 backdrop-blur-md border border-gray-700">
      <audio
        ref={audioRef}
        src={song.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Top row: info + controls */}
      <div className="flex items-center justify-between">
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
          <button
            className="text-gray-400 hover:text-white text-lg"
            onClick={onPrev}
            disabled={!onPrev}
          >
            <FaStepBackward />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            className="text-gray-400 hover:text-white text-lg"
            onClick={onNext}
            disabled={!onNext}
          >
            <FaStepForward />
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="ml-4 text-gray-400 hover:text-red-400 text-xl font-bold"
        >
          ×
        </button>
      </div>

      {/* Timeline */}
      <div className="mt-4">
        <input
          type="range"
          min="0"
          max={song.duration || 180}
          value={currentTime}
          onChange={handleSeek}
          className="w-full accent-green-500"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(song.duration || 180)}</span>
        </div>
      </div>
    </div>
  );
}
