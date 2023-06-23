function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagenDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  movimentaAtor();
  verficaColisao();
  incluiPontos();
  marcaPontos();
}