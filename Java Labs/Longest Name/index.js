
/*


let name1 = "Johndanial"

let name2 = "Joler"

let name3 = "Jay"

if (name1.length > name2.length) {
    console.log(name1 + " has longer name")
} else if (name1 < name2) {
    console.log(name2 + " has longer name")
} else {
    console.log(name1 + " and " +name2 + " has the same length")
} 
    
*/


let name1 = "Black Panther"

let name2 = "Captain America"

let name3 = "Iron Man"


if (name1.length > name2.length & name1.length > name3.length) {
    console.log(name1 + " has longer name")
} else if (name2.length > name1.length & name2.length > name3.length) {
    console.log(name2 + " has longer name")
} else if (name3.length > name1.length & name3.length > name2.length) {
    console.log((name3 + " has longer name"))
} else if (name1.length === name2.length && name1.length === name3.length ) {
    console.log("All three names, " + name1 + ", "+ name2 + ", and "+ name3 + " are the same length")
} else if (name1.length === name2.length && name1.length !== name3.length) {
    console.log(name1 + " and " + name2 + " tie for the longest name")
} else if (name1.length === name3.length && name1.length !== name2.length) {
    console.log(name1 + " and " + name3 + " tie for the longest name")
} else {
    console.log(name2 + " and " + name3 + " tie for the longest name")
}



