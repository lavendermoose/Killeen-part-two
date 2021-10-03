let petName = prompt("Name your pet!")
let energyLevels = 0
let happinessLevels = 0
for(var count = 0;count<6;count++ ){

    let ActionToPerform = prompt("Feed, Pet, or Walk?")
    if (ActionToPerform.toLowerCase() =="feed"){
        energyLevels=energyLevels+2
    }
    else if(ActionToPerform.toLowerCase()=="pet"){
        happinessLevels++
    }
    else if(ActionToPerform.toLowerCase()=='walk'){
        if(energyLevels>0){
            energyLevels=energyLevels-1
            happinessLevels=happinessLevels+2
        }
        else{
            alert("Not enough energy to walk")
        }
    }
}

console.log("Pets Name:"+petName)
console.log('Energy Levels:'+energyLevels)
console.log("Hapiness Levels:"+happinessLevels)