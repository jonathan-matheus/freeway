// variaveis de imagens
let imagenDaEstrada;
let imagenDoAtor;
let imagenCarro;
let imagenCarro2;
let imagenCarro3;

// variaveis de som
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagenDaEstrada = loadImage("materiais/imagens/estrada.png");
  imagenDoAtor = loadImage("materiais/imagens/ator-1.png");
  imagenCarro = loadImage("materiais/imagens/carro-1.png");
  imagenCarro2 = loadImage("materiais/imagens/carro-2.png");
  imagenCarro3 = loadImage("materiais/imagens/carro-3.png");
  imagenCarros = [imagenCarro, imagenCarro2, imagenCarro3,
                  imagenCarro, imagenCarro2, imagenCarro3];

  somDaTrilha = loadSound("materiais/sons/trilha.mp3");
  somDaColisao = loadSound("materiais/sons/colidiu.mp3");
  somDoPonto = loadSound("materiais/sons/pontos.wav");
}