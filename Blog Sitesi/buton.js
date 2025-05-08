document.getElementById("menu-toggle").addEventListener("click", function (){
  const menuToggle = document.getElementById("menu-toggle")
  const menu = document.getElementById("menu");

  if (menu.classList.contains("hidden")){
    menu.classList.remove("hidden");
    menu.classList.add("visible")
  } else {
    menu.classList.remove("visible");
    menu.classList.add("hidden");
  }

  
});