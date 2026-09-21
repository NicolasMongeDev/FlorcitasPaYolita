onload = () => {
  document.body.classList.remove("container");

  const audio = document.querySelector("audio");
  if (audio) {
    audio.volume = 0.7;
    const start = () => {
      const p = audio.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
      document.removeEventListener("pointerdown", start);
      document.removeEventListener("keydown", start);
    };
    const p = audio.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
    document.addEventListener("pointerdown", start);
    document.addEventListener("keydown", start);
  }

  const seed = (min, max) => Math.random() * (max - min) + min;

  const petalsWrap = document.querySelector(".falling-petals");
  if (petalsWrap) {
    const count = 18;
    for (let i = 0; i < count; i++) {
      const petal = document.createElement("div");
      petal.className = "petal-fall";
      const size = seed(0.6, 1.4);
      petal.style.setProperty("--pw", `${9 * size}px`);
      petal.style.setProperty("--ph", `${14 * size}px`);
      petal.style.setProperty("--px", `${seed(-60, 60)}px`);
      petal.style.setProperty("--pd", `${seed(7, 13)}s`);
      petal.style.setProperty("--pl", `${-seed(0, 13)}s`);
      petal.style.setProperty("--po", seed(0.5, 1));
      petal.style.left = `${seed(0, 100)}%`;
      petalsWrap.appendChild(petal);
    }
  }

  const mound = document.querySelector(".petal-mound");
  if (mound) {
    const count = 13;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "mound-petal";
      const s = seed(0.7, 1.3);
      p.style.setProperty("--w", `${5.5 * s}vmin`);
      p.style.setProperty("--h", `${7 * s}vmin`);
      p.style.setProperty("--bx", `${seed(-7, 7)}vmin`);
      p.style.setProperty("--by", `${seed(-9, 0)}vmin`);
      p.style.setProperty("--br", `${seed(-70, 70)}deg`);
      p.style.setProperty("--dx", `${seed(-30, 30)}vmin`);
      p.style.setProperty("--dy", `${-seed(15, 45)}vmin`);
      p.style.setProperty("--rot", `${seed(200, 480)}deg`);
      p.style.setProperty("--bd", `${seed(0, 0.25)}s`);
      mound.appendChild(p);
    }
  }

  const egg = document.querySelector(".petal-east");
  const reveal = () => {
    if (!egg.classList.contains("revealed")) egg.classList.add("revealed");
  };
  if (egg) {
    egg.addEventListener("click", reveal);
    egg.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") reveal();
    });
  }
};