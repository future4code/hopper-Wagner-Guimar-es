ˋˋˋ function contaOcorrencias(arrayDeNumeros, numeroEscolhido) { // Escreva seu código aqui let contadorNum = 0 let i for (i=0; i < arrayDeNumeros.length ; i++){ if (arrayDeNumeros[i]===numeroEscolhido){ contadorNum=contadorNum+1 } } if(contadorNum!=0){return O número ${numeroEscolhido} aparece ${contadorNum}x

} else{return 'Número não encontrado'}

}