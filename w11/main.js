import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import { FP } from "./fp.js";

const start = (first, last, houseHoldMembers, houseSize, foodChoice) => {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const foodPTS = determinefoodPts(foodChoice);
    const total = houseHoldPTS + houseSizePTS + foodPTS;
    cfpData.push({
        firstName: first,
        lastName: last,
        houseM: houseHoldMembers,
        houseS: houseSize,
        foodC: foodChoice,
        houseMPTS: houseHoldPTS,
        houseSPTS: houseSizePTS,
        foodCPTS: foodPTS,
        cfpTotal: total,
    });
}

// const start = (...i) => {
//     const houseHoldPTS = determineHouseHoldPts(i[2]);
//     const houseSizePTS = determineHouseSizePts(i[3]);
//     const total = houseHoldPTS + houseSizePTS;
//     cfpData.push({
//         firstName: i[0],
//         lastName: i[1],
//         houseM: i[2],
//         houseS: i[3],
//         houseMPTS: houseHoldPTS,
//         houseSPTS: houseSizePTS,
//         cfpTotal: total,
//     });
// }

renderTbl(cfpData);

// Function to validate a single field
const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);
    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

FORM.addEventListener('submit', e => {
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        // start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
        const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.food.value);
        // fpObj.houseHoldPoints();
        // fpObj.houseSizePoints();
        cfpData.push(fpObj);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
    }
});

// rest operator
// const add2 = function(...a) {
//     return 2 + a[3];
// }
// 
// const result = add2(1, 2, 3, 4);

// arrow function

const add2 = a => 2 + a;


const result = add2(100);

//IIFE

const a = 3;

( a => {
    console.log("inside IIFE");
    console.log(a);
})(a);

// const me = {
//     name: "Vince",
//     hairColor: "Black",
//     location: "Home",
//     sleepScore: 95,
//     introduce: function() {
//         console.log(this)
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is at ${this.location} right now.`);
//     }
// }
// 
// const you = {
//     name: "Student",
//     hairColor: "Brown",
//     location: "Home",
//     sleepScore: 55,
//     introduce: function() {
//         console.log(this)
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is at ${this.location} right now.`);
//     }
// }
// 
// me.introduce();
// you.introduce();

// class Human {
//     constructor(name, hairColor, location, sleepScore) {
//         this.name = name
//         this.hairColor = hairColor
//         this.location = location
//         this.sleepScore = sleepScore
//     }
//     introduce() {
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is at ${this.location} and had a sleepScore of ${this.sleepScore}.`);
//     }
// }
// 
// const vince = new Human("Vince", "Black", "Home", 95);
// const jane = new Human("Jan", "Brown", "Home", 55);
// vince.introduce();
// jane.introduce();
// vince.hrv = 50;

