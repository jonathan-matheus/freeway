let imagenDaEstrada;
let imagenDoAtor;
let imagenCarro;

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
  image(imagenDoAtor, 100, 366, 30, 30);
  image(imagenCarro, 420, 40, 50, 40);
}
