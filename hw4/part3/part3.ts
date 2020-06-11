export function* braid <T,S,R> (gen1 : Generator <T,S,R> ,gen2 : Generator<T,S,R> ) : Generator<T,void,R> {
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