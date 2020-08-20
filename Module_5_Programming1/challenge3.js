//Challenge 3 First Name Last Name

let names = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];
const firstName = [];
const lastName = [];
for (let i = 0; i < names.length; i++) {
    let firstNlast = names[i].split(" ");
    firstName.push(firstNlast[0])
    lastName.push(firstNlast[1])

}
console.log(firstName);
console.log(lastName);