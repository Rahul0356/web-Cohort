//problem:  Create an object representing a type of tea with properties  for name,type,and caffeine content
const  teas= {
    name:"Green Tea",
    type:"Green",
    caffine:"low",
}


//problem:Access and prinnt the name and tpye properties of the tea object.
console.log(teas.name);
console.log(teas["type"]);


//problem: Add a new property origin to the tea object.
teas.origin="China";

//problem: Change the caffeine level of the tea object to "Medium"
teas.caffeine="Medium";

//problem: Remove the type property from the tea object
delete teas.tpye

//problem:Check if the object has a property origin.
console.log("origin in teas");
//problem:use a for ...in loop to print all properties of the tea object.
for(let key in test){
    console.log(key +":"+teas[key]);

}
//problem:Create a nested object representing different typrs of teas and their properties.
const myTeas = {
    balckTea:{
        name:"Black Tea",
        type:"Black",
        caffeine:"High",
    },
    
}

// problem :Create a copy of the tea object.
const teasCopy = {...test}//shallow copy
const anotherCopy = myTeas //reference
console.log(teasCopy)

//problem:Add a custom method describe to the object that return a description string.

//
//problem:Merge two object representing different into one.
