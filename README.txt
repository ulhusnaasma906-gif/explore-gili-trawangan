WEBSITE MULTIMEDIA INTERAKTIF – GILI TRAWANGAN

File:
- index.html : struktur dan isi halaman
- style.css  : desain website
- script.js  : interaksi menu navigasi
- README.txt : petunjuk penggunaan

CARA MEMBUKA DI VISUAL STUDIO CODE
1. Ekstrak ZIP ini.
2. Buka VS Code.
3. Klik File > Open Folder, pilih folder gili_trawangan_website.
4. Buka index.html.
5. Pasang ekstensi Live Server (Ctrl+Shift+X, cari "Live Server", Install).
6. Klik kanan index.html > Open with Live Server.

CARA MENGGANTI FOTO
- Ganti alamat pada atribut src di index.html dengan foto milik kelompok.
- Untuk foto lokal, buat folder images lalu gunakan contoh:
  <img src="images/foto-pantai.jpg" alt="Pantai Gili Trawangan">

CARA MEMASUKKAN VIDEO KELOMPOK
- Buat folder bernama videos.
- Salin video, misalnya video-gili.mp4, ke folder tersebut.
- Di index.html cari bagian <div class="video-placeholder">...</div>.
- Ganti bagian itu dengan:
  <video controls width="100%">
    <source src="videos/video-gili.mp4" type="video/mp4">
    Browser Anda tidak mendukung video.
  </video>
