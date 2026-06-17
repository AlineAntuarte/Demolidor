const Raquete = document.querySelector("#Raquete");
let localRaqueteX = 325;

let movDir = false;
let movEsq = false;

document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowRight") {
    movDir = true;
    console.log("Tecla DIREITA Ativa");
  } else if (evento.key === "ArrowLeft") {
    movEsq = true;
    console.log("Tecla ESQUERDA Ativa");
  }
});

document.addEventListener("keyup", function (evento) {
  if (evento.key === "ArrowRight") {
    movDir = false;
    console.log("Tecla DIREITA Desligada");
  } else if (evento.key === "ArrowLeft") {
    movEsq = false;
    console.log("Tecla ESQUERDA Desligada");
  }
});

function rodarJogo() {
  if (movDir === true) {
    localRaqueteX += 5;
    console.log(`Coordenada da Raquete: ${localRaqueteX}`);
  }

  if (movEsq === true) {
    localRaqueteX -= 5;
    console.log(`Coordenada da Raquete: ${localRaqueteX}`);
  }

  Raquete.style.left = `${localRaqueteX}px`;

  requestAnimationFrame(rodarJogo);
}

rodarJogo();
