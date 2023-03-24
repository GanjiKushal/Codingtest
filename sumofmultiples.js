let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let arr=[]
for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine())
}
let k=parseInt(readLine())
let sum=0
for(let i=0;i<arr.length;i++){
    if(arr[i]%k==0){
        sum=sum+arr[i]
    }
}
console.log(sum);