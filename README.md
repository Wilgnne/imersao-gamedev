##  :video_game: Imerção GameDev
A imerção GameDev da Alura tem como objetivo a pratica do JavaScript apartir do desenvolvimento de games, utilizando como principais tecnologias o HTML5, JavaScript e P5.js.

#  :ghost: Hipsta e a convenção bruxa

![Hipsta](https://raw.githubusercontent.com/Wilgnne/imersao-gamedev/master/docs/game.PNG)

Hipsta é um bruxa novata e esta indo para sua primeira convenção bruxa, que este ano será sediada na floresta meridional de Wakalub.
Mas sua travessia não será fácil, Hipsta terá de enfrentar os mais fofos monstros que moram na floresta e que desejam impedir sua passagem.

### :dart: Desafios do 1º dia

 - **:heavy_check_mark: Organizar a matriz no `character.js`, tirando os números fixos e substituindo-os por um cálculo:**
Nesta refatoração a matriz de coordenadas foi substituída por uma função que mapeia o spriteSheet em fatias e retorna as coordenadas desejadas.
 
```js
getSprite (index) {
  index =  Math.floor(index);
  // horizontal define a quantidade de
  // sprites na horizontal
  const  x  = index %  this.horizontal;
  // vertical define a quantidade de
  // sprites na vertical
  const  y  =  Math.floor(index /  this.vertical);
  // spriteSheetW e  spriteSheetH definem 
  // a largura e altura de uma sprite
  // no spriteSheet
  return [
    this.spriteSheetW  * x,
    this.spriteSheetH  * y
  ];
}
```

 - **:heavy_check_mark: Deixar a função de imagem mais limpa e organizada!**
Refatoração da função draw.
```js
draw() {
  const spriteCoords = this.getSprite(this.currentSprite);

  image(
    this.spriteSheet,  // SpriteSheel completo
    this.x,            // Coord X do Char
    this.y,            // Coord Y do Char
    this.w,            // Largura do Char
    this.h,            // Altura  do Char
    spriteCoords[0],   // Coord X do inicio da sprite
    spriteCoords[1],   // Coord Y do inicio da sprite
    this.spriteSheetW, // Largura da sprite
    this.spriteSheetH  // Altura  da sprite
  );
  this.anim();
}
```
- **:heavy_check_mark: Criar a história da bruxa Hipsta. Por que ela está andando nessa floresta?**
 
 ## **:books: REFERÊNCIAS**

- [P5.js](https://p5js.org/)
- [Imersão GameDev Alura - Aula 1](https://www.alura.com.br/imersao-gamedev-javascript/aula01-game-personagem-animacao?utm_campaign=imersao_js_gamedev_aula_01&utm_medium=email&utm_source=RD+Station)
 
 ## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **MIT LICENSE**. 

<h2 align="center">Feito por <a href="https://br.linkedin.com/in/wilgnne-khawan-barbosa-alencar-642747187">Wilgnne Khawan</a></h2>
