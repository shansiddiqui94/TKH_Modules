//  Personal Budgeting App: 
let weeklyIncome = parseInt(prompt("What is your weekly weekly Income?"));
let foodCost = parseInt(prompt("foodCost"));
let housingCost = parseInt(prompt("housingCost"));
let transportationCost = parseInt(prompt("transportationCost"));
let otherCost = parseInt(prompt("otherCost"));
let want_to_save = parseInt(prompt("How much do you want to save a year?"));
let save_perYear = want_to_save / 52
console.log(save_perYear)
let total = foodCost + housingCost + transportationCost + otherCost;
let final = weeklyIncome - total
console.log(final)
if (final >= want_to_save) {
    console.log("You are on Track!")
} else {
    let toSave = save_perYear - total;
    console.log("You need to save " + toSave + " to be on track!")
}