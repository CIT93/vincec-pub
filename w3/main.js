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