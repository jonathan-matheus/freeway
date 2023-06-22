// posição y dos carros
let yCarros = [40, 96, 150];

// velocidade dos carros
let velocidadeCarros = [2, 3, 2.5];

// posição x inicial dos carros
let xCarro = [600, 600, 600];

/**
 * Exibe uma imagem de um carro em uma localização específica no canvas.
 *
 * @return {void} Esta função não retorna um valor.
 */
function mostraCarro(){
  image(imagenCarro, xCarro[0], yCarros[0], 50, 40);
  image(imagenCarro2, xCarro[1], yCarros[1], 50, 40);
  image(imagenCarro3, xCarro[2], yCarros[2], 50, 40);
}

/**
 * Move o carro para a esquerda, diminuindo sua posição x em 2.
 *
 * @return {void} Esta função não retorna nada.
 */
function movimentaCarro(){
  xCarro[0] -= velocidadeCarros[0];
  xCarro[1] -= velocidadeCarros[1];
  xCarro[2] -= velocidadeCarros[2];
}

function voltaPosicaoInicialDoCarro(){
  if(xCarro[0] < -50){
    xCarro[0] = 600;
  }

  if(xCarro[1] < -50){
    xCarro[1] = 600;
  }

  if(xCarro[2] < -50){
    xCarro[2] = 600;
  }
}