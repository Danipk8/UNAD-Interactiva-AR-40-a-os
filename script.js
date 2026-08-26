

//Fubcion para abrir puertas de intro
document.getElementById("entrar").addEventListener("click", () => {
  
  const intro = document.getElementById("intro");

  intro.classList.add("abrir");

  setTimeout(() => {
    intro.style.display = "none";
  }, 1200);

});
