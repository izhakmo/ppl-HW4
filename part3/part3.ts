import { take } from "ramda";

export function* braid <T,S,R> (gen1 : Generator <T,S,R> ,gen2 : Generator<T,S,R> ) : Generator<T,void,R> {
    //TODO so called while
    // yield gen1.next().value;
    // yield gen2.next().value;
    let moshe = gen1.next();
    let moshe2 = gen2.next();
    while(!moshe.done || !moshe2.done){
        if(!moshe.done) {
            yield moshe.value;
            moshe=gen1.next();
        }
        if(!moshe2.done) {
            yield moshe2.value;
            moshe2=gen2.next();
        }

    }
}

export function* biased <T,S,R> (gen1 : Generator <T,S,R> ,gen2 : Generator<T,S,R> ) : Generator<T,void,R> {
    //TODO so called while
    // yield gen1.next().value;
    // yield gen2.next().value;
    let moshe = gen1.next();
    let moshe2 = gen2.next();
    while(!moshe.done || !moshe2.done){
        if(!moshe.done) {
            yield moshe.value;
            moshe=gen1.next();
        }
        if(!moshe.done) {
            yield moshe.value;
            moshe=gen1.next();
        }
        if(!moshe2.done) {
            yield moshe2.value;
            moshe2=gen2.next();
        }

    }
}

// function* gen1() {
//     yield 3;
//     yield 6;
//     yield 9;
//     yield 12;
// }

// function* gen2() {
//     yield 8;
//     yield 10;
// }
// const gen = biased(gen1(),gen2());
// for(let i = 0; i < 4; i++){
//     console.log(gen.next().value);
// }
/*
for (let n of take(4, braid(gen1,gen2))) {
    console.log(n);
}
*/