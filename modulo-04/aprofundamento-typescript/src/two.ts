type Statistics = {
  maior: number;
  menor: number;
  media: number;
};

function getStatistics(numeros: number[]): Statistics {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

  let sum: number = 0;

  for (let num of numeros) {
    sum += num;
  }

  const statistics: Statistics = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: sum / numeros.length,
  };

  return statistics;
}

// a)
// input: array de numeros
// output: objeto

// b)
//numbers, arrays de numeros e objetos

// c)
type ShowData = {
  numeros: number[];
  getStatistics: (numeros: number[]) => Statistics;
};
