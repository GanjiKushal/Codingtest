let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let arr=readLine().split(" ").map(Number)
//console.log(Math.max(...arr));
let max=Number.NEGATIVE_INFINITY
for(let i=0;i<n;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max);