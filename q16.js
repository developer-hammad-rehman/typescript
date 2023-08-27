"use strict";
let arr3 = ["Anas", "Hammad", "Sharjeel", "Awais", "Hamza", "Fahad", "Ahmed"];
for (let y = 0; y <= 5; y++) {
    console.log(arr3[y] + " Sorry I can’t invite you  to dinner");
}
arr3.splice(0, 5);
for (let z = 0; z <= 1; z++) {
    console.log(arr3[z] + " You are still invited for the dinner");
}
