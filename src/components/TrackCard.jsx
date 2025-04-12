import { FaPlay } from 'react-icons/fa';

export default function TrackCard({ track, onPlay }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
      onClick={() => onPlay(track)}
    >
      <div className="relative">
        <img
          src={track.image}
          alt={track.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg">
            <FaPlay />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {track.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {track.artist}
        </p>
      </div>
    </div>
  );
}
