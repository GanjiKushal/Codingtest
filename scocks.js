let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let arr=readLine().split(" ").map(Number)
let map=new Map()
for(let i=0;i<n;i++){
    if(map.has(arr[i])){
        map.set(arr[i],1+map.get(arr[i]))
    }
    else{
        map.set(arr[i],1)
    }
}
console.log(map);
let pairs=0
for(let [key,value] of map){
    pairs=pairs+parseInt(value/2)
}
// for(let key of map.keys()){
//     pairs+=parseInt(map.get(key)/2)
// }
console.log(pairs);