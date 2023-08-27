"use strict";
let arr2 = ["Anas", "Hammad", "Sharjeel", "Awais"];
// adding first guest at beigning
arr2.unshift("Hamza");
// adding second guest at middle
arr2.splice(2, 0, "Fahad");
//adding the last guest at end
arr2.splice(6, 0, "Ahmed");
//sending invite to everyone
for (let x = 0; x <= 6; x++) {
    console.log(arr2[x] + " you are invited for the dinner");
}
