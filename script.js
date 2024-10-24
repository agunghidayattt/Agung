window.onload = function() {
    if (window.location.pathname === '/no1_modul4.html' || window.location.pathname === '/no1_modul4.htmls') {
        alert("Selamat datang di halaman utama!");
    }
};

document.addEventListener ("DOMContentLoaded",function(){
    const form = document.getElementById('contactForm');
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert("Semua field harus diisi!");
        event.preventDefault(); // Mencegah pengiriman form
    } else {
        alert("Pesan telah dikirim!");
    }
});

// script.js
const navItems = document.querySelectorAll('nav a');

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1)';  // Membuat item membesar saat dihover
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';  // Mengembalikan ukuran normal
  });
});

