//Exercícios de interpretação de texto

//Exercício-01

//O código fala que o valor da variável "Valor" é igual a zero, cria uma outra variável dentro da variável "Valor" chamada de "i" também com valor de zero, e toda vez que ele ler o código ele vai dar o resultado até o valor da variável valor ser maior que 5.

//Exercício-02

//letra - a = Será impresso no console.log todos os números maiores que 18.  19, 21, 23, 25, 27 e 30.

//Letra - b = daria pra criar uma variável  usar o comando indexOf para acessar o índice de cada item do array.

//Exercício-03

//Letra - a = será impresso no console 4 linhas a primeira com 1 * a segunda linha com 2 * a terceira com 3* e a quarta linha com 4 *

//Exercícios de escrita de códigos

// //Exercíci-01

// let bichinhos = 1;
// let pergunta1 = Number(prompt(`Quantos animais você tem?`))
// console.log(`Você tem ${pergunta1} animais`)

// while(bichinhos <= pergunta1) {
//     pergunta2 = prompt(`Informe os nomes!`)
//         console.log(pergunta2)
//         bichinhos++

// } if (pergunta1 === 0) {
//     alert(`Que pena! Você pode adotar um pet!`)
//     console.log(`Que pena! Você pode adotar um pet!`)
// }

//Exercício-02

//A)

//let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// for (let indice in arrayOriginal) {
//   console.log(arrayOriginal[indice]);
// }

//B)
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// for (let indice in arrayOriginal) {
//   console.log(arrayOriginal[indice]/10);
// }

//C)

// const arrayPar = []
// for (let indice of arrayOriginal){
//     if((indice%2)===0){
//         arrayPar.push(indice)
//     }
// }
// console.log(arrayPar)

//D)


// const arrayString = [];
// for (let indice of arrayOriginal) {
//   arrayString.push(
//     `O elemento do índex ${arrayOriginal.indexOf(indice)} é: ${indice}`
//   );
// }
// console.log(arrayString);


//E)

// let maxNumero = 0
// for (let index of arrayOriginal){
//     if(index > maxNumero){
//         maxNumero= index
//     }
// }
// let MinNumero = maxNumero
// for(let i = 0; i < arrayOriginal.length-1; i++){
//     if(MinNumero>arrayOriginal[i]){
//         MinNumero = arrayOriginal[i]
//     }
// }
// console.log(`O maior número é ${maxNumero}, e o menor número é ${MinNumero}`)
