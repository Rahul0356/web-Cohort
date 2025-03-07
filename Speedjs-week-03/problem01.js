/*
Ek  online store mein, agar customer ka total bill amount 1000 se zyada hai, toh 10% discount milta hai. Nahi toh,full amount pay karna padta hai.
*/
function discount(totalAmount){
    if(totalAmount>=1000){
        return  totalAmount *0.9
    }
    return totalAmount
}
let finalBill = discount(1200);
console.log(finalBill);
console.log(discount(800));