const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// inline function declaration

// let totalBatteries = batteryBatches.reduce(function sumArray(previousValue, currentValue) {
//     return previousValue + currentValue;
// });


// isolated function declaration

// let totalBatteries = batteryBatches.reduce(sumArray);

// function sumArray(previousValue, currentValue) {
//     return previousValue + currentValue;
// };



let totalBatteries = batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue);