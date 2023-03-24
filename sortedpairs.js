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
let count=0
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]<=arr[j]){
            count++
        }
    }
}
console.log(count);