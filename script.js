let open = document.getElementById("open");
let close = document.getElementById("close");

let menu = document.getElementById("menu");

open.addEventListener("click", (e) => {
  menu.style.display = "flex";
});

close.addEventListener("click", (e) => {
  menu.style.display = "none";
});
