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
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("loveMusic");

    // Coba autoplay saat halaman dimuat
    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("Musik diputar otomatis!");
            })
            .catch(() => {
                console.log("Autoplay dicegah! Klik layar untuk memulai musik.");
            });
    }
});

// Jika autoplay gagal, musik akan diputar saat klik layar
function playMusic() {
    const music = document.getElementById("loveMusic");
    if (music.paused) {
        music.play();
        console.log("Musik diputar setelah klik layar!");
    }
}
