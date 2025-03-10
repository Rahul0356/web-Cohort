const obj ={
    personName:'Rahul',
    greet:function(){
        console.log(`Hello,${this.personName}`);
    },
};


console.log('Hello from js');
setTimeout(obj.greet, 2*1000);
console.log('bye rahul');