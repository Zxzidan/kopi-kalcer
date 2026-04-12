// ====== ANIMASI SAAT HALAMAN LOAD ======
document.addEventListener("DOMContentLoaded", function () {
  const jumbotron = document.querySelector(".container-jumbotron");

  jumbotron.style.opacity = 0;
  jumbotron.style.transform = "translateY(50px)";

  setTimeout(() => {
    jumbotron.style.transition = "all 1s ease";
    jumbotron.style.opacity = 1;
    jumbotron.style.transform = "translateY(0)";
  }, 200);
});

// ====== ANIMASI SCROLL (FADE IN) ======
const elements = document.querySelectorAll(".konten1, .konten2, .card");

const showOnScroll = () => {
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

// Set awal
elements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", showOnScroll);

// ====== HOVER CARD ZOOM ======
const cards = document.querySelectorAll(".custom-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// ====== NAVBAR SHADOW SAAT SCROLL ======
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
