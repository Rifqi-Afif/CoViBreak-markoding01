function validateForm()
{
  var nama=document.getElementById("namasignup").value;
  var email=document.getElementById("emailsignup").value;
  var phone=document.getElementById("phonesignup").value;
  var password=document.getElementById("password").value;

  if ((nama == CoViBreak && email == "CoViBreak@gmail.com") && (phone == "081234567899") && (password == "CoViBreak01"))
  {
    window.location.href = 'https://covibreak-markoding01.markoding01.repl.co/beranda.html';
  }
  else
  {
    alert ("Sign-Up unsuccessful.");
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