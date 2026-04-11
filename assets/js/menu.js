document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".kategori button");
  const items = document.querySelectorAll(".item");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // reset active
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const kategori = this.getAttribute("data-kategori");

      items.forEach((item) => {
        const itemKategori = item.getAttribute("data-kategori");

        if (kategori === "all" || kategori === itemKategori) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
