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

// Tijolos
const t1 = document.querySelector("#Tijolo1");
const t2 = document.querySelector("#Tijolo2");
const t3 = document.querySelector("#Tijolo3");

// Estado dos Tijolos
let t1Ativo = true;
let t2Ativo = true;
let t3Ativo = true;

// Estado do Jogo
let jogoAtivo = false;

// Teclado
document.addEventListener("keydown", function (evento) {
  if (evento.key === " " || evento.key === "Spacebar") {
    if (!jogoAtivo) {
      // O jogo NÃO está ativo? Se não, ative agora.
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
      BolaY = 30;
    }
  }

  // COLISÃO: BOLA VS TIJOLO 1
  if (t1Ativo && BolaY >= 650 && BolaY <= 680 && BolaX >= 100 && BolaX <= 250) {
    velocidadeBolaY *= -1;
    t1.style.display = "none";
    t1Ativo = false;
  }

  // COLISÃO: BOLA VS TIJOLO 2
  if (t2Ativo && BolaY >= 650 && BolaY <= 680 && BolaX >= 325 && BolaX <= 475) {
    velocidadeBolaY *= -1;
    t2.style.display = "none";
    t2Ativo = false;
  }

  // COLISÃO: BOLA VS TIJOLO 3
  if (t3Ativo && BolaY >= 650 && BolaY <= 680 && BolaX >= 550 && BolaX <= 700) {
    velocidadeBolaY *= -1;
    t3.style.display = "none";
    t3Ativo = false;
  }

  // CONDIÇÃO DE VITÓRIA (BÔNUS)
  if (!t1Ativo && !t2Ativo && !t3Ativo) {
    alert("Você destruiu todos os blocos do Demolidor!");
    window.location.reload();
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
