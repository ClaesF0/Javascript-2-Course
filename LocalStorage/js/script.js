console.log("hei")

// How to set a local storage variable
// localStorage.setItem(key, value);
// localStorage.setItem("name", "hesh");

localStorage.setItem("name", "hesh");

// How to get local storage data
// retrieving data
// getItem

const firstName = localStorage.getItem('name');
console.log(firstName);

// remove local storage item // removeItem
localStorage.removeItem('name');

//setting multiple items
localStorage.setItem("name", "Hesh");
localStorage.setItem("age", "31");
localStorage.setItem("city", "Cairo");

// make array
const dataArray = '[{"name":"Uzo","id":1234,"isStudent":true,"section":"Front-End Development"},{"name":"Claes","id":123456,"isStudent":true,"section":"Front-End Development"}]';
localStorage.setItem("users",dataArray);
console.log("users  ", dataArray);

let dataArrayNew = localStorage.getItem("users");

console.log("dataArrayNew ", dataArrayNew);
console.log("dataArrayNew ", JSON.parse(dataArrayNew));

// localStorage.clear();


//create project
//add tailwindcss
//create a toggle that will switch light and dark mode
//click will make bg dark, another click makes it light

