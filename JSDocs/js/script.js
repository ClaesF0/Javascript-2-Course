/**
 * Add two numbers together 
 * */

function addNumbers(a, b) {
    return a + b;
}

addNumbers();

/**
 * 
 * display a greeting message to the user
 */

function greeting() {
    return `<span>Hello Banana</span>`;
}

greeting();

// Example 3.
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @returns sum of three numbers
 */

/**
 * Add Three numbers together
 * @param {number} a First Value
 * @param {number} b Second Value
 * @param {number} c Third Value
 * **/
function addThreeNumbers(a, b, c) {
    return a + b +c;
}

addThreeNumbers(12,20,90);

//Example 4. Return

///**
// * @return {dataType} returnDescription **/

/**
 * display cats names
 * @param {string} cat1 First Value
 * @param {string} cat2 Second Value
 * @param {string} cat3 Third Value
 * @param {string} cat4 Fourth Value
 * @returns {string} List of cat names
 */

function addFourCats(cat1, cat2, cat3, cat4){
    return `<ul>
                <li>${cat1}</li>
                <li>${cat2}</li>
                <li>${cat3}</li>
                <li>${cat4}</li>
            </ul>`
}

addFourCats("hesham", "andy", "shown", "lira");

// Example 5. Making cases / examples in JSDocs

// @example

/**
 * Add Three numbers together
 * @param {number} a First Value
 * @param {number} b Second Value
 * @param {number} c Third Value
 * @param {number} d Fourth Value
 * @return {number} Sum of numbers
 * @example
 * 
 * const a = 20;
 * const a = 80;
 * const a = 1;
 * const a = 9;
 * const sum = addFourNumbers(a,b,c,d);
 * Expect sum to be 110
 **/
 function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

addFourNumbers(20,80,1,9);

// Optional Parameters

// /**
//  * @param {dataType} [optionalParamName] optionalParamNameDescription
//  */

/**
 * Multiply two numbers together
 * @param {number} a First Value
 * @param {number} [b] Second Value
 * @returns {number} Multiplication of number
 */
function multiplyNumbers(a,b = 10){
    return a * b;
}
multiplyNumbers(1);

/**
 * Adds two numbers
 * @typedef {(number | string)} NumberLike
 */

function addTwoDigits(a,b){
    return a+b;
}

addTwoDigits();

//complex objects

//example 8.

// /**
//  * 
//  * @param {object} param0 
//  */

// /**
//  * 
//  * @param {{name: string, role: string}} loggedInUserObject 
//  */

/**
 * @param {Object} userObject drgion
 * @param {string} userObject.name navn
 * @param {string} userObject.name rolle 
 */

function handleUserLogin({name, role}){
    loginUserWithToken();
}

function loginUserWithToken(){

}

//node_modules/jsdoc/jsdoc.js js/script.js

handleUserLogin();

const userLoginData = {
    name: "Hesham",
    role: "to be teacher"
}

console.log(userLoginData);
console.log(userLoginData.name);