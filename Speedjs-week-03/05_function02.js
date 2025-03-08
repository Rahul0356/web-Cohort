//iife


//   let config =function(){
// let setting = {
//     theme:"dark",

// }
// return settings
// }()

let person1 = {
    name:"rahul",
    greet:function(){
        console.log(`Hello ${this.name} `);
    }
}
// this is context define

let person2 = {
    name:"Arya"
}

person1.greet.call(person2)