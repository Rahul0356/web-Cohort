Function.prototype.describle= function(){
    console.log(`Function name is ${this.name}`);


};
function greet(name){
    return `Hello ${name}`;
}
greet ("Rahul").describe;