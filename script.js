const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const familyStage = document.getElementById("familyStage");

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Pause soundtrack";
      musicToggle.setAttribute("aria-label", "Pause background music");
    } catch (error) {
      musicLabel.textContent = "Add assets/soft-piano.mp3";
    }
  } else {
    music.pause();
    musicLabel.textContent = "Play our soundtrack";
    musicToggle.setAttribute("aria-label", "Play background music");
  }
});

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
  });
});

// Reveal family photographs as the visitor reaches the family chapter.
if ("IntersectionObserver" in window && familyStage) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        familyStage.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(familyStage);
} else {
  familyStage?.classList.add("revealed");
}

// Grandpa is the intended emotional reveal. The other choices still respond kindly.
const choiceHint = document.getElementById("choiceHint");
document.querySelectorAll("[data-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    if (choice === "grandpa") {
      document.getElementById("grandpa").classList.remove("hidden");
      choiceHint.textContent = "I had a feeling this name held something special. ♡";
      document.querySelectorAll("[data-choice]").forEach((item) => item.disabled = true);
      button.classList.add("selected");
      window.setTimeout(() => {
        document.getElementById("grandpa").scrollIntoView({ behavior: "smooth", block: "start" });
      }, 450);
    } else {
      choiceHint.textContent = choice === "mom"
        ? "Your mom has a special place in your story, too. Take your time — choose the person you want to revisit in this little album. ♡"
        : "Your dad is part of your story, too. If you're ready for the special memory chapter, choose Grandpa. ♡";
    }
  });
});

const openLetter = document.getElementById("openLetter");
const loveLetter = document.getElementById("loveLetter");
const endingNote = document.getElementById("endingNote");
openLetter.addEventListener("click", () => {
  const isOpen = openLetter.getAttribute("aria-expanded") === "true";
  openLetter.setAttribute("aria-expanded", String(!isOpen));
  openLetter.classList.toggle("open", !isOpen);
  loveLetter.classList.toggle("hidden", isOpen);
  endingNote.classList.toggle("hidden", isOpen);
  openLetter.querySelector(".envelope-label").textContent = isOpen ? "To my favorite person" : "A letter, just for you";
  openLetter.querySelector(".envelope-small").textContent = isOpen ? "open when you're ready" : "♡ from your girl";
  if (!isOpen) {
    window.setTimeout(() => loveLetter.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
  }
});
