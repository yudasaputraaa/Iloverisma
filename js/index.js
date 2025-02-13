(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
    // Fungsi animasi hati jatuh
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 999 + 'vw';
        heart.style.animationDuration = Math.random() * 6 + 6 + 'ss'; // Random speed
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

// Buat hati jatuh setiap 300ms
    setInterval(createHeart, 300);

})();
/*
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "BENERAN SAYAANG KAMU MENCET NO😭",
    "SAYANGGG IHHHHH",
    "SAYANGG KAMU GAK CINTAA AKUU KAHH😭",
    "SAYANGGGG IHHH, AKU NANGISSS NIHHH",
    "SAYANGGG PILIH (IYA) DONGGGG PLISSSSSS ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 2.1}px`;
}

function handleYesClick() {
    window.location.href = "iya.html";
}

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

