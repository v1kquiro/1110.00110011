// Sweet + Chaotic Valentine Logic

function makeBackgroundHearts(count = 18) {
  for (let i = 0; i < count; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDelay = (Math.random() * 6) + "s";
    h.style.animationDuration = (4 + Math.random() * 4) + "s";
    h.style.transform = `rotate(45deg) scale(${0.6 + Math.random() * 1.3})`;
    document.body.appendChild(h);
  }
}

function popConfetti() {
  const confetti = document.getElementById("confetti");
  confetti.innerHTML = "";

  for (let i = 0; i < 26; i++) {
    const c = document.createElement("span");
    c.style.left = (8 + Math.random() * 84) + "%";
    c.style.top = (8 + Math.random() * 20) + "%";
    c.style.animationDelay = (Math.random() * 0.16) + "s";
    c.style.transform = `rotate(45deg) scale(${0.8 + Math.random() * 1.4})`;
    confetti.appendChild(c);
  }

  setTimeout(() => (confetti.innerHTML = ""), 1400);
}

function showResult(message) {
  const box = document.getElementById("resultBox");
  box.textContent = message;
  box.style.display = "block";
  popConfetti();
}

// Buttons
document.getElementById("yesBtn").addEventListener("click", () => {
  showResult("🥹❤️ You made me the luckiest person baby. Happy Valentine’s, my love!");
});

document.getElementById("yesPlusBtn").addEventListener("click", () => {
  showResult("YUPPPPP!!! 😊😚❤️❤️ You = my Valentine. No refunds. Ever. 😉");
});

// Start background hearts
makeBackgroundHearts();

const jokes = [
  "Proof: you + me = ❤️ ",
  "I ran the numbers… you’re my favorite constant.",
  "You + me > everything else.",
  "If you’re the x, I’m the y… together we’re a function 🤪",
  "You’re the missing variable in my happiness equation."
];

document.getElementById("mathJoke").textContent =
  jokes[Math.floor(Math.random() * jokes.length)];

