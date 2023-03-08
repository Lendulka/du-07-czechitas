// Výplňořez
/*
Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr len kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.
*/

const fillcut = (str, len) => {
    if ((validator.isInt(lenStr)) && (str.length > 0) && (len > 0)) {
        if (str.length > len) {
            return (str.slice(0, len))
        } else if (str.length < len) {
            return (str.padStart(len, '.'))
        } else {
            return str
        }
    } return false
}

let str = 'lendulka'
let len = 6
let lenStr = String(len)
let cutting = (fillcut(str, len))
console.log(cutting)