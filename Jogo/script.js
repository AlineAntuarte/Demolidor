// Raquete
const Raquete = document.querySelector("#Raquete");
let localRaqueteX = 325;

let movDir = false;
let movEsq = false;

// Bola
const Bola = document.querySelector("#Bola");

let BolaX = 390;
let BolaY = 250;

let velocidadeBolaX = 0;
let velocidadeBolaY = -4;

// Estado do Jogo
let jogoAtivo = false;

// Teclado
document.addEventListener("keydown", function (evento) {
  if (evento.key === " " || evento.key === "Spacebar") {
    if (!jogoAtivo) {
      jogoAtivo = true;
      velocidadeBolaX = 0;
      velocidadeBolaY = -4;
    }
  }
  // Teclas
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
  // Parte da Mecânica para Rodar o Jogo ou Não
  if (!jogoAtivo) {
    requestAnimationFrame(rodarJogo);
    return;
  }

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

  // Física de Movimentação da Bola
  BolaX += velocidadeBolaX;
  BolaY += velocidadeBolaY;
  console.log(`Coordenada da Bola: ${BolaX}, ${BolaY}`);

  if (BolaX <= 0 || BolaX >= 780) {
    velocidadeBolaX *= -1;
  }

  if (BolaY >= 780) {
    velocidadeBolaY *= -1;
  }

  Bola.style.left = `${BolaX}px`;
  Bola.style.bottom = `${BolaY}px`;

  // Colisão Bola vs Raquete
  if (BolaY <= 30 && BolaX >= localRaqueteX && BolaX <= localRaqueteX + 150) {
    velocidadeBolaY *= -1;
    // Influencia Direção da Bola ao Rebater
    if (velocidadeBolaX === 0) {
      velocidadeBolaX = 4;
    }
  }

  // Condição para Perder o Jogo
  if (BolaY <= 0) {
    alert("Perdedor, deixou a bola cair!");
    window.location.reload();
  }
  // .
  // .
  // .
  // Manter rodando continuamente
  requestAnimationFrame(rodarJogo);
}

rodarJogo();
