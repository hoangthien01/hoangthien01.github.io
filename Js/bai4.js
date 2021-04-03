let s = "ABCDE";
let s1 = "";
for (let i = 0; i < s.length; i++) {
    s1 += (String.fromCharCode(s[i].charCodeAt() + 1));
}
console.log(s1);