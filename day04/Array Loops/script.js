const bands = ["Queen", "Von Trapp Family", "Led Zeppelin", "Infected Mushroom"];

// Looping through an Array using a for loop
for (let i = 0; i < bands.length; i++) {
  console.log(bands[i])
};

//Looping through an array using the forEach method
bands.forEach((band) => {
  console.log(band)
});



const numbers = [10, 100, 25, 20];

//using the map method to create a new array of halved values
const halfNumbers = numbers.map((value) => {
  return value / 2;
});

console.log(halfNumbers);



const persons = [
  { first: 'Taylor', last: 'Swift' },
  { first: 'Ash', last: 'Ketchum' },
  { first: 'Hermione', last: 'Granger' }
];

//use the map method to create a new array featuring the full first name of the people in the persons array
const fullNameArray = persons.map((person) => {
  return person.first + ' ' + person.last
});

console.log(persons);
console.log(fullNameArray);



const names = ['Sam', 'Jamie', 'Alex', 'Andy', 'August', 'Chris', 'Dakota', 'Drew', 'Max'];

//Using the filter method to create a names array of people whose names have less than or equal to 3 characters
const shortNames = names.map((name) => {
  if (name.length <= 3) {
    return true;
  }
});

console.log(names);
console.log(shortNames);



const students = [
  {
    name: 'Pat',
    grade: 58
  },
  {
    name: 'Taylor',
    grade: 93
  },
  {
    name: 'Dale',
    grade: 80
  },
  {
    name: 'Casey',
    grade: 78
  },
  {
    name: 'Jo',
    grade: 68
  }
];

//create a new array of student objects feat. students with grades above or equal to 80
const smartStudents = students.filter((student) => {
  if (student.grade >= 80) {
    return student
  }
})

console.log(smartStudents);

//create an array of student grades above 78
const studentsAbove78 = students.filter((student) => {
  if (student.grade >= 78) {
    return student
  }
}).map((student) => {
  return student.grade
})

console.log(studentsAbove78);
