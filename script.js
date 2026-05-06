function cambiarTexto() {
  document.getElementById("texto").textContent = "¡Texto cambiado!";
}

function changeTheme() {
  document.body.classList.toggle("dark");
}

function changeImageOver() {
  document.getElementById("imagen").src =
    "https://static.wikia.nocookie.net/onepiece/images/2/2d/Luffy_Gear_5.png";
}

function changeImageLeave() {
  document.getElementById("imagen").src =
    "https://static.wikia.nocookie.net/onepiece/images/5/5a/Monkey_D._Luffy.png";
}
