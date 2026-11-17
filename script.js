// Nhạc Noel
let playing = false;

function toggleMusic() {
  const frame = document.getElementById("musicFrame");
  const btn = document.getElementById("musicBtn");

  if (!playing) {
    frame.src = "https://www.youtube.com/embed/FN7ALfpGxiI?autoplay=1";

    btn.innerText = "⏸ TẮT NHẠC";
    playing = true;
  } else {
    frame.src = "about:blank";

    btn.innerText = "🎵 BẬT NHẠC";
    playing = false;
  }
}

// Tạo tuyết rơi
for (let i = 0; i < 50; i++) {
  const snow = document.createElement("div");

  snow.className = "snow";
  snow.innerText = "❄";

  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = (Math.random() * 15 + 10) + "px";
  snow.style.animationDuration = (Math.random() * 5 + 3) + "s";
  snow.style.animationDelay = Math.random() * 5 + "s";

  document.body.appendChild(snow);
}
