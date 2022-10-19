// 1
let s = +prompt("enter number s");
let sum = 0;
console.log("number s: " + s);
for (let i  = s; i > 0; i--){
    if (s % i == 0) {
        sum+=i;
    }
}
console.log("sum" + sum);
// 2
let c = +prompt("enter number c");
let d = +prompt("enter number d");
let count = 0;
console.log("number c: " + c);
console.log("number d: " + d);
for (let i = c; i <= d; i++ ) {
    if (((i**3 % 10) == 4) || ((i**3 % 10) == 9)) {
        count++;
    }
}
console.log("count" + count);