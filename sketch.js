// variaveis de imagens
let imagenDaEstrada;
let imagenDoAtor;
let imagenCarro;

// variaveis do carro
let xCarro = 600;

// variaveis do ator
let yAtor = 366;

function preload(){
  imagenDaEstrada = loadImage("materiais/imagens/estrada.png");
  imagenDoAtor = loadImage("materiais/imagens/ator-1.png");
  imagenCarro = loadImage("materiais/imagens/carro-1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagenDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
}

/**
 * Exibe uma imagem de um ator em uma localização específica no canvas.
 *
 * @return {void} Esta função não retorna nenhum valor.
 */
function mostraAtor(){
  image(imagenDoAtor, 100, yAtor, 30, 30);
}

/**
 * Exibe uma imagem de um carro em uma localização específica no canvas.
 *
 * @return {void} Esta função não retorna um valor.
 */
function mostraCarro(){
  image(imagenCarro, xCarro, 40, 50, 40);
}

/**
 * Move o carro para a esquerda, diminuindo sua posição x em 2.
 *
 * @return {void} Esta função não retorna nada.
 */
function movimentaCarro(){
  xCarro -= 2;
}

/**
 * Move o personagem usando as setas do teclado
 *
 * @return {void} Não há valor de retorno.
 */
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}