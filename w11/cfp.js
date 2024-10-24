const determineHouseSizePts = (size = "medium") => {
    let houseSizePoints = 0;
    if (size === "large") {
        houseSizePoints = 10;
    } else if (size === "medium") {
        houseSizePoints = 7;
    } else if (size === "small") {
        houseSizePoints = 4;
    } else if (size === "apt") {
        houseSizePoints = 2;
    }
    return houseSizePoints;
}

const determineHouseHoldPts = (numberInHousehold = 1) => {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints;
}

const determinefoodPts = (foodChoice = "daily") => {
    let foodPoints = 0;
    if (foodChoice === "daily") {
        foodPoints = 10;
    } else if (foodChoice === "weekly") {
        foodPoints = 8;
    } else if (foodChoice === "balanced") {
        foodPoints = 6;
    } else if (foodChoice === "vegetarian") {
        foodPoints = 4;
    } else if (foodChoice === "vegan/fresh") {
        foodPoints = 2;
    } else if (foodChoice === "convenience food") {
        foodPoints = 12;
    }
    return foodPoints;
}

export { determineHouseSizePts, determineHouseHoldPts, determinefoodPts};