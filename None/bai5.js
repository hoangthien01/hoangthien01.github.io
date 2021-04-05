let s = "aaa";
let s1 = "";
for (let i = s.length / 2 - 0.5 - 1; i <= s.length / 2 + 0.5; i++) {
    s1 += s[i];
}
console.log(s1);