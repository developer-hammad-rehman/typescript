let animals = ["Loin" , "Tiger" , "Dog"]
for(let i =0 ; i < animals.length ; i++){
    console.log(animals[i])
}
animals.forEach(function(value){
 if(value == "Dog"){
    console.log(value + " is a pet animal")
 }
 else{
    console.log(value + " is wild animal")
 }
})
console.log("Animals are multicellular."+"\n"+"Animals are made up of cells that do not have cell walls."+"\n"+"Animals are capable of motion in some stage of their lives")