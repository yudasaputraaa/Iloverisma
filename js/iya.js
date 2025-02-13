// Efek Love Jatuh
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-emoji');

    // Pilih random emoji love ❤️ 💖 💕 💗
    const hearts = ["❤️", "💖", "💕", "💗"];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    // Random posisi horizontal
    heart.style.left = Math.random() * 100 + 'vw';

    // Random ukuran (besar-kecil)
    let size = Math.random() * 20 + 20; // 20px - 40px
    heart.style.fontSize = size + 'px';

    // Random animasi kecepatan
    heart.style.animationDuration = Math.random() * 5 + 3 + 's'; // 3s - 8s

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000); // Bersihkan setelah selesai animasi
}

// Buat hati jatuh setiap 200ms
setInterval(createFallingHeart, 200);

function nextPage() {
    window.location.href = "home.html"; // Arahkan ke home.html saat tombol diklik
}
