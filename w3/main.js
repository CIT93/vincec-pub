function determineHouseHoldPts(numberInHousehold) {
    console.log("Inside the function");
    if (numberInHousehold === 1) {
        cardonFootPoints = cardonFootPoints + 14
    } else if (numberInHousehold === 2) {
        cardonFootPoints = cardonFootPoints + 12
    } else if (numberInHousehold === 3) {
        cardonFootPoints = cardonFootPoints + 10
    } else if (numberInHousehold === 4) {
        cardonFootPoints = cardonFootPoints + 8
    } else if (numberInHousehold === 5) {
        cardonFootPoints = cardonFootPoints + 6
    } else if (numberInHousehold === 6) {
        cardonFootPoints = cardonFootPoints + 4
    } else if (numberInHousehold > 6) {
        cardonFootPoints = cardonFootPoints + 2
    }
    console.log(`Based on the number of members of the household of ${numberInHousehold} the points would be ${cardonFootPoints}.`);
}

let cardonFootPoints = 0;
// const numberInHousehold = 3;

// global scope
// forgot to commit for first message

determineHouseHoldPts(3)
determineHouseHoldPts(4)

// 2. Consider the size of your home:
// If you have a large house, then add 10 points to your score.
// If you have a medium-sized house, then add 7 points.
// If you have a small house, then add 4 points.
// If you live in an apartment, then add 2 points.

function determineHouseholdSize(sizeOfHousehold) {
    console.log("Inside the function");
    if (HouseholdSize === 1) {
        cardonFootPoints = cardonFootPoints + 10
    } else if (HouseholdSize === 2) {
        cardonFootPoints = cardonFootPoints + 7
    } else if (HouseholdSize === 3) {
        cardonFootPoints = cardonFootPoints + 4
    } else if (HouseholdSize === 4) {
        cardonFootPoints = cardonFootPoints + 2
    }
    console.log(`Based on the size of your ${sizeOfHousehold} the points would be ${cardonFootPoints}.`);
}

cardonFootPoints = 0;
const sizeOfHousehold = 1;
const HouseholdSize = 1;

determineHouseholdSize(1)
determineHouseholdSize(2)