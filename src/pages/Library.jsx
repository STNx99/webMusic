import { useState } from 'react';

const sampleSongs = [
  {
    id: 1,
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    image: 'https://i.scdn.co/image/ab67616d00001e02258b3a580a4b88cd6b740a2b',
  },
  {
    id: 2,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image: 'https://i.scdn.co/image/ab67616d00001e025ea0df4d1e66cfd9c1e4ecdc',
  },
  {
    id: 3,
    title: 'Dance Monkey',
    artist: 'Tones And I',
    image: 'https://i.scdn.co/image/ab67616d00001e0288438e5335ccbd8f84c42c6d',
  },
];

export default function Library() {
  const [songs, setSongs] = useState(sampleSongs);

  const handleRemove = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🎵 Kho nhạc đã lưu</h1>

        {songs.length === 0 ? (
          <p className="text-gray-400">Bạn chưa lưu bài hát nào.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {songs.map((song) => (
              <div
                key={song.id}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
              >
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{song.title}</h2>
                <p className="text-gray-400">{song.artist}</p>
                <div className="mt-4 flex justify-between">
                  <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded text-sm">
                    Play
                  </button>
                  <button
                    onClick={() => handleRemove(song.id)}
                    className="text-red-400 hover:text-red-500 text-sm"
                  >
                    Xoá
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
