// Mengambil elemen tombol hamburger dan navbar
const hamburgerBtn = document.getElementById('hamburger-btn');
const navbar = document.querySelector('.navbar'); // Mengambil elemen navbar

// Menambahkan fungsi klik
hamburgerBtn.addEventListener('click', () => {
  // Sekarang class 'active' dipasang di .navbar
  navbar.classList.toggle('active');
});
