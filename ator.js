// variaveis do ator
let yAtor = 366;
let xAtor = 100;

/**
 * Exibe uma imagem de um ator em uma localização específica no canvas.
 *
 * @return {void} Esta função não retorna nenhum valor.
 */
function mostraAtor(){
  image(imagenDoAtor, xAtor, yAtor, 30, 30);
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