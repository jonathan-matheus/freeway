// variaveis do carro
let xCarro = 600;
let yCarro = 40;

/**
 * Exibe uma imagem de um carro em uma localização específica no canvas.
 *
 * @return {void} Esta função não retorna um valor.
 */
function mostraCarro(){
  image(imagenCarro, xCarro, yCarro, 50, 40);
}

/**
 * Move o carro para a esquerda, diminuindo sua posição x em 2.
 *
 * @return {void} Esta função não retorna nada.
 */
function movimentaCarro(){
  xCarro -= 2;
}