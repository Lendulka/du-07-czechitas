// Přestupný rok
/*
Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.
*/

const isLeapYear = (year) => {
    if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0) ||
        (year % 4 === 0) && (!(year % 100 === 0))) {
        return true
    } return false
}

console.log(isLeapYear(2023))

