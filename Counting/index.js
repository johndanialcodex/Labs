
// Use a for loop to log numbers from 1 to 10 

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// loop to count down, logging numbers from 10 to 1.

for (let i = 10; i >0; i-- ) {
    console.log(i)
}

// Repeat the exercise with a while loop. 1 - 10

let i = 0

while (i < 10) {
    i++
    console.log(i)
}
console.log("this is the numebr " + i)

// Repeat the exercise with a while loop. 10 - 1

while (i >= 1) {
    console.log(i)
    i--
}

console.log("Do while")

// Repeat with a do while loop.

let countTotal = 1

do {
    console.log(countTotal)
    countTotal++
} while (countTotal <= 10);

console.log("this is the end " + countTotal)

do {
    countTotal--
    console.log(countTotal)
   
} while (countTotal >= 2);



// Create this array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use a for…of loop to loop through the array and log all the numbers. (Note: we’re not asking you to also count down on this one.)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const element of numbers) {
    console.log(element)
}



// Extended Challenge: Given any string, use a loop to add padding (extra spaces) to the front to make the string ten characters long. For example, given the string “planet”, log “    planet” (add four spaces), and for the string “headlamp”, log “  headlamp” (add two spaces).


let nameString = "danial";
let extraSpac = " ";
let addedSpace = 0
let targetLength = 10;

while (nameString.length < targetLength) {
    nameString += extraSpac; 
    addedSpace ++
}
console.log(nameString);         
console.log(nameString.length);
console.log(addedSpace)
console.log(extraSpac.repeat(addedSpace) + nameString)
