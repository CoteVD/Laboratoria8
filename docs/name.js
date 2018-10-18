var name = prompt("¡Hola! ¿Cuál es tu nombre?");
if (name === "" || name === 'null') {
  alert("Debes ingresar un nombre.");
  location.reload();
} else {
  box3.innerHTML = `
  <p id="name">Bienvenida ${name}</p>
  `;
}
