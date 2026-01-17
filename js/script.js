document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  document.getElementById("outputBox").innerHTML = `
    <p>Nama : ${nama}</p>
    <p>Tanggal Lahir : ${tanggal}</p>
    <p>Email : ${email}</p>
    <p>Pesan : ${pesan}</p>
  `;
});