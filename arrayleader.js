let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let max=Number.NEGATIVE_INFINITY
let arr=[]
for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine())
}
for(let i=n-1;i>=0;i--){
    if(arr[i]>max){
        max=arr[i]
        console.log(max);
    }
}