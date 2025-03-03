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



console.log(teas);