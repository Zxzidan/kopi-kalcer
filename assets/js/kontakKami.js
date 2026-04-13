// tombol scroll atas
const btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const list = document.getElementById("listPesanan");
  const btnWA = document.getElementById("kirimWA");

  let dataList = JSON.parse(localStorage.getItem("dataList")) || [];

  function render() {
    list.innerHTML = "";

    dataList.forEach((item, index) => {
      list.innerHTML += `
        <div style="
          background:#fff;
          padding:15px;
          margin-top:10px;
          border-radius:10px;
          box-shadow:0 2px 8px rgba(0,0,0,0.1);
        ">
          <b>${item.nama}</b> (${item.whatsapp})<br>
          ${item.kebutuhan}<br>
          ${item.pesan}<br>
          <button onclick="hapusData(${index})" style="
            margin-top:10px;
            background:red;
            color:white;
            border:none;
            padding:5px 10px;
            border-radius:5px;
          ">Hapus</button>
        </div>
      `;
    });
  }

  window.hapusData = function (index) {
    dataList.splice(index, 1);
    localStorage.setItem("dataList", JSON.stringify(dataList));
    render();
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      kebutuhan: document.querySelector('[name="kebutuhan"]').value,
      nama: document.querySelector('[name="nama"]').value,
      whatsapp: document.querySelector('[name="whatsapp"]').value,
      email: document.querySelector('[name="email"]').value,
      pesan: document.querySelector('[name="pesan"]').value,
    };

    if (!data.kebutuhan || !data.nama || !data.whatsapp || !data.pesan) {
      alert("Harap isi semua data wajib!");
      return;
    }

    dataList.push(data);
    localStorage.setItem("dataList", JSON.stringify(dataList));

    form.reset();
    render();
  });

  btnWA.addEventListener("click", function () {
    if (dataList.length === 0) {
      alert("Belum ada data!");
      return;
    }

    let text = "Halo Kopi Kalcer\n\nSaya ingin memesan:\n\n";

    dataList.forEach((item, i) => {
      text += `${i + 1}. ${item.nama}\n`;
      text += `WA: ${item.whatsapp}\n`;
      text += `Kebutuhan: ${item.kebutuhan}\n`;
      text += `Pesan: ${item.pesan}\n\n`;
    });

    let no_admin = "6282131466942";
    let link = `https://wa.me/${no_admin}?text=${encodeURIComponent(text)}`;

    window.open(link, "_blank");
  });

  render();
});
