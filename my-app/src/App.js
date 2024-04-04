import React, { useState } from 'react';
import './App.css';

function App() {
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan atau kirim data ke server
    alert(`Tujuan: ${destination}, Deskripsi: ${description}`);
    // Reset form setelah submit
    setDestination('');
    setDescription('');
  };

  return (
    <div className="App">
      <nav>
        <div className="logo">Website Pariwisata</div>
        <ul className="nav-links">
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Destinasi</a></li>
          <li><a href="#">Tentang Kami</a></li>
          {/* Tambahkan menu navigasi lainnya di sini */}
        </ul>
      </nav>
      <header>
        <h1>Selamat Datang di Website Pariwisata</h1>
        <p>Temukan destinasi pariwisata yang menakjubkan di seluruh dunia!</p>
      </header>
      <main>
        <section className="destination-form">
          <h2>Tambah Destinasi Baru</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Tujuan:
              <input type="text" value={destination} onChange={handleDestinationChange} />
            </label>
            <label>
              Deskripsi:
              <textarea value={description} onChange={handleDescriptionChange} />
            </label>
            <button type="submit">Tambah Destinasi</button>
          </form>
        </section>
        <section className="featured-destinations">
          <h2>Destinasi Unggulan</h2>
          <p>Ini adalah beberapa destinasi populer yang kami rekomendasikan:</p>
          <ul>
            <li>Samosir/Indonesia - Kepingan Surga</li>
            <li>Bali, Indonesia - Surga Tropis</li>
            <li>SIbea-bea/ Samosir -Patung Yesus terbesar</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Website Pariwisata. Dibuat dengan ❤️ oleh Lasro</p>
      </footer>
    </div>
  );
}

export default App;
