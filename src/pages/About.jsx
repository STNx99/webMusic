export default function About() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">🎶 Giới thiệu về DeWeb Music</h1>
          
          <p className="text-lg text-gray-300 mb-6">
            DeWeb Music là một nền tảng phát nhạc trực tuyến, được xây dựng với đam mê dành cho âm nhạc và công nghệ. Chúng tôi sử dụng API từ Spotify để mang đến cho bạn trải nghiệm nghe nhạc mượt mà, hiện đại và đa dạng.
          </p>
  
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <h2 className="text-2xl font-semibold mb-2">🔧 Công nghệ sử dụng</h2>
              <ul className="list-disc list-inside text-gray-300">
                <li>ReactJS + TailwindCSS</li>
                <li>NodeJS (ExpressJS)</li>
                <li>MongoDB</li>
                <li>Spotify Developer API</li>
                <li>Docker (triển khai dễ dàng)</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-2">📌 Mục tiêu</h2>
              <ul className="list-disc list-inside text-gray-300">
                <li>Giao diện đẹp, dễ dùng, giống Spotify</li>
                <li>Hỗ trợ đề xuất nhạc theo sở thích</li>
                <li>Chạy nhạc và hiển thị thông tin nhạc</li>
                <li>Lưu trữ các bài hát yêu thích</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 text-center">
            <p className="text-gray-400">© 2025 DeWeb Music. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }
  