function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagenDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  movimentaAtor();
}