let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let [str1, str2, x] = readLine().split(" ");
x = parseInt(x);
let arr = [];
function Mapping(str) {
  let map = new Map();
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], 1 + map.get(str[i]));
    } else {
      map.set(str[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (value == x) {
      arr.push(key);
    }
  }
  return arr;
}
Mapping(str1);
Mapping(str2);

arr = arr.sort();
console.log(arr);
let ans = [];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] == arr[i - 1]) {
    ans.push(arr[i]);
  }
}
console.log(...ans);
