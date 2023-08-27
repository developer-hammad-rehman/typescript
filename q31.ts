let currentuser = ["hammad","rehman" ,"zubair"]
let newuser = ["hammad","rehman","anas"]
for (let i = 0 ; i <= newuser.length ; i++){
    if (newuser[i] == currentuser[i]){
        console.log("USER NAME ALERADY TAKEN")
    }
    else{
        console.log("USER NAME AVALIBLE")
    }
}