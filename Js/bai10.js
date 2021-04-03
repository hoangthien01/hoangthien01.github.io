let a = 1;
let b = 10;

function ktnguyento(n) {
    if (n < 2) {
        return 1;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return 1;
    }
    return 0;
}
for (let i = 1; i < 10; i++) {
    if (ktnguyento(i) == 0) {
        console.log(i)
    }
}