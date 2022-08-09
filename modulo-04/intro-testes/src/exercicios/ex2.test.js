import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {

  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);

  });

  it("retorna true para 'arara'", () => {

    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);

  })
  
  it("retorna true para 'socorram-me subi no onibus em marrocos'", () => {

    const ehPalindromo = checaPalindromo("socorram-me subi no onibus em marrocos");
    expect(ehPalindromo).toEqual(true);

  })

  it("retorna true para 'asa'", () => {

    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);

  })


  // A função falha na hora de escrever strings q contenham caracteres especiais ou frases com espaçamento. Por exemplo: //

  it("retorna true para 'a diva em argel alegra-me a vida'", () => {

    const ehPalindromo = checaPalindromo("a diva em argel alegra-me a vida");
    expect(ehPalindromo).toEqual(true);
  })

});
