// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

//let str=readLine()
let str="+-++"
let count=0
for (let i = 0; i < str.length; i++) {
    str[i] === "+" ? count++ : count--;
}
console.log(count)