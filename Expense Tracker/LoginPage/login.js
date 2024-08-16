function move() {
  event.preventDefault();
  var y = document.getElementById("email").value;
  var t = document.getElementById("password").value;
  var data = localStorage.getItem(y);

  if (data == null) {
    alert("User Not found!!!!!");
  } else {
    parseData = JSON.parse(data);
    if (parseData.password == t) {
      window.location.assign(`/HomePage/index.html?user=${parseData.email}`);
      alert("Login Succesfull");
    } else {
      alert("Password is incorrect!!!");
    }
  }
}
function move1() {
  event.preventDefault();
  window.location.assign("/SignUpPage/signup.html");
}
