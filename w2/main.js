// How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint 
// Method 1

// 1. Count household members
 const myMembers = 4;
// 2. Size of home
const houseSize = 10;
// 3. Evaluate food choices
const foodChoice = 10;
// 4. Examine water consumption
const waterConsumption = 1;
// 5. Determine how many household purchases you make annually.
const householdPurchases = 6;
// 6. How much waste is produced
const producedWaste = 20;
// 7. Identify recycled waste
const recycledWaste = 12;
// 8. Tally annual transportation scores
const annualTransportation = 6;
// 9. Add up points
const cfpTotal = myMembers + houseSize + foodChoice + waterConsumption + householdPurchases + producedWaste + recycledWaste + annualTransportation;
// 10. Write JS to update the rendered html (index.html) with total footprint

document.getElementById('output').innerHTML = cfpTotal;