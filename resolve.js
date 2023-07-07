// let we consider a promise its a promise.resolve() method.
let prom = Promise.resolve(2);
prom.then(value => {
    console.log("2");
});
// Is its value is already a promise, 
                    //then promise.resolve() recasts it.

    let one = new Promise(resolve => setTimeout( () =>  resolve(2), 2000, console.log("2 second has gone")));
    let two = new Promise.resolve(one);
    two.then(value => {
        throw console.log(Error);
    });


