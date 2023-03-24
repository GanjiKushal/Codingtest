let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let [n,x]=readLine().split(" ").map(Number)
let arr=readLine().split(" ").map(Number)
let count=0
for(let i=0;i<n;i++){
    if(arr[i]%x==0){
        count++
    }
}
console.log(count);