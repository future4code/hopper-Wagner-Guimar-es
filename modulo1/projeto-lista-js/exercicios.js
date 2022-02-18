// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  let altura = Number(prompt("Qual a altura?"))
  let largura = Number(prompt("Qual a largura?"))
  let areaTotal = altura*largura
  console.log(areaTotal) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
  let idade = anoAtual-anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
   return (`${peso / (altura * altura)}`)
   }



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const userName = prompt("Qual o seu nome?")
const age = prompt("Qual a sua idade?")
const email = prompt("Qual o seu e-mail?")
console.log(`Meu nome é ${userName}, tenho ${age} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const collor1 = prompt("informe sua 1 cores favoritas")
  const collor2 = prompt("informe suas 2 cores favoritas")
  const collor3 = prompt("informe suas 3 cores favoritas")


const collorArray = [collor1, collor2, collor3]
console.log(collorArray)  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) { 
const wordsInUpper = string.toUpperCase()
return wordsInUpper
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
      let prejuizo = Number(`${custo/valorIngresso}`)
      console.log(prejuizo)
      return prejuizo
  
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    const teste = (string1.length === string2.length)
    return teste 


}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  const justOne = (array.splice(0, 1))
    console.log(justOne)
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array[array.length - 1]
  }


  
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    const first = retornaPrimeiroElemento(array) 
      const last = retornaUltimoElemento(array)

  array[array.length - 1] = last
  array[0] = last
  

  return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(){


}
