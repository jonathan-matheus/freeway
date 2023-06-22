// posição y dos carros
let yCarros = [40, 96, 150];

// velocidade dos carros
let velocidadeCarros = [2, 3, 2.5];

// posição x inicial dos carros
let xCarro = [600, 600, 600];

/**
 * Exibe as imagens dos carros em suas localizações específicas no canvas.
 *
 * @return {void} Esta função não retorna um valor.
 */
function mostraCarro(){
  for(let i = 0; i < imagenCarros.length; i++){
    image(imagenCarros[i], xCarro[i], yCarros[i], 50, 40);
  }
}

/**
 * Move os carros para a esquerda, diminuindo sua posição x.
 *
 * @return {void} Esta função não retorna nada.
 */
function movimentaCarro(){
  for(let i = 0; i < imagenCarros.length; i++){
    xCarro[i] -= velocidadeCarros[i];
  } 
}

/**
 * Move os carros de volta para sua posição inicial sempre que ele sai da tela 
 * 
 * @return {void} Esta função não retorna nada.
 */
function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagenCarros.length; i++){
    if(passouTodaATela(xCarro[i])){
      xCarro[i] = 600;
    }
  } 
}

/**
 * Verifica se o valor xCarro fornecido é menor que -50, indicando que todo o 
 * carro passou da tela.
 *
 * @param {number} xCarro - O valor da coordenada x do carro.
 * @return {boolean} Retorna true somente se todo o carro passou da tela
 */
function passouTodaATela(xCarro){
  return xCarro < -50;
}