const btndropdown = document.getElementById("toggleon");

function toggleMenuon(event) {
  if (event.type === "touchstart") event.preventDefault();
  const dropdownmenu = document.getElementById("botao__dropdown--main");
  dropdownmenu.classList.toggle("active");
}

btndropdown.addEventListener("touchstart", toggleMenuon);
