import { useEffect, useState } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

export default function PlayerFooter({ song }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 180; // 3 phút giả lập

  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => (prev < duration ? prev + 1 : duration));
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isPlaying]);

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const second = String(sec % 60).padStart(2, '0');
    return `${min}:${second}`;
  };

  const handleSeek = (e) => {
    setCurrentTime(Number(e.target.value));
  };

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-4 py-2 flex flex-col md:flex-row md:items-center justify-between z-50 transition-colors duration-300">
      {/* Song info */}
      <div className="flex items-center gap-4 w-full md:w-1/3">
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
      <div className="flex flex-col w-full md:w-1/3 items-center mt-2 md:mt-0">
        <div className="flex gap-4 items-center">
          <button className="text-gray-500 hover:text-green-500 text-lg">
            <FaStepBackward />
          </button>
          <button
            className="p-3 bg-green-500 hover:bg-green-600 rounded-full text-white"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="text-gray-500 hover:text-green-500 text-lg">
            <FaStepForward />
          </button>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-2 w-full mt-2">
          <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full accent-green-500"
          />
          <span className="text-xs text-gray-400">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Trống hoặc mở rộng thêm controls sau này */}
      <div className="hidden md:flex w-1/3 justify-end pr-4">
        {/* Thêm volume, queue, lyrics v.v. nếu cần */}
      </div>
    </div>
  );
}
