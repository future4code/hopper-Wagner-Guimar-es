//---Exercicio de interpretação de código---

//Número 1.a - irá imprimir em 3 arrays diferentes o nome e apelido dos usuários;

//Número 2.a - irá imprimir um array somente com os nomes informados no array;

//Número 3.a - irá imprimir um array com todos os itens que não sejam === "Chijo";



//---Exercício de Escrita de Código---

//---------- Exercicio-01 ----------//


const cachorrosDosClientes = [
    { nome: 'Valentina', raca: 'Pinscher' },
    { nome: 'Gustavinho', raca: 'Salsicha' },
    { nome: 'Felipe', raca: 'Vira-Lata' },
    { nome: 'Jonatha', raca: 'Poodle' },
    { nome: 'Caramelo', raca: 'Pitbull' },
    { nome: 'Arthur', raca: 'Salsicha' },
    { nome: 'Linconl', raca: 'Poodle' },
]

//Número 1.a-   Crie um novo array que contenha apenas o nome dos doguinhos.


const cachorrosNomes = cachorrosDosClientes.map((cachorro) => {
    return cachorro.nome
})
console.log(cachorrosNomes)


//Número 1.b-   Crie um novo array apenas com os cachorros salsicha.


const cachorroSalsicha = cachorrosDosClientes.filter((salsicha) => {
    return salsicha.raca === "Salsicha"
})
console.log(cachorroSalsicha)


//Número 1.c- Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"


const descontoParaPoodle = cachorrosDosClientes.filter((desconto10) => {
    return desconto10.raca === "Poodle"
})

descontoParaPoodle.map((cachorro) => {
    console.log(
        `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}`
    )
})

//---------- Exercicio-02 ----------//

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//Número 2.a -  Crie um novo array que contenha apenas o nome de cada item;

const itensNames = produtos.map((cadaItem) => {
    return cadaItem.nome
})

console.log(itensNames)

//Número 2.b - Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles;

const desconto5 = produtos.map((desconto5) => {
    return {
        nome: desconto5.nome,
        totalDoDesconto: ((desconto5.preco / 100) * 95).toFixed(2)


    }
})
console.log(desconto5)

//Número 2.c - Crie um novo array que contenha apenas os objetos da categoria Bebidas;

const bebidasProduto = produtos.filter((bebidas) => {
    return bebidas.categoria === "Bebidas"
})

console.log(bebidasProduto)

//Número 2.d -  Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê";


const somenteYpe = produtos.filter((produtosYpe) => {
    return produtosYpe.nome.includes('Ypê')
})

console.log(somenteYpe)

somenteYpe.map((item) =>
    console.log(`Compre ${item.nome} e pague R$${item.preco.toFixed(2)}!`)
)

//---Desafios---//

//Desafio A - Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética;


const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

const pokemonsEmOrdem = pokemons.map((ordemAlfabetica) => {
    return ordemAlfabetica.nome

})
console.log(pokemonsEmOrdem.sort())

//Desafio B - Crie um novo array apenas com os tipos dos pokémons, sem repetição;

//O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.

const tiposPokemon = pokemons.map((pokemonsNaoReptidos) => {
	return pokemonsNaoReptidos.tipo
})
const tirarIguais = (tipo) => {
	return [...new Set(tipo)]
}
const tiposDePokemonsUnicos = tirarIguais(tiposPokemon)
console.log(tiposDePokemonsUnicos)


























//-------------------------fim-------------------------//

