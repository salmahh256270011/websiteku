// JavaScript untuk menampilkan saran rutinitas skincare
const form = document.getElementById("skinForm");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const jenis = document.getElementById("jenisKulit").value;
  const masalah = document.getElementById("masalah").value;

  let saran = "Mulai dengan cleanser lembut, moisturizer, dan sunscreen pada pagi/siang hari.";

  if (jenis === "berminyak") {
    saran = "Pilih cleanser lembut dan moisturizer ringan yang tidak terasa berat. Gunakan sunscreen pada pagi/siang hari.";
  } else if (jenis === "kering") {
    saran = "Pilih cleanser lembut yang tidak membuat kulit terasa tertarik dan moisturizer yang membantu menjaga kelembapan. Gunakan sunscreen pada pagi/siang hari.";
  } else if (jenis === "sensitif") {
    saran = "Pilih produk sederhana tanpa pewangi bila memungkinkan. Coba satu produk baru pada satu waktu dan lakukan uji tempel terlebih dahulu.";
  } else if (jenis === "kombinasi") {
    saran = "Gunakan cleanser lembut, moisturizer ringan, dan sunscreen. Sesuaikan produk dengan bagian wajah yang lebih berminyak atau kering.";
  }

  hasil.style.display = "block";
  hasil.innerHTML =
    "<h3>Hai, " + aman(nama) + "!</h3>" +
    "<p><strong>Fokus pilihanmu:</strong> " + aman(masalah) + ".</p>" +
    "<p>" + saran + "</p>" +
    "<p><em>Saran ini bersifat umum. Hasil form tidak disimpan ke database.</em></p>";

  hasil.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// Mencegah teks yang diketik pengguna dibaca sebagai HTML
function aman(teks) {
  return teks.replace(/[&<>"']/g, function(huruf) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[huruf];
  });
}
