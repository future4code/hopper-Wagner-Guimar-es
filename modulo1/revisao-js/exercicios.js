// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
        let tamanhoArray = array.length
        return tamanhoArray
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = array.reverse()
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros(a, b) {
        return a - b;
      }
  let arrayOrdenado = array.sort(compararNumeros)
  return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = array.reduce(function(total, item) {
        if(item % 2 === 0) {
        total.push(item)
        }
        return total
        }, [])
      return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numeroParelevado = []
    for (i =0; i < array.length; i++){
       const numeroMaior = array[i]
       if (numeroMaior %2=== 0){
          numeroParelevado.push(numeroMaior * numeroMaior)
       }
    }return numeroParelevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i = 0
    let maiorNumero = -Infinity
    while (i < array.length) {
      if (array[i] > maiorNumero) {
        maiorNumero = array[i]
      }
      i++
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const numeros = {}
    function maior(num1, num2) {
      if (num1 > num2) {
        return num1
      } else {
        return num2
      }
    }
    function divisivel(num1, num2) {
      if (num1 > num2) {
        if (num1 % num2 == 0) {
          return true 
        }
        return false
      } else {
        if (num2 % num1 == 0) {
          return true
        }
        return false
      }
    }
    function dife(num1, num2) {
      if (num1 > num2) {
        return num1 - num2
      } else {
        return num2 - num1
      }
    }
    numeros.maiorNumero = maior(num1, num2)
    numeros.maiorDivisivelPorMenor = divisivel(num1, num2)
    numeros.diferenca = dife(num1, num2)
    return numeros
}

// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {
    const numeroPar = []
   for (let num = 0; numeroPar.length < n; num++ ){
      if (num %2 === 0 ){
         numeroPar.push(num)
      }
   }return numeroPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
     }
     else if (ladoA === ladoC || ladoB  === ladoA || ladoB  === ladoC ){
        return "Isósceles"
     }
     else {
       return "Escaleno"
     }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme.atores = ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
    filme = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`)    
    return filme
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima={ ...pessoa, nome: "ANÔNIMO" } 
    return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter(pessoa =>(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)) 
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter(pessoa =>(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60))
    return pessoasAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (obj of contas) {
        for (compra of obj.compras) { obj.saldoT = obj.saldoT - compra } obj.compras = []
  } return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => a.nome.localeCompare(b.nome))
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}