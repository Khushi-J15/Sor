function showApology() {
  document.getElementById("flowerSection").classList.add("hidden");
  document.getElementById("apologySection").classList.remove("hidden");
  document.querySelector(".scenic-background").classList.add("hidden");
}

function createFallingFlowers() {
  const container = document.querySelector(".falling-flowers");
  const colors = ["red", "pink", "yellow", "purple"];
  const types = ["🌸", "🌼", "🌺", "🌹"];
  for (let i = 0; i < 12; i++) {
    let flower = document.createElement("div");
    flower.classList.add("flower", colors[Math.floor(Math.random() * colors.length)]);
    flower.innerHTML = types[Math.floor(Math.random() * types.length)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDelay = Math.random() * 3.5 + "s";
    flower.style.setProperty("--direction", Math.random() > 0.5 ? 1 : -1);
    container.appendChild(flower);
    setTimeout(() => {
      flower.remove();
    }, 10000); // Matches longest animation duration
  }
  setTimeout(createFallingFlowers, 700); // Faster spawning
}

createFallingFlowers();

document.getElementById("sorryImage").addEventListener("click", () => {
  const message = document.getElementById("apologyMessage");
  message.classList.add("show");
});
