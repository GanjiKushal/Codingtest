let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let min=Number.POSITIVE_INFINITY
let max=Number.NEGATIVE_INFINITY
for(let i=0;i<n;i++){
  let N=parseInt(readLine())
  if(N<min){
    min=N
  }
  else if(N>max){
    max=N
  }
}
console.log(min,max);
console.log(min*max);