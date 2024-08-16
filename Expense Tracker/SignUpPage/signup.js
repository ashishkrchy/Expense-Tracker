function move2() {
  var q = document.getElementById("email").value;
  var w = document.getElementById("password").value;
  event.preventDefault();
  const expenses = {
    grocery: [],
    entertainment: [],
    bills: [],
    other: [],
  };
  const data = {
    email: q,
    password: w,
    expense: expenses,
  };
  localStorage.setItem(q, JSON.stringify(data));
  window.location.assign("/LoginPage/login.html");
}
