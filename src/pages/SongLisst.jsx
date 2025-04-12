import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axiosInstance.get('/songs');
        setSongs(response.data);
      } catch (err) {
        console.error('Lỗi khi lấy danh sách nhạc:', err);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div>
      <h2>Danh sách nhạc</h2>
      <ul>
        {songs.map((song) => (
          <li key={song._id}>{song.title} - {song.artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
