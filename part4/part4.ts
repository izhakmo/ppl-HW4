
function f (x : number) : Promise<number> {
    const promise = new Promise<number>((resolve, reject) => {
        if(x === 0){
            
            reject();
        }
        else{
            resolve(1/x);
        }
    });
    return promise.then((num) => {return num}).catch(() => {throw new Error("Divided by zero")});
    //return 1/x
    
}
function g (x : number) : Promise<number> {
    const promise = new Promise<number>((resolve, reject) => {
        if(false){
            reject("Never gonna get here");
        }
        else{
            resolve(x*x);
        }
        
    })
    return promise.then( (num) => {return num});
}
/*
function h (x : number) : Promise<number> {
    return f(g(x))
}
*/
f(2);

// const minusOnePowerPromise = Promise ;

// const sqrtPromise = Promise ;

// const mopSqrtPromise = Promise;

// const readFilePromise = (filename: string): Promise<string> => {
//     return new Promise<string>( (resolve, reject) => {
//       fs.readFile(filename, (err, res) => {
//         if (err)
//           reject(err);
//         else
//           resolve(res.toString('utf8'));
//       })
//     })
//   }