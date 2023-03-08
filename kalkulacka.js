// Kalkulačka
/*
Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko 2, poté +, pak 3 a pak =. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme =.

Napište funkci calculate se třemi parametry number1, operation a number2, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být '+', '-', '*' nebo '/'. Funkce vrátí výsledek výpočtu pro zadanou operaci.
*/

const calculate = (number1, operation, number2) => {
    if (validator.isIn(operation, ['+', '-', '*', '/'])) {
        if (operation === '+') {
            return (number1 + number2)
        } else if (operation === '-') {
            return (number1 - number2)
        } else if (operation === '*') {
            return (number1 * number2)
        } else if ((operation === '/') && (number2 !== 0)) {
            return (number1 / number2)
        }
    } return false
}

let number1 = 12
let number2 = 6
let operation = '/'

let result = (calculate(number1, operation, number2))
console.log(result)










