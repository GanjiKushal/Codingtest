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
    let p=parseInt(readLine())
    if(p<40){
        if(p<38){
            console.log(p);
        }
        else{
            console.log(40);
        }
    }
    if(p>=40){
        if(p%5<=2){
            console.log(p);
        }
        else{
            console.log(p+5-p%5);
        }
    }
   

}
//console.log(84%5);