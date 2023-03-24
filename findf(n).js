let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let fn=0
for(let i=1;i<=n;i++){
    if(i%2!=0){
        fn=fn-i
    }
    else{
        fn=fn+i
    }
}
console.log(fn);