
//Lembrar de chamar a função sempre com uma ação 


// ------ Regras do jogo ------ //
    
//     As regras do jogo são as seguintes:
    
//     - Existem 2 jogadores: o usuário e o computador.
//     - Os jogadores usam um baralho com muitas cartas. As cartas têm um número (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J , Q, K) e um naipe (Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)). Por exemplo, uma carta do baralho é o dois de Paus (2♣️). Existem 52 possibilidades de cartas diferentes (13 números e 4 naipes).
//     - Os jogadores compram cartas do baralho. Ao comprar uma carta do baralho, ela pode ser de qualquer uma das 52 cartas, com probabilidade igual.
//     - As cartas tem um valor de acordo com seu número (a carta 4♣️ tem valor 4, e a carta 9♦️ tem valor 9). As cartas J, Q e K tem valor 10, e a carta A tem valor 11.
//     - O jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. A pontuação de cada jogador é a soma do valor das suas cartas.
//     - O jogador com a maior pontuação ganha a rodada.

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Podemos começar o jogar?")) {

  let userCard = [];
  let somaUserCard = 0;

  for (let i = 1; i <= 2; i++) {
    const carta = comprarCarta();
    userCard.push(carta.texto);
    somaUserCard += carta.valor;
  }
  console.log(`Usuário - cartas: ${userCard} - pontuação ${somaUserCard}`);

  let computerCard = [];
  let somaComputerCard = 0;
  for (let i = 1; i <= 2; i++) {
    const carta = comprarCarta();
    computerCard.push(carta.texto);
    somaComputerCard += carta.valor;
  }
  console.log(`Computador - cartas: ${computerCard} - pontuacao ${somaComputerCard}`);

  if (somaUserCard > somaComputerCard) {
    console.log("Você ganhou, Parabéns!!! 😍 " );
  } else if (somaUserCard < somaComputerCard) {
    console.log("O computador ganhou!!! 😢");
  } else {
    console.log("Empate! 🤔");
  }

} else {
  console.log("O jogo acabou!");
}