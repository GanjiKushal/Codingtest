let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let N=parseInt(readLine())
let arr=[]
for(let i=0;i<N;i++){
    arr[i]=parseInt(readLine())
}
let k=parseInt(readLine())
let sum=0
if(k>=1 && k<=N)
for(let i=k;i<N;i=i+k){
    sum=sum+arr[i-1]
}
console.log(sum);