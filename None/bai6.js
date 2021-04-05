let arr = ["a", "b", "a", "c", "d", "d", "d", "a", "a", 1, 2, 2, 2, 1, 3, 3];
let s1 = "";
let count = 0;
function check(s, arr) {
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == s) n++;
    }
    return n;
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] != s1 && check(arr[i], arr) > count) {
        s1 = arr[i];
        count = check(arr[i], arr);
    }
}
console.log(s1);