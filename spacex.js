let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let str=readLine().trim()
let str1=str.split(" ")
let str2=''
for(let i=0;i<str1.length;i++){
    if(i<str1.length-1){
        str2=str2+str1[i]+"spaceX"   
    }
    else if(i==str1.length-1){
        str2=str2+str1[i]   
    }
    
}
console.log(str2);