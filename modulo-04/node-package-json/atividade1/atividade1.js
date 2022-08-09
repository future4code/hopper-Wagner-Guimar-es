//A-process.argv[2]

//B-
const nome = process.argv[2]
const idade = Number (process.argv[3])

console.log(nome, idade)

//C-
console.log(`Olá, ${nome}! Você tem ${idade} anos.Em sete anos você terá ${idade + 7} `)