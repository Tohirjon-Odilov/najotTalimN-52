'use strict';

let name = prompt("Your name", "John");
let surname = prompt("Your surname", "Doe");
let age = prompt("Your age", "25");
let city = prompt("Your city", "New York");
let isStudent = confirm("Are you a student?");
let isDeveloper = confirm("Are you a developer?");
let skills = prompt("Your skills", "JavaScript, HTML, CSS, PHP");

console.log(`Name: ${name}` + `\Surname: ${surname}` + `\nAge: ${age}` + `\nCity: ${city}` + `\nIs student: ${isStudent}` + `\nIs Developer: ${isDeveloper}` + `\nSkills: ${skills}`);