let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let [str1,str2,x]=readLine().split(" ")
x=parseInt(x)
let map1=new Map()
str1=str1.toLowerCase()
for(let i=0;i<str1.length;i++){
   if(map1.has(str1[i])){
    map1.set(str1[i],1+map1.get(str1[i]))
   }
   else{
    map1.set(str1[i],1)
   }
}
// console.log(map1);
let map2=new Map()
str2=str2.toLowerCase()
for(let i=0;i<str2.length;i++){
   if(map2.has(str2[i])){
    map2.set(str2[i],1+map2.get(str2[i]))
   }
   else{
    map2.set(str2[i],1)
   }
}
// console.log(map2);
let arr=[]
for(let [key,value] of map1){
    if(value==x){
        arr.push(key)
    }
}
for(let [key,value] of map2){
    if(value==x){
        arr.push(key)
    }
}
arr=arr.sort()
let ans=[]
for(let i=1;i<arr.length;i++){
    if(arr[i]==arr[i-1]){
        ans.push(arr[i])
    }
}
console.log(...ans);