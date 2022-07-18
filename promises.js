const promise = new Promise((resolve, reject) => {
    // a promise will mange the result wheater there is problem or not 
    // resolver will be called when th functin has succeeded
    if (true) {
        setTimeout(() => {
            resolve("Success");
        }, 1000);    
    } else {
        reject("Failure");
    }
    
});


// We can modify the value of that the promise returns 


promise
    .then(value => value + "!!!!")
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));
