/*
a)
const minhaString: string = 20

Da erro: tipo number nao pode ser atribuido a um tipo stringer

b)
const meuNumero: number | string = 20

usando o operador lógico OU

c)
const People1: {name: string, age: number, favColor: string} = {
    name: "",
    age: 39,
    favColor: ""
}

const People2: {name: string, age: number, favColor: string} = {
    name: "",
    age: 39,
    favColor: ""
}

const People3: {name: string, age: number, favColor: string} = {
    name: "",
    age: 39,
    favColor: ""
*/


type People = {
  name: string;
  age: number;
  favColor: Colors;
};

// d)
enum Colors {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}
