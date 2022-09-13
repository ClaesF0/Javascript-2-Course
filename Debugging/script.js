/*console.log("hello banana");
console.clear(); //is for clearing a console
console.warn();
console.error();
console.table();
*/

//1

/*
console.log("Mister Anderson B-|");
const name = "Banana";
console.log(name);

const responseDataOne = [
    {
        name: "hesham",
        age: "30"
    },
    {
        name: "emil",
        age: "29"
    }
];

const responseDataTwo = [
    {
        name: "hesham",
        age: "30"
    },
    {
        name: "emil",
        age: "29"
    }
];

console.table("responseDataOne: ", responseDataOne);
console.table("responseDataTwo: ", responseDataTwo);

console.log(1+2);
const sum = 1+2;
console.log("hi "+"my "+"name "+"is " +"Slim Shady "+ sum)
console.log(`my name is hesham ${sum}`)
//console.clear(); //man kan også skrive clear() i console

console.log(responseDataOne);
console.table(responseDataOne);

//console.time(); //This starts the timer
//console.timeEnd(); //This ends the timer

function counter() {
    for (let i = 0; i <= 1000; i++){
        console.log(i)
    }
}

console.time("myTimer"); //This starts the timer
counter();
console.timeEnd("myTimer"); //This ends the timer

console.time("myTimer"); //This starts the timer
counter();
console.timeEnd("myTimer"); //This ends the timer

console.time("myTimer"); //This starts the timer
counter();
console.timeEnd("myTimer"); //This ends the timer

let average = (2+4+7)/3;
console.log(average);
*/

//1
function sum(num1, num2) {
    return num1 + num2;
}

let number1 = 10;
console.log(number1);
let number2 = 20;
console.log(number2);

let total = sum(number1, number2);

console.log("total: ",total);

//make a function for calculating the average of 
//given 3 numbers
//please name this function getAverage()

function getAverage(num1, num2, num3)  {
    return (num1 + num2 + num3) / 3;
}

let myAverage = getAverage (2, 4, 5);
console.log("myAverage: ", myAverage);

const myArray = [1, 3, 4, 5];

let numberOfInstances = myArray.length;
console.log("numberOfInstances: ",numberOfInstances);

//create a function which gets the average of the numbers in
//this array

//function sumOfInstances(arr) {
 //   for (let i=0; i < myArray.length; i++) {sum += array[i];}
//}

//console.log(sumOfInstances)
/*
function getArrAverage(arr) {
 let total = 0;
 for (let i = 0; i < arr.length; i++) {
    total += arr[i];
 }
    console.log("total", total);
    const numberOfItemsInArr = arr.length;
    console.log("numberOfItemsInArr: ", numberOfItemsInArr);
    return total / numberOfItemsInArr;
}

const resultAverage = getArrAverage(myArray);
console.log("resultAverage: ", resultAverage);
*/
/*
function getCatFacts() {
    fetch("https://catfact.ninja/fact")
        .then(response => {
            return response.json();
        )}
        .then(jsonResponce => {
            console.log(jsonResponce);
    
        }).catch(error => {
        }
    }
}
*/