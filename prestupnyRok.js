// Přestupný rok
/*
Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.
*/

const isLeapYear = (year) => {
    if ((validator.isInt(yearInputStr)) && (yearInputStr.length === 4)) {
        if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0) ||
            (year % 4 === 0) && (!(year % 100 === 0))) {
            return true
        }
    } return false
}

let yearInput = 2008
let yearInputStr = String(yearInput)
console.log(isLeapYear(yearInput))

