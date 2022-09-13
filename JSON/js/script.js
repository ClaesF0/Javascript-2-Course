//1. Javascript to JSON

//JSON.stringify()
//example 1

const userDetails = {
    name: "Uzo",
    id: 1234,
    isStudent: true,
    section: "Front-End Development"
}

console.log("userDetails JS format ", userDetails);

const userDataJSON = JSON.stringify(userDetails);

console.log("userDetails JSON format ", userDataJSON);

// JSON.parse() convert JSON data (plain text) to JS data
const userDataBackToJS = JSON.parse(userDataJSON);

console.log("userDataBackToJS ", userDataBackToJS);

const classroomJS = {
    opendoor: true,
    lightson: false,
    temperature: "chilly"
}

console.log("Classroom details js", classroomJS);

const classroomJSON = JSON.stringify(classroomJS);
console.log("classroom details json", classroomJSON);

const classroomJSONBackToJS = JSON.parse(classroomJSON);
console.log("classroom details from json back to js", classroomJSONBackToJS);

