import { Link } from 'react-router-dom';

export default function Home() {
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

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6">
        © 2025 DeWeb Music — Made with 💚 by bạn
      </footer>
    </div>
  );
}
