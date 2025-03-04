const obj1 = {
    fname:'Rahul',
    lname:'Kumar',
    getFullName :function(){
        return `${this.fname} ${this.lname}`;
    },
};

const obj2 = {
    fname:"Rahul",
    lname:"Arya",
    getFullName:function(){
        return `${this.fname} ${this.lname}`
    },

};


//DRY - Do not repeat yourself





console.log(obj1.getFullName());
console.log(obj2.getFullName()); 