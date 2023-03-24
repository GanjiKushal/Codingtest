let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let r=parseInt(readLine())
function areaOfCircle(){
    let area=Math.ceil(Math.PI*(r**2))
    return area
}
function perimeterOfCircle(){
    let perimeter=Math.ceil(2*Math.PI*r)
    return perimeter
}
console.log(areaOfCircle(r))
console.log(perimeterOfCircle(r))