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
let sum=0
for(let i=0;i<n;i++){
    if(i<1 || i%2==1){
        sum=sum+arr[i]
    }
    else{
        sum=sum-arr[i]
    }
}
console.log(sum);