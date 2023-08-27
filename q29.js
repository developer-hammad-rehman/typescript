"use strict";
let usernames = ["Ubaid", "Anas", "Admin", "Hamza"];
for (let i = 0; i <= usernames.length; i++) {
    if (usernames[i] == "Admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log("hello" + " " + usernames[i]);
    }
}
