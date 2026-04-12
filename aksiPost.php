<?php
$kebutuhan = $_POST['kebutuhan'] ?? '';
$nama      = $_POST['nama'] ?? '';
$wa        = $_POST['whatsapp'] ?? '';
$email     = $_POST['email'] ?? '';
$pesan     = $_POST['pesan'] ?? '';

// validasi
if (!$kebutuhan || !$nama || !$wa || !$pesan) {
    echo "<script>alert('Harap isi semua data wajib!');window.history.back();</script>";
    exit;
}

// amankan data
$kebutuhan = htmlspecialchars($kebutuhan);
$nama      = htmlspecialchars($nama);
$wa        = htmlspecialchars($wa);
$email     = htmlspecialchars($email);
$pesan     = htmlspecialchars($pesan);

// nomor WA kamu
$no_admin = "6282131466942";

// format pesan WA
$text = "Halo Kopi Kalcer \n\n";
$text .= "Saya ingin memesan:\n";
$text .= "Nama: $nama\n";
$text .= "WA: $wa\n";
$text .= "Email: $email\n";
$text .= "Kebutuhan: $kebutuhan\n";
$text .= "Pesan: $pesan";

$linkWA = "https://wa.me/$no_admin?text=" . urlencode($text);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Data Pesanan</title>
  <style>
    body {
      font-family: Arial;
      background: #f5f5f5;
      padding: 40px;
    }
    .box {
      background: white;
      padding: 30px;
      border-radius: 10px;
      max-width: 600px;
      margin: auto;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    h2 {
      text-align: center;
      color: #5a1f5c;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    td {
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
    td:first-child {
      font-weight: bold;
      width: 40%;
    }
    .btn {
      display: block;
      margin-top: 25px;
      text-align: center;
      padding: 15px;
      background: #25d366;
      color: white;
      text-decoration: none;
      border-radius: 30px;
      font-weight: bold;
    }
    .btn:hover {
      background: #1ebe5d;
    }
  </style>
</head>

<body>

<div class="box">
  <h2>Pesanan Berhasil </h2>

  <table>
    <tr>
      <td>Nama</td>
      <td><?= $nama ?></td>
    </tr>
    <tr>
      <td>No WhatsApp</td>
      <td><?= $wa ?></td>
    </tr>
    <tr>
      <td>Email</td>
      <td><?= $email ?></td>
    </tr>
    <tr>
      <td>Kebutuhan</td>
      <td><?= $kebutuhan ?></td>
    </tr>
    <tr>
      <td>Pesan</td>
      <td><?= $pesan ?></td>
    </tr>
  </table>

  <a href="<?= $linkWA ?>" class="btn">Kirim ke WhatsApp</a>
</div>

</body>
</html>