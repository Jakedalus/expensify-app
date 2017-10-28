const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
//        resolve('This is my resolved data');
        reject('Something went wrong');
    }, 3000);
    
});

console.log("Before");

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error); 
});

console.log("After");