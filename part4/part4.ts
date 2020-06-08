
export function f (x : number) : Promise<number> {
    return new Promise<number>((resolve, reject) => {
        (x===0)? reject(new Error ("dived by zero")) : resolve(1/x);
    });
}

export function g (x : number) : Promise<number> {
    return new Promise<number>((resolve, reject) => resolve(x*x));
    // return promise.then( (num) => {return num}).catch(() => {throw new Error("Never gonna get here ;-)")});
}

export function h (x: number) : Promise<number> {
    return new Promise<number> ((resolve,reject) => g(x).then( (num) => f(num)).then((num) => {resolve (num)}).catch(() => reject(new Error("Something wrong happand D-:"))));
    // return g(x).then( (num) => f(num)).then((num) => {return num}).catch(() => {throw new Error("Something wrong happand D-:")});

}
// f(0).then(num => {console.log("shit son!!!!!"); console.log(num);}).catch(()=> {console.log("Something wrong happand D-:")});

// h(0).then(num => {console.log("shit son!!!!!"); console.log(num);}).catch(() => {throw new Error("Something wrong happand D-:")});


// export function slower <T>(pArr: Promise<T>[]) : Promise<[number,T]> {
//     return new Promise<[number,T]> ((resolve,reject) => {
//         const p1 = pArr[0].then((val) => new Promise<[time,T]> ).catch();
//         const p2 = pArr[1].then((val) => new Promise<> ).catch();
//         if(bothResolved){
//             (p1.time >p2.time) ? resolve([0,p1.val]) : resolve([1,p2.val]);
//         }
//         else{
//             reject();
//         }
//     }
// }


export const slower =<T> (promises: Promise<any>[]): Promise<[number,T]> =>{
    return new Promise((resolve, reject) => {
        let done = promises.length;
        promises.forEach((val, index) => {
            Promise.resolve(val).then(res => {
                done --;
                if (done == 0) {
                    resolve([index,res]);
                }
            }).catch(err => reject(err));
        });
    });
}
