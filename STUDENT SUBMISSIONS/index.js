
/* 
1) Build Specifications:
Declare a variable named submissions that is initialized to an array with the following objects:

name: Jane, score: 95, passed: true
name: Joe, score: 77, passed: true
name: Jack, score: 59, passed: false
name: Jill, score: 99, passed: true

*/
const submissions = [
    {name: "Jane", score: 95, passed: true},
    {name: "Joe", score: 77, passed: true},
    {name: "Jack", score: 59, passed: false},
    {name: "Jill", score: 88, passed: true}
]
console.log(submissions);

/*
2) Declare a function named addSubmission
Parameter(s): array, newName, newScore
Functionality: construct an object and push it into the array. 
The object must have the same properties as the objects already in the array.
Use conditional statements to set the value for the passed property to 
true if the score is greater than or equal to 60 and false otherwise.
*/

const addSubmission = (array, newName, newScore) => {

   const newSubmission = {
        name: newName,
        score: newScore,
        passed: newScore >= 60 ? true : false
    };
array.push(newSubmission);
}
addSubmission(submissions, "johndanial", 90);

/*
3) Declare a function named deleteSubmissionByIndex
Parameter(s): array, index
Functionality: remove an object from the array at the specified index using the splice method.
*/

const deleteSubmissionByIndex = (array, index) => {

     array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 9)

/*

4) Declare a function named deleteSubmissionByName
Parameter(s): array, name
Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

*/

const deleteSubmissionByName = (array, name) => {

const index = array.findIndex (
    submissions => submissions.name === name
);

if (index !== 1) {
submissions.splice(index, 1)
}
}

deleteSubmissionByName(submissions, "Jill")

/*
5) Declare a function named editSubmission
Parameter(s): array, index, score
Functionality: update an object’s score in the array at the specified index. 
Use conditional statements to set the value for the passed property to true if the 
score is greater than or equal to 60 and false otherwise. No array method necessary.
*/

const editSubmission = (array, index, score) => {

array[index].score = score
 
array[index].passed = score >= 60? true : false

}
editSubmission(submissions, 2, 89)

/*
6) Declare a function named findSubmissionByName
Parameter(s): array, name
Functionality: return the object in the array that has the provided name. Use the find method.
*/

const findSubmissionByName = (array, name) => {

const findByName = array.find(
     submissions => submissions.name === name
    )

if (findByName) {
    console.log(findByName.name);
    return findByName;
} else {
    console.log("Name not found.");
    return null;
}
};

findSubmissionByName(submissions, "johndan")

/*
7) Declare a function named findLowestScore
Parameter(s): array
Functionality: return the object in the array that has the lowest score.
*/

const findLowestScore = (array) => {

return array.reduce ((lowestScore, currentScore) => 
    currentScore.score < lowestScore.score ? currentScore : lowestScore )
}
const lowestScore = findLowestScore(submissions)
console.log(lowestScore)

/*
Declare a function named findAverageScore
Parameter(s): array
Functionality: return the average quiz score.

*/

const findAverageScore = (array) => {
    const totalScore = array.reduce((sum, current) => sum + current.score, 0);
    const averageScore = totalScore / array.length;
    return averageScore;
}

const average = findAverageScore(submissions)
console.log("The average is " + average)

/*
9) Declare a function named filterPassing
Parameter(s): array
Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores. 
*/

const filterPassing = (array) => {
    return array.filter(submission => submission.score >= 60);
}

const filterPassingScore = filterPassing(submissions)
console.log(filterPassingScore)


/*
10) Declare a function named filter90AndAbove
Parameter(s): array
Functionality: return a new array using the filter method. 
The filter method should find objects in the array that have scores greater than or equal to 90.

*/

const filter90AndAbove = (array) => {
    return array.filter(submission => submission.score >= 90 ) 
}

const over90 = filter90AndAbove(submissions)
console.log(over90)