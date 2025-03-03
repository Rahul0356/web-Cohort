//problem:Create an array of containing differnet types of teas
let teas=["Green Tea", "Black Tea","Oolang Tea","white tea","Herbal tea" ]

//Add new tea
teas.push = ("Chamomile Tea");

//problem:Removing "Oolang Tea" from the listof teas

const index = teas.indexOf("Oolang tea");
if(index>-1){
    teas.splice(index,1);
}

//problem:Filter the lis of only include teas that are coffeinated.

 const caffinatedTeas = teas.filter(tea=>teas !=="Herbal Tea"); 

 //problem:Use a for loop to list of teas in alphabetical order.

   console.log(teas.sort());

//problem:Use a for loop to print each type of tea in the array
for (let i=0;i<teas.length;i++){
  console.log(teas[i]);
}

//Problem:use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let caffeinatedMyTeas=0
for(let i=0;i<teas.length;i++){
  if(teas[i] !== "Herbal Tea"){
    caffeinatedMyTeas++
  }
}


//problem:Use a for loop to  create a new array with all tea names in uppercase
const uppercase =[]
for(let i=0;i<teas.length;i++){
  uppcaseTeas.push(teas[i].toUpperCase())
}

//problem:USe a for loop to find the name with the most characters.
let longestTea =""
for(let i=0;i<teas.length;i++){
  if(teas[i].length>longestTea.length){
   longestTea =teas[i]
  }
}
//problem: USe a for loop to reverse the order of teas in the array
const reversedTeas =[]
for(let i=teas.length-1;i>=0;i++){
  reversedArray.push(teas[i]);
}
console.log(teas);