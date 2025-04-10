const listAccount = [
  { username: "235100QT01", password: "23510300001" },
  { username: "235100QT01", password: "23510300003" },
  { username: "235100QT01", password: "23510300005" },
  { username: "235100QT01", password: "23510300008" },
  { username: "235100QT01", password: "23510300011" },
  { username: "235100QT01", password: "23510300014" },
  { username: "235100QT01", password: "23510300015" },
  { username: "235100QT01", password: "23510300019" },
  { username: "235100QT01", password: "23510300020" },
];
let isLogin = !!localStorage.getItem("token");

function CheckLogin() {
  if (isLogin) {
    window.location.href = "log.html";
  }
}

function Login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let checkLogin = listAccount.some(
    (value) => value.username === username && value.password === password
  );
  console.log(checkLogin);
  if (checkLogin) {
    localStorage.setItem("token", username);
    isLogin = true;
    CheckLogin();
  } else {
    alert("wrong username or password !");
  }
}
