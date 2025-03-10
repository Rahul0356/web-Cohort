console.log("Hi Rahul");
setTimeout(()=> console.log('Hello after 2 s'),2*1000);
Promise.resolve().then(()=>console.log('Promise Resolve hogya'));
console.log('Bye')