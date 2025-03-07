/*
Ek traffic light system mein,agar light "red"hai, toh "Stop" print karo.
Agar "Yellow" hai, "Slow down" print karo. Agar "green" hai,
toh "Go" print karo.
*/


function trafficLight(light){
   if(light .toLowerCase()=="red"){
    console.log("Stop");
   }
   else if(light.toLowerCase() == "yellow"){
    console.log("slow down");
   }
   else if(light.toLowerCase() =="green"){
    console.log("Go");
   }
   else {
    console.log("invalid light");
   }
}

trafficLight("red");
trafficLight("yellow");
trafficLight("green");