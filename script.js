"use strict";
//1.
let submissions = [
{
  name: "Jane",
  score: 95,
  date: "2020-01-24",
  passed: true,
},
{
  name:"Joe" ,
  score: 77,
  date: "2018-05-14",
  passed: true,
},
{
  name:"Jack" ,
  score: 59,
  date: "2019-07-05" ,
  passed: false,
},
{
  name:"Jill" ,
  score: 88,
  date: "2020-04-22",
  passed: true,
}
]

//console.log(submissions);
//2.

const addSubmission = (array, newName, newScore, newDate) =>{
  let submission = {
    newName: newName,
    newScore: newScore,
    newDate: newDate,
    passed: newScore >= 60 
    }
    array.push(submission);
  }
// addSubmission(submissions, "jimothy", 59, "2020-4-20")
// console.log(submissions)

//3.

const deleteSubmissionByIndex = (array, index)=>{
  array.splice(index, 1);
};

//deleteSubmissionByIndex(submissions, 0);
//console.log(submissions);

//4.

const deleteSubmissionbyName = (array, name) =>{
 let index = array.findIndex((item)=>{
  return item.name === name;
 });
 deleteSubmissionByIndex(array,index);
}

//deleteSubmissionbyName(submissions, "Joe")
//console.log(submissions);

//5.
const editSubmission = (array, index, score) =>{
  let student = array.find((student)=>{
    return student === array[index];
  });
  student.score = score;
  student.passed = score >= 60;
};

//editSubmission(submissions, 1, 41);

//console.log(submissions);
//6.
const findSubmissionByName = (array, name) => {
  let found = array.find((student) => {
    return student.name === name;
  });
  return found;
};

//console.log(findSubmissionByName(submissions, "jimothy"))

//7.
const findLowestScore = (array) => {
  let lowest = array.forEach(())
}


8.
const findAverageScore = (array) => {
  for (let scoreSum of array) {
    scoreSum += scoreSum;
    return scoreSum
  }
  let averageScore = scoresum/array.length;
  return averageScore;
}

 console.log(findAverageScore(submissions))