
export function f (x : number) : Promise<number> {
    return new Promise<number>((resolve, reject) => {
        (x===0)? reject(new Error ("dived by zero")) : resolve(1/x);
    });
}

export function g (x : number) : Promise<number> {
    return new Promise<number>((resolve, reject) => resolve(x*x));
}

export function h (x: number) : Promise<number> {
    return new Promise<number> ((resolve,reject) => g(x).then( (num) => f(num)).then((num) => {resolve (num)}).catch(() => reject(new Error("Something wrong happaned D-:"))));
}


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
