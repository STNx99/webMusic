import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await api.post('/users/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        alert('Đăng ký thành công! Bạn có thể đăng nhập.');
        setIsRegistering(false);
      } else {
        const res = await api.post('/users/login', {
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem('token', res.data.token);
        alert('Đăng nhập thành công!');
        navigate('/player');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Có lỗi xảy ra');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? 'Đăng ký tài khoản' : 'Đăng nhập'}
        </h2>

        {isRegistering && (
          <div className="mb-4">
            <label className="block mb-1">Tên người dùng</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 hover:bg-green-600 rounded font-semibold"
        >
          {isRegistering ? 'Đăng ký' : 'Đăng nhập'}
        </button>

        <p className="mt-4 text-center text-gray-400">
          {isRegistering ? 'Đã có tài khoản?' : 'Chưa có tài khoản?'}{' '}
          <button
            type="button"
            className="text-green-400 hover:underline"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </p>
      </form>
    </div>
  );
}
