// function sayHello(name) {
//     alert("Hello " + name);
// }
// console.log(Rom);


// const addEm = (a, b, c) => {
//     console.log(a + b + c);
// };
// addEm(1, 2, 3);

// const addEmUp = (x, y) => {
//     return x + y;
// };



// let addedUp = addEmUp(1, 2);
// const total = addEmUp(addedUp, 3);
// console.log(total)

// const addThree = (x, y, z) => {
//     return addEmUp(x, y) + z;
// }

// addEmUp(1, 2 + 3);

const Juno = {
    courses: 6,
    age: 10,
    teachers: 5,
    mentors: 10,
}

console.log(Juno);

const student = {
    id: "matrix",
    name: "Keanu Reeves",
    age: 55,
    gpa: 2.5,
    location: "Universe"
}

const {
    id,
    name,
    age,
    gpa,
    location
} = student;

console.log(`The student ${name} (${id}) is ${age} 
years old. He has a GPA of ${gpa} and is from ${location}.`)