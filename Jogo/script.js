const Raquete = document.querySelector("#Raquete");
let localRaqueteX = 325;

let movDir = false;
let movEsq = false;

document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowRight") {
    let movDir = true;
    console.log("Tecla DIREITA Ativa");
  } else if (evento.key === "ArrowLeft") {
    let movEsq = true;
    console.log("Tecla ESQUERDA Ativa");
  }
});

document.addEventListener("keyUP", function (evento) {
  if (evento.key === "ArrowRight") {
    let movDir = false;
    console.log("Tecla DIREITA Desligada");
  } else if (evento.key === "ArrowLeft") {
    let movEsq = false;
    console.log("Tecla ESQUERDA Desligada");
  }
});
