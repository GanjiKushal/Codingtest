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
let min=arr[0]
let max=arr[0]
let minCount=0
let maxCount=0
for(let i=0;i<n;i++){
    if(arr[i]<min){
        min=arr[i]
        minCount++
    } 
    if(arr[i]>max){
        max=arr[i]
        maxCount++
    }
}
console.log(maxCount,minCount);