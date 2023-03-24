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
let max=arr[n-1]
let sum=0
for(let i=n-2;i>=0;i--){
    if(max>arr[i]){
        sum=sum+max-arr[i]
    }
    else{
        max=arr[i]
    }
}
console.log(sum);