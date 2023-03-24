let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
for(let i=0;i<n;i++){
    let [x1,v1,x2,v2]=readLine().split(" ").map(Number)
    let result="No"
    for(let i=0;i<10000;i++){
        if(x1==x2){
            result="Yes"
            break
        }
        x1+=v1
        x2+=v2
    }
    console.log(result);
}