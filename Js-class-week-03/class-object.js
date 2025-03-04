class person {
constructor(fname,lname){
this.fname=fname;
this.lname=lname;
    }


gefullname(){
    return `${this.fname} ${this.lname}`
}
}

const p1 = new person('Rahul', 'Arya');
const p2 = new person('Arya', 'Rahul');

console.log(p1.gefullname());
console.log(p2.gefullname());