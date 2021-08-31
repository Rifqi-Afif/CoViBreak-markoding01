function loadNotif()
{
  let pesan = document.getElementById("pesan");
  let tempatBepergian = localStorage.getItem("tempatPergi");
  let tanggalPergi = localStorage.getItem("tanggalPergi");
  let jamPergi = localStorage.getItem("jamPergi");
  let jamPulang = localStorage.getItem("jamPulang");
  pesan.innerHTML = "Halo user, pada tanggal "+ tanggalPergi +" jam "+ jamPergi +" - "+ jamPulang +" di "+ tempatBepergian +" ada yang terdeteksi positif covid nih. Apakah saat itu anda berada disana? Hati-hati ya, Jangan lupa tetap patuhi protokol kesehatan !! Jika mengalami gejala segera periksakan diri anda !!";
}