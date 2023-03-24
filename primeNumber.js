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
    let N=parseInt(readLine())
    let isPrime=true
    if(N==1 || N==0){
        isPrime=false
    }
    else{
        for(let i=2;i<N;i++){
            if(N%i==0){
                isPrime=false
                break
            }
        }
    }
    console.log(isPrime);
}