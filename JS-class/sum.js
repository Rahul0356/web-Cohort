let myArray =[1,3,5,6]

function sumfac(numbers){
    let sum=0;
    for(let i=0; i<numbers.length;i++){
        sum = sum+numbers[i]
    }
    return sum;
}
let result =sumfac(myArray);
console.log(result);