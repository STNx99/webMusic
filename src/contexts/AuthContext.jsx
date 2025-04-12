import { createContext, useState, useEffect, useContext } from 'react';

// Tạo context
const AuthContext = createContext();

// Custom hook để dùng dễ hơn
export const useAuth = () => useContext(AuthContext);

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Dữ liệu người dùng
  const [token, setToken] = useState(localStorage.getItem('token') || null); // Token từ localStorage

  // Khi có token, fetch thông tin user
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          logout(); // Token hết hạn hoặc lỗi => đăng xuất
        }
      } catch (err) {
        console.error('Fetch profile failed', err);
        logout();
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  // Đăng nhập
  const login = async (email, password) => {
    const res = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error('Email hoặc mật khẩu không đúng');
    }

    const data = await res.json();
    localStorage.setItem('token', data.token);
    setToken(data.token);
  };

  // Đăng xuất
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
