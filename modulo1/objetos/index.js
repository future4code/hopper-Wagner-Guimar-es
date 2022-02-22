//      Aula-Objetos


//      Exercícios-de-interpretação-de-código

//      Exercício-01

/*
        Letra-A

            -Matheus Nachtergaele
            -Virginia Cavendish
            -{canal: "Canal Brasil", horario: "19h"} 
*/

//      Exercício-02

/*
        Letra-A

            -nome: "Juca"
             idade: 3,
             raca: "SRD"

            -nome: "Juba"
             idade: 3,
             raca: "SRD"

            -nome: "Jubo"
             idade: 3,
             raca: "SRD"
*/

//      Exercício-03

/*
        Letra-A
            - false 
            - undefined 

        Letra-B
            - informando que a pessoa não é um backender
            - não tem nenhuma propriedade informando a altura da pessoa

*/


//      Exercícios-de-escrita-de-código

//      Exercício-01

/*
        Letra-A


        const batman = {
                    nome: "Bruce",
                    apelidos: ["Batman","Morcego","Playboy"]

         }
        console.log(`Eu sou ${batman.nome}, mas pode me chamar de: ${batman.apelidos}.`)


      Letra-B

        const novosApelidosBatman = {
                    ...batman,
                    apelidos: ["Homem Aranha","Lanterna Verde","Miranha"]
        }

        console.log(`Eu sou ${batman.nome}, mas pode me chamar de: ${novosApelidosBatman.apelidos}.`)
*/

//      Exercício-02

/*
        Letra-A e Letra-B


        const pessoa = {
                    nome: "Wagner",
                idade: 27,
                profissão: "Programador"
        },

        pessoa2 = {
            ...pessoa,
            nome: "Luan",
            idade: 25,
            profissão: 'Professor'
        }

        console.log(pessoa)
        console.log(pessoa2)

        console.log(`${pessoa.nome}, ${pessoa.nome.length}, ${pessoa.idade}, ${pessoa.profissão}, ${pessoa.profissão.length}.`)
        console.log(`${pessoa2.nome}, ${pessoa2.nome.length}, ${pessoa2.idade}, ${pessoa2.profissão}, ${pessoa2.profissão.length}.`)
    

//      Exercício-03

        const carrinho = [] 

        const fruta1 = {
                nome: "Abacaxi",
                disponibilidade: true
        }

        const fruta2 = {
            ...fruta1,
                nome: "Morango"
        }

        const fruta3 = {
            ...fruta1,
            nome: "Banana"
        }
        
        const frutasEmArray = (frutas) => {
                carrinho.push(fruta1,fruta2,fruta3)

        }

frutasEmArray(fruta1,fruta2,fruta3)
console.log(carrinho)

*/

//Desafios

