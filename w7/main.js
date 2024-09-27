import { renderTbl, renderTblHeading } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./carbonFootprint.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function start(first, last, houseHoldMembers, houseSize) {
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
        name: `${first} ${last}`,
        houseM: houseHoldMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        houseSPTS: houseSizePTS,
        cfpTotal: total,
    });
}

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(firstName, lastName, houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    //displayOutput();
    renderTbl(cfpData);
    FORM.reset();
});

// I don't think it is working because the apartment score isn't adding to the total for some reason

// for better accuracy