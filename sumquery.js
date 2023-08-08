let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let [n,l]=readLine().split(" ").map(Number)
let arr=readLine().split(" ").map(Number)
for(let i=0;i<l;i++){
    let [x,y]=readLine().split(" ").map(Number)
    console.log(Result(x,y,arr));   
}
function Result(x,y,arr){
    let sum=0
    for(let i=x;i<=y;i++){
        sum+=arr[i]
    }
    return sum
}