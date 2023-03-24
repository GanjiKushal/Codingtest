let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let [n,k]=readLine().split(" ").map(Number)
let arr=readLine().split(" ").map(Number)
for(let i=0;i<n;i++){
    if(i==k-1){
        let m=arr[i]
        arr[i]=arr[n-k]
        arr[n-k]=m
    }
}
for(let i of arr){
    console.log(i);
}
