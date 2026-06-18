# Demolidor 🧱

> É recomendado jogar no navegador Firefox!

Este repositório contém a entrega do Projeto Prático 02: Jogo Web estilo Atari 2600, desenvolvido para a disciplina de Programação Frontend I.

* **Aluna:** Aline Barbosa Antuarte
* **Jogo Escolhido:** Demolidor (Inspirado no clássico Breakout)

## 🎮 Controles

* **Barra de Espaço:** Inicia a partida (libera a bola).
* **Seta para a Esquerda (ArrowLeft):** Move a raquete para a esquerda.
* **Seta para a Direita (ArrowRight):** Move a raquete para a direita.

## ⚙️ Mecânicas Implementadas

Este projeto foi desenvolvido utilizando exclusivamente HTML, CSS e JavaScript puros. Toda a renderização gráfica foi feita através de manipulação direta da árvore DOM.

As principais mecânicas incluem:

* **Arquitetura de Layout DOM:** Para construção da arena e dos elementos visuais Utilizou-se o conceito de contêiner relativo (`position: relative`) e peças com posicionamento absoluto (`position: absolute`) alteradas via estilo no JavaScript.
* **Game Loop Nativo:** O motor do jogo utiliza a função `requestAnimationFrame()` para garantir uma atualização dinâmica da interface e cálculos matemáticos de forma fluida a cada frame.
* **Eventos de Teclado Assíncronos:** O controle da raquete não depende diretamente dos eventos físicos, mas sim de variáveis de estado ligadas aos eventos de `keydown` e `keyup`, evitando o delay padrão de repetição do sistema operacional.
* **Detectores de Colisão Lógicos:** Implementação de cálculos de Bounding Box (caixas delimitadoras) para tratar as colisões da bola contra as paredes (limites de tela), os tijolos estáticos (obstáculos) e a raquete.
* **Física Dinâmica de Rebate:** A raquete foi dividida em três zonas invisíveis. Dependendo de onde a bola colide com a raquete, o vetor de velocidade horizontal é modificado com um operador ternário, permitindo que o jogador tenha controle de mira do ricochete.
* **Vitória e Derrota:** Condição de perda atrelada à colisão com a zona proibida no fundo da tela (void), e condição de vitória estipulada pela destruição (alteração para `display: none`) de todos os tijolos ativos na arena.
