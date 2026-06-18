// Raquete
const Raquete = document.querySelector("#Raquete");
let localRaqueteX = 325;

let movDir = false;
let movEsq = false;

// Bola
const Bola = document.querySelector("#Bola");

let BolaX = 390;
let BolaY = 200;

let velocidadeBolaX = 4;
let velocidadeBolaY = -4;

// Teclado
document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowRight") {
    movDir = true;
    console.log("Tecla DIREITA Ativa");
  } else if (evento.key === "ArrowLeft") {
    movEsq = true;
    console.log("Tecla ESQUERDA Ativa");
  }
});

// Teclado
document.addEventListener("keyup", function (evento) {
  if (evento.key === "ArrowRight") {
    movDir = false;
    console.log("Tecla DIREITA Desligada");
  } else if (evento.key === "ArrowLeft") {
    movEsq = false;
    console.log("Tecla ESQUERDA Desligada");
  }
});

// Jogo Rodando

function rodarJogo() {
  // Movimentação das Raquetes em Ação
  if (movDir === true) {
    localRaqueteX += 5;
    console.log(`Coordenada da Raquete: ${localRaqueteX}`);
  }

  if (movEsq === true) {
    localRaqueteX -= 5;
    console.log(`Coordenada da Raquete: ${localRaqueteX}`);
  }

  if (localRaqueteX < 0) {
    localRaqueteX = 0;
  }

  if (localRaqueteX > 650) {
    localRaqueteX = 650;
  }
  // Movimentação Visualizada das Raquetes
  Raquete.style.left = `${localRaqueteX}px`;

  // Manter rodando continuamente
  requestAnimationFrame(rodarJogo);
}

rodarJogo();
