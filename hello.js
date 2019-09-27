var myCar = new Object();
//var person = window.prompt("Please enter your name","name");
myCar = [{name:"Poonam",position:"Developer",founder:"yes"},{name:"Shristi",position:"Designer",founder:"yes"},{name:"Aasha",position:"Data Analyst",founder:"yes"},{name:"Neha",position:"Developer",founder:"yes"}];
for (i =0;i<4;i++){
    if (myCar[i].founder=="yes" && myCar[i].position=="Data Analyst"){
        var new_pos=myCar[i].position;
        myCar[i].position="CTO";
    }
}
myCar.push({name:"Elina",position:new_pos,founder:"no"})
console.log(myCar)