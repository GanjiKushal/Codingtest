let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
while(n>0){
    if(n>0 && n%2==0){
        n=n-11
    }
    else if(n>0 && n%2!=0){
        n=n-21
    }
}
console.log(n);