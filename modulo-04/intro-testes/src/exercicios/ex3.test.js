import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {

    test("retorna true pra [1, 1, 2]", () => {
        const resultado = checaItensDuplicados([1, 1, 2]);

        expect(resultado).toEqual(true);
    })

    test("retorna true pra ['a','a','b']", () => {
        const resultado = checaItensDuplicados(['a', 'a', 'b']);

        expect(resultado).toEqual(true);
    })

    test("retorna false pra [1, 2, 3]", () => {
        const resultado = checaItensDuplicados([1, 2, 3]);

        expect(resultado).toEqual(false);
    })

    test("retorna false pra ['string','number','boolean']", () => {
        const resultado = checaItensDuplicados(['string', 'number', 'boolean']);

        expect(resultado).toEqual(false);
    })

    test("retorna false pra []", () => {
        const resultado = checaItensDuplicados([]);

        expect(resultado).toEqual(false);
    })

});
