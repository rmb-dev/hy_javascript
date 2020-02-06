// const musicArray = [
//     "do",
//     "re",
//     "mi",
//     "fa",
//     "sol",
//     "la",
//     "ti",
//     "do"
// ];
// musicArray[3] = "safi";
// console.log(musicArray[3]);

// const student = {
//     name: 'Sam',
//     age: 26,
//     height: 120,
//     getHeightInInches: function () {
//         return student.height * 0.393701; // converts CM to Inches
//     }
// }
// const heightIs = student.getHeightInInches();
// console.log(heightIs);

// const clothing = {
//     socks: 34,
//     shoes: 2,
//     pants: 3
// }

// for (let item in clothing) {
//     console.log(`I have ${clothing[item]} ${item}`);
// }

// const inventory = {
//     apples: 2,
//     oranges: 3,
//     bananas: 6,
//     milk: 2
// }

// for (let item in inventory) {
//     console.log(`We have ${inventory[item]} ${item} in stock.`);
// }

// console.log(`We have ${inventory.apples} apples ${inventory.oranges} oranges ${inventory.bananas} bananas ${inventory.milk} milk`)

// let oneString = '';
// for (let item in inventory) {
//     oneString += `${inventory[item]} ${item} `;
// }
// console.log(`We have ${oneString}in stock.`);

// for (let item in inventory) {
//     console.log(item);
// }

// When we created the new variable objCopy, we actually copied the reference to the same object we created originally. 
// When we make changes to objCopy, we are actually referencing the same object that is stored in obj. 
// Both variables are still pointing to the same object!
// This is important to remember especially when passing objects as arguments to functions. 
// Be extra careful that you don't accidentally modify an object outside of the function.


// const myBasket = {
//     apples: 1,
//     increment: function () {
//         this.apples += 1
//     }
// }

// myBasket.apples;
// // 1
// myBasket.increment();
// myBasket.apples;
// // 2

const raptors = {
    location: "Toronto",
    sport: "basketball",
    league: "NBA",
    players: {
        captain: "Kyle Lowry",
        MVP: "Kawhi Leonard"
    }
};

console.log(Object.entries(raptors.players));
console.log(Object.keys(raptors.players));
console.log(Object.values(raptors));

const leafs = Object.assign({
    sport: "hockey",
    season: "2019/20"
}, raptors);

leafs.sport = "hockey";
leafs.league = "NHL";
leafs.players.captain = "Austen Matthews";
console.log(raptors);
console.log(leafs);