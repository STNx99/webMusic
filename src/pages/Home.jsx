import { Link } from 'react-router-dom';
import TrackCard from '../components/TrackCard';

const dummyTracks = [
  {
    id: 1,
    name: 'Blinding Lights',
    artist: 'The Weeknd',
    image: 'https://i.scdn.co/image/ab67616d0000b27393b714e6a3b48b01d1f3f3fa',
  },
  {
    id: 2,
    name: 'bad guy',
    artist: 'Billie Eilish',
    image: 'https://i.scdn.co/image/ab67616d0000b2738f66d816b7d6e9bbee0ecf30',
  },
  {
    id: 3,
    name: 'Levitating',
    artist: 'Dua Lipa',
    image: 'https://i.scdn.co/image/ab67616d0000b273f8855e35bd05d96ce3e72a63',
  },
  {
    id: 4,
    name: 'As It Was',
    artist: 'Harry Styles',
    image: 'https://i.scdn.co/image/ab67616d0000b27359f525ef9f6f6c292dfbfc59',
  },
];

export default function Home() {
  const handlePlay = (track) => {
    console.log('▶ Playing:', track);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">🎧 DeWeb Music</h1>
        <nav className="space-x-6 text-lg">
          <Link to="/about" className="hover:text-green-400">Giới thiệu</Link>
          <Link to="/login" className="hover:text-green-400">Đăng nhập</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-8 md:px-20 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Khám phá thế giới âm nhạc của bạn</h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
          Trải nghiệm nghe nhạc không giới hạn với DeWeb Music – nơi mọi giai điệu đều là cảm xúc!
        </p>
        <Link
          to="/player"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Bắt đầu nghe nhạc
        </Link>
      </section>

      {/* Features */}
      <section className="px-8 md:px-20 py-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <h3 className="text-2xl font-bold mb-2">🎶 Giao diện đẹp</h3>
          <p className="text-gray-400">Thiết kế hiện đại, giống Spotify, dễ sử dụng.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <h3 className="text-2xl font-bold mb-2">⚡ Nhanh & mượt</h3>
          <p className="text-gray-400">Phản hồi tức thì, phát nhạc mượt mà.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <h3 className="text-2xl font-bold mb-2">🔗 Kết nối Spotify</h3>
          <p className="text-gray-400">Sử dụng API chính chủ từ Spotify để phát nhạc chất lượng cao.</p>
        </div>
      </section>

      {/* Popular Tracks */}
      <section className="px-8 md:px-20 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">🔥 Nhạc phổ biến</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dummyTracks.map((track) => (
            <TrackCard key={track.id} track={track} onPlay={handlePlay} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6">
        © 2025 DeWeb Music — Made with 💚 by bạn
      </footer>
    </div>
  );
}
