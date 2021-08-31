function validateForm()
{
  var email=document.getElementById("emailLogin").value;
  var phone=document.getElementById("phoneLogin").value;
  var password=document.getElementById("password").value;

  if ((email == "CoViBreak@gmail.com") && (phone == "081234567899") && (password == "CoViBreak01"))
  {
    window.location.href = 'https://covibreak-markoding01.markoding01.repl.co/beranda';
  }
  else
  {
    alert ("Login unsuccessful.");
  }
}

function showHide()
{
  var password=document.getElementById("password");
  if(password.type === "password")
  {
    password.type = "text";
  }
  else
  {
    password.type = "password"
  }
}