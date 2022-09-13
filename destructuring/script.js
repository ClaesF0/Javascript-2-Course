//D E S T R U C T U R I N G

// const {
//     /* properties here */ 
// } = objectName;

//for example
// const { property1, property2} = objectName;

//example 1
//destructuring from objects

// const { } = objectName

// example 2
// dot notation
// const person = {
//     firstName: "Uzo",
//     lastName: "Uzolastname",
//     country: "NG"
// }
// 
// const greeting = `Hello I am ${person.firstName} ${person.lastName} and I am from ${person.country}`;
// console.log(greeting);

// const person = {
//     firstName: "Uzo",
//     lastName: "Uzolastname",
//     country: "NG"
// }// 

// const {firstName, lastName, country} = person;
// const greeting = `Hello I am ${firstName} ${lastName} and I am from ${country}`
// console.log(greeting);


//IN ORDER TO SIMPLIFY THIS
 function greetUsers(userObject){
     const{firstName, country} = userObject;
     console.log(`Hello ${firstName} from ${country} welcome.`);
 }
 // log: Hello Hesham from Egypt welcome
 
 const user = {
     firstName: "Hesh",
     country: "Egypt",
 }

// YOU CAN WRITE THIS
function greetUsersTwo({firstName,country}){ 
    console.log(`Hello ${firstName} from ${country} welcome.`);
}
// log: Hello Hesham from Egypt welcome

const userTwo = {
    firstName: "Hesh",
    country: "Egypt",
    age: "31",
    email: "hesham@fgsfds.com",
    job: "developer",
}

greetUsersTwo(user);

//destructuring in arrays

const people = [
    {
        name: "hesh",
        age:"31",
        score:13
    }, {
        name: "carl",
        age:"31",
        score:3
    }, {
        name: "Uzo",
        age:"31",
        score:20
    }, {
        name: "Emil",
        age:"31",
        score:10
    }
]
//rule or condition score is >=5 (greater or equal to five)
// THE FOLLOWING MAY BE WRITTEN AS FROM LINE 98

// const winners = people.filter((currentItem) => {
//     if (currentItem.score >= 5) {
//         return true;
//     }
// });
// 
// console.log(winners);
// console.table(winners);
// LIKE THIS
const winners = people.filter(({score}) => {
    if (score >= 5) {
        return true;
    }
});

console.log(winners);
console.table(winners);

//DOING DESTRUCTURING FROM ARRAY
// const [
//     //values here
// ] = arrayName;
// 
// const [value1, value2]= arrayName;

//EXAMPLE 1, DESTRUCTURING ARRAYS
                      //0   1  2   3   4   5 indexes
const streetNumbers = [12, 30, 40, 50, 1, 54];
//assigning indexes to a variable
// 'x' will be the index of 0
// 'y' will be the index of 1

const [x, y] = streetNumbers;
console.log(x, y);
//logs 12 and 30

const streetNumbersTwo = [12, 30, 40, 50, 1, 54];
//assigning indexes to a variable
// 'x' will be the index of 0
// 'y' will be the index of 1
// 'z' will be the index of 2

const [xTwo, yTwo, zTwo] = streetNumbersTwo;
console.log(xTwo, yTwo, zTwo);
//logs 12 30 40

//create a string array of names which contains 4 names
// and then destructure the first three names

// const names = ["Hesh", "Linda", "Alex", "Fariad"];
// 
// const [name1, name2, name3] = names;
// console.log(name1, name2, name3);

const names = ["Hesh", "Linda", "Alex", "Fariad", "Yasmin", "Aladdin"];

const [name1, name2, name3, ...others] = names;
console.log(name1, name2, name3);
console.log(others)
// IMPORTANT REMEMBER THE THREE DOTS
// this above is called "spread operator", 
// this will give the rest of array 
// IMPORTANT REMEMBER THE THREE DOTS

// SKIPPING FROM THE ARRAY
//lets say you have an array of numbers
              //0  1  2   3   4 indexes
const values = [3, 4, 56, 7, 2];

// const [first, second, third] = values;
// console.log(first, second, third);
//will log 3, 4 and 56

//what if i want to skip 
const [first, , third, , fifth] = values;
console.log(first, third, fifth);
// will log 3,56 and 2

// const myCat = {
//     name: "Handsome",
//     age: "10",
//     breed: "Egyptian Mau"
// }
// 
// const {name, age, breed} = myCat;
// console.log(`My cats name is ${name}, its age is ${age} years old, and the breed is ${breed}`);

// in order to change a key then this: 

const myCat = {
    name: "Handsome",
    age: "10",
    typerrr: "Egyptian Mau"
}

const {name, age, typerrr:breed} = myCat; //<- IN THIS LINE, 
//THIS IS CALLED NORMALISING
console.log(`My cats name is ${name}, its age is ${age} years old, and the breed is ${breed}`);
