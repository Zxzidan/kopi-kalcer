// ====== JUMBOTRON FADE IN ======
document.addEventListener("DOMContentLoaded", function () {
  const jumbo = document.querySelector(".container-jumbotron");

  jumbo.style.opacity = 0;
  jumbo.style.transform = "translateY(50px)";

  setTimeout(() => {
    jumbo.style.transition = "all 1s ease";
    jumbo.style.opacity = 1;
    jumbo.style.transform = "translateY(0)";
  }, 200);
});

// ====== SCROLL ANIMATION ======
const elements = document.querySelectorAll(
  ".pendiri, .info-kalcer, .foto-profil, .foto-kalcer img",
);

const showOnScroll = () => {
  elements.forEach((el) => {
    const posisi = el.getBoundingClientRect().top;
    const tinggiLayar = window.innerHeight;

    if (posisi < tinggiLayar - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

elements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", showOnScroll);

// ====== FOTO PROFIL ANIMASI ======
const foto = document.querySelector(".foto-profil");

foto.addEventListener("mouseenter", () => {
  foto.style.transform = "scale(1.05) rotate(1deg)";
  foto.style.transition = "0.3s";
});

foto.addEventListener("mouseleave", () => {
  foto.style.transform = "scale(1) rotate(0deg)";
});

// ====== BUTTON MAPS EFFECT ======
const btn = document.querySelector(".btn-dark");

btn.addEventListener("mouseenter", () => {
  btn.style.transform = "scale(1.05)";
  btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
});

btn.addEventListener("mouseleave", () => {
  btn.style.transform = "scale(1)";
  btn.style.boxShadow = "none";
});

// ====== NAVBAR SHADOW ======
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
