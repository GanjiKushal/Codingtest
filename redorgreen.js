let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let str=readLine()
let rcount=0
let gcount=0
for(let i=0;i<str.length;i++){
    if(str[i]=="R") rcount++
    else if(str[i]=="G") gcount++
}
console.log(Math.min(rcount,gcount));