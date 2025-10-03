// assets/header.js
fetch("/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("site-header").innerHTML = html;
  });
