let num = 19345;
let num1 = "" + num;
let dem = 0;
for (let i = 0; i < num1.length; i++) {
    if (num1[i] < num1[i + 1]) {
        dem++;
    }
}
if (dem == num1.length - 1) {
    console.log("chuoi tang")
} else {
    console.log("chuoi khong tang");
}