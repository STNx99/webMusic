import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Player from './pages/Player';
import Library from './pages/Library';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/player" element={<Player />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
}
