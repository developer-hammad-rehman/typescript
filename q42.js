"use strict";
// orignal array
let orignal_Array = ["hammad", "ubaid", "anas"];
function show_magicians1() {
    for (let i = 0; i < orignal_Array.length; i++) {
        console.log(orignal_Array[i]);
    }
}
show_magicians1();
console.log("orginal array is not changed\n");
// chaged array
let chaged_Array = ["hammad", "ubaid", "anas"];
function make_great1() {
    for (let i = 0; i < chaged_Array.length; i++) {
        console.log(`this ${chaged_Array[i]} is greate magician`);
    }
}
make_great1();
console.log("this is changed array");
