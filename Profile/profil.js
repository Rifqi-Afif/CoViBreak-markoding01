function loadFile()
{
  let p = document.getElementById("p");
  let output = document.getElementById("output");
  let linkImage = URL.createObjectURL(event.target.files[0]);
  output.src = linkImage;
}

function save()
{
  let output = document.getElementById("output").src;
  let name = document.getElementById("newName").value;
  let email = document.getElementById("newEmail").value;
  let telp = document.getElementById("newTelp").value;
  let newProfile = document.getElementsByClassName("inputDataBaru");
  localStorage.setItem("profileImage", output);
  localStorage.setItem("newName", name);
  localStorage.setItem("newEmail", email);
  localStorage.setItem("newTelp", telp);
  window.location.href='https://covibreak-markoding01.markoding01.repl.co/Profile/';
}

function loadPage()
{
  let image = localStorage.getItem("profileImage");
  let foto = document.getElementById("profilePicture");
  foto.src = image;

  let nama = document.getElementById("name");
  let newName = localStorage.getItem("newName");
  nama.innerHTML = newName;

  let email = document.getElementById("email");
  let newEmail = localStorage.getItem('newEmail');
  email.innerHTML = newEmail;

  let telp = document.getElementById("telp");
  let newTelp = localStorage.getItem('newTelp');
  telp.innerHTML = newTelp;
}