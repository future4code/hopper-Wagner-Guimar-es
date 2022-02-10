/*  Exercícios-de-interpretação-de-código

    Exercício-01
   
    a. = false
    b. = false
    c. = true
    d. = boolean
*/

/*Exercício-02 =será impresso no console uma conta aleatória porque a variável não foi especificada como Number.

    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
*/

//Exercício-03

//faltou converter a variável para Number

//  Exercício-de-escrita-de-código

    /*Exercício-01

    const idadeDoUsuario = Number(prompt("Qual a sua idade?"))
    const bfUsuario = Number(prompt("Qual a idade do seu melhor amigo?"))

    console.log("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuario>bfUsuario)
    console.log("A diferença de idade entre você e seu melhor amigo é de", idadeDoUsuario-bfUsuario)
*/
    
/* Exercício-02

    const numeroPar = Number(prompt("Por favor, Insira um número par"))
       const restoDaDivisao = Number(`${numeroPar/2%2}`)
       console.log("seu número divido por 2 é igual a", numeroPar/2)
       console.log("o resto da minha divisão é igual a", restoDaDivisao)
*/

/*  Exercício-03 imprimindo no console e testando imprimir no alert

    const userAge       =   Number(prompt("Insira sua idade!"))
    console.log(`sua idade em meses é de ${userAge}`)
    const ageInMonth    =   Number(alert(`sua idade em meses é de ${userAge*12}`))
    console.log(`sua idade em meses é de ${userAge*12}`)
    const monthInDays   =   Number(alert(`sua idade em dias é de ${userAge*12*30} `))
    console.log(`sua idade em dias é de ${userAge*12*30} `)
    const daysInHours   =   Number(alert(`sua idade em horas é de ${userAge*12*30*60}`))
    console.log(`sua idade em horas é de ${userAge*12*30*60}`)
*/

/*.Exercícios-04

const firstNumber = Number(prompt("Por favor, informe um número de 1 a 100!"))
const secondNumber = Number(prompt("agora informe seu número da sorte!"))

console.log("O primeiro número é maior que o segundo?", firstNumber>secondNumber)
console.log("O primeiro número é igual ao segundo?", firstNumber==secondNumber)
console.log("O primeiro número é divisível pelo segundo?",firstNumber%secondNumber ==0)
console.log("O Segundo número é divisível pelo primeiro?", secondNumber%firstNumber ==0)
*/

//Desafio

/*      Fahrenheit-to-Kelvin 
        KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

        Celsius-to-Fahrenheit
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
*/

/*Exercício-01

//letra-a
    const fToKelvin = (`${(77-32)*(5/9) + 273.15}`)
    console.log("letra a:", "O valor de 77F em Kelvin é igual a",fToKelvin)

//letra-b
    const cToFahrenheit = (`${(GRAUS_FAHRENHEIT) = (80)*(9/5) + 32}`)
    console.log("Letra b:","O valor de 80C em Fahrenheit é igual a", cToFahrenheit)

//letra-c-parte-01

    const letraC = (`${(GRAUS_FAHRENHEIT) = (CELSIUS)*(9/5) + 32}`) //C in F
    const letraC2 = (`${(KELVIN) = (86 - 32)*(5/9) + 273.15}`) //C in K 

//letra-c-parte-02

    console.log("Letra C parte 1:","O valor de 30C em Fahrenheit é igual a", letraC) // 86F
    console.log("letra C parte 2:","O valor de 30C em Kelvin é de", letraC2 ) // 303K
*/

/*letra-d
    const boasVindas = alert("Bem vindo ao seu conversor de temperatura!")
    const celsius01 = Number(prompt("Insira uma temperatura em Graus Celsius (Somente o número)." ))
    
        const celsiusInF = Number(alert(`${celsius01}C em Fahrenheit é igual a ${(celsius01)*(9/5) + 32} F`))
        const resultadoC = Number(`${(celsius01)*(9/5) + 32}`)

        Obs: não estava conseguindo converter o alert em Number, então dupliquei a variante sem o alert para conseguir usar nos cálculos.

        const celsiusinK = Number(alert(`${celsius01}C em Kelvin é igual a ${(resultadoC - 32)*(5/9) + 273.15}K`))
    */

/*Exercício-02

    //Quilowatt-hora = R$0.05 - Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

    const consumo = Number(prompt("Insira o seu consumo mensal em Quilowatts, (Somente o número)"))
    const quilowatts = 0.05
    console.log("valor inserido =", consumo)

    const calculoConsumo = Number(`${quilowatts*consumo}`) //14 reais
    const desconto15 = (`${calculoConsumo * 0.15}`) //14*0.15
    console.log("desconto de R$", desconto15)    

    console.log(`total a ser pago já incluso o desconto de 15% R$ ${calculoConsumo - desconto15}`)
    const descontAlert = alert("Parabéns você ganhou 15% de desconto" )
    const consumoAlert = alert(`Valor a ser pago com o consumo de ${consumo} kW/hora é de: R$ ${consumo*0.05} Reais, com o cupom de 15% de desconto o valor vai para - R$ ${calculoConsumo - desconto15} Reais.`)
*/

//Exercícios-03

// 1 libra = 0.45kg

const libra = 0.45 //kg
const QuantidadeLibras = 20

console.log(`${QuantidadeLibras}lb equivalem a ${QuantidadeLibras * libra} kg`) 

// 1 onça = 0,0283

const onca = 0.0283
const quantidadeOnca = 10.5

console.log(`${quantidadeOnca}oz equivalem a ${quantidadeOnca * onca} kg`)

// 1 milha = 1609

const milha = 1609
const quantidadeDeMilhas = 100

console.log(`${quantidadeDeMilhas}mi equivalem a ${quantidadeDeMilhas * 1609} m`)

// 1 ft = 0,3048

const ft = 0.3
const quantidadeDeFt = 50

console.log(`${quantidadeDeMilhas}ft equivalem a ${quantidadeDeFt * ft} m`)

// galão = 3.7

const galao = 3.7
const quantidadeDeGalao = 103.56 

console.log(`${quantidadeDeGalao}gal equivalem a ${quantidadeDeGalao * 3.7} l`)

//1 xícara de chá = 240ml 

const xicara = 0.240
const quantidadeDeXicara = 450

console.log(`${quantidadeDeXicara}xic equivalem a ${quantidadeDeXicara * 0.240} l`)
