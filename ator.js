// variaveis do ator
let yAtor = 366;
let xAtor = 90;
let colisao = false;
let meusPontos = 0;

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
  if (keyIsDown(DOWN_ARROW) & podeSeMover()){
    yAtor += 3;
  }
}

/**
 * Verifica se há colisão entre os carros e o jogador.
 *
 * @return {void} Não retorna um valor.
 */
function verficaColisao(){ 
  for(let i = 0 ; i < imagenCarros.length ; i++){
    colisao = collideRectCircle(xCarro[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      voltaAtorParaPosicaoInicial();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

/**
 * Define a posição y do "ator" como 366, indicando uma colisão com um objeto.
 *
 * @return {void} Esta função não retorna nada.
 */
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

/**
 * Desenha a pontuação atual na tela.
 *
 * @return {void} Não retorna um valor.
 */
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}

/**
 * Verifica se o valor de "meusPontos" é maior que zero.
 *
 * @return {boolean} Retorna true se "meusPontos" for maior que zero.
 */
function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}