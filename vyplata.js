// Výplata
/*
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.
*/

const salary = (wage, hours, days) => {
    let grossWageNotRound = (wage * hours * days)
    return grossWage = Math.round(grossWageNotRound)
}

const taxed = (grossWage, taxRate) => {
    let netWageNotRound = (grossWage - (grossWage * taxRate / 100))
    return netWage = Math.round(netWageNotRound)
}

let wage = 210.44
let hours = 10.5
let days = 10
let taxRate = 15

let salaryBeforeTax = salary(wage, hours, days)
let salaryAfterTax = taxed(salaryBeforeTax, taxRate)
console.log(salaryBeforeTax, salaryAfterTax)


