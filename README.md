# mines_app

Aplicativo que simula o jogo Campo Minado.

*"Campo minado é um popular jogo de computador para um jogador. Foi inventado por Robert Donner em 1989 e tem como objectivo revelar um campo de minas sem que alguma seja detonada."*

Fonte: **https://pt.wikipedia.org/wiki/Campo_minado**

**Regras**

A área de jogo consiste num campo de quadrados onde cada um pode ser revelado clicando sobre ele, e se o quadrado clicado contiver uma mina, então o jogo termina. Se, por outro lado, o quadrado não contiver uma mina, uma de duas coisas poderá acontecer:

* Um número aparece, indicando a quantidade de quadrados adjacentes que contêm minas;
* Nenhum número aparece. Neste caso, o jogo revela automaticamente os quadrados que se encontram adjacentes ao quadrado vazio, já que não podem conter minas;
* O jogo é ganho quando todos os quadrados que não têm minas são revelados.

Opcionalmente, o jogador pode marcar qualquer quadrado que acredita que contém uma mina com uma bandeira, bastando para isso clicar e segurar por um tempo sobre o quadrado. O jogador tem um número limitado de bandeiras que poderá colocar, sendo esse limite igual ao número de minas.

O jogador poderá alterar a dificuldade do jogo clicando sobre a bandeira no cabeçalho, sendo as seguintes:
* Fácil: 10% de minas
* Normal: 20% de minas
* Difícil: 30% de minas

# Imagem do Jogo

![Imagem do Jogo](/mines_app.jpg?raw=true "Campo Minado")