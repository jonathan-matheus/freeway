// variaveis do carro 1
let xCarro = 600;
let yCarro = 40;
let velocidadeCarro = 2;

// variaveis do carro 2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 3;

// variavel do carro 3
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 2.5;

/**
 * Exibe uma imagem de um carro em uma localização específica no canvas.
 *
 * @return {void} Esta função não retorna um valor.
 */
function mostraCarro(){
  image(imagenCarro, xCarro, yCarro, 50, 40);
  image(imagenCarro2, xCarro2, yCarro2, 50, 40);
  image(imagenCarro3, xCarro3, yCarro3, 50, 40);
}

/**
 * Move o carro para a esquerda, diminuindo sua posição x em 2.
 *
 * @return {void} Esta função não retorna nada.
 */
function movimentaCarro(){
  xCarro -= velocidadeCarro;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}