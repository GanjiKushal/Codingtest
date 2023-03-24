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
console.log(arr);
let max=Number.NEGATIVE_INFINITY
arr[n-1]=-1
// let arr2=[]
for(let i=n-2;i>=0;i--){
    
    if(arr[i]>max){
        max=arr[i]
        //arr[i]=max
    }
    if(arr[i]<max){
        arr[i]=max
    }
}
console.log(arr);