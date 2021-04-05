let text9 = "truong trung hoc pho thonggggg";
let start;
start = 0;
let end = 0;
let s = "";
for (let i = 0; i <= text9.length; i++) {
    if (text9[i] == " ") {
        end = i;
        if (text9.slice(start, end).length > s.length) {
            s = text9.slice(start, end);
        }
        start = end + 1;
    }
}
console.log(s)