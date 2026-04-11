document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".lokasi-btn");
  const text = document.getElementById("text-lokasi");
  const image = document.getElementById("gambar-lokasi");

  const data = {
    gayo: {
      img: "assets/img/kopigayo.jpg",
      desc: "Kopi Gayo berasal dari dataran tinggi Aceh yang terkenal dengan kualitas premium. Memiliki karakter rasa yang kuat, body tebal, serta aroma earthy yang khas. Proses penanaman dilakukan secara alami oleh petani lokal, sehingga menghasilkan kopi yang kaya rasa dan konsisten.",
    },
    toraja: {
      img: "assets/img/kopitoraja.jpg",
      desc: "Kopi Toraja berasal dari Sulawesi dengan karakter rasa yang kompleks dan berlapis. Memiliki sentuhan rempah, sedikit fruity, serta aftertaste yang panjang. Ditanam di ketinggian yang ideal, kopi ini menghasilkan cita rasa unik yang sering menjadi favorit pecinta kopi.",
    },
    kintamani: {
      img: "assets/img/kopikintamani.jpg",
      desc: "Kopi Kintamani berasal dari Bali dengan karakter rasa yang segar dan ringan. Memiliki tingkat keasaman yang seimbang serta aroma buah yang khas. Sistem tanam tradisional dan lingkungan alami membuat kopi ini memiliki kualitas yang konsisten dan menyegarkan.",
    },
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      buttons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const key = this.getAttribute("data-lokasi");

      image.src = data[key].img;
      text.textContent = data[key].desc;
    });
  });
});

const steps = document.querySelectorAll(".step");
const detail = document.getElementById("detail-text");

const prosesData = {
  petik:
    "Biji kopi dipetik secara manual saat sudah matang sempurna untuk menjaga kualitas rasa. Proses ini dilakukan dengan seleksi ketat agar hanya buah terbaik yang diproses lebih lanjut.",
  olah: "Setelah dipetik, biji kopi diproses menggunakan metode tertentu seperti washed atau natural. Proses ini menentukan karakter rasa akhir kopi yang dihasilkan.",
  sangrai:
    "Biji kopi disangrai dengan suhu dan waktu yang terkontrol untuk mengeluarkan aroma terbaik. Tingkat sangrai mempengaruhi rasa, mulai dari light hingga dark roast.",
  seduh:
    "Kopi diseduh oleh barista dengan teknik yang tepat untuk menghasilkan rasa yang konsisten. Setiap metode seduh memberikan pengalaman rasa yang berbeda.",
};

steps.forEach((step) => {
  step.addEventListener("click", function () {
    steps.forEach((s) => s.classList.remove("active"));
    this.classList.add("active");

    const key = this.getAttribute("data-step");
    detail.textContent = prosesData[key];
  });
});
