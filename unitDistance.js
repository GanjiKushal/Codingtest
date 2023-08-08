let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let [str1, str2] = readLine().split(" ");
  console.log(isUnitDistance(str1,str2));
}
function isUnitDistance(str1, str2) {
  let m = str1.length;
  let n = str2.length;
  // If the difference in lengths is more than 1, return false
  if (Math.abs(m - n) > 1) {
    return false;
  }
  let count = 0;
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    // If characters do not match, increment count and move to the next characters
    if (str1[i] !== str2[j]) {
      count++;

      // If the length of both strings is different, move the pointer of the longer string
      if (m > n) {
        i++;
      } else if (n > m) {
        j++;
      } else {
        // If lengths are the same, move both pointers
        i++;
        j++;
      }
    } else {
      // If characters match, move both pointers
      i++;
      j++;
    }
  }

  // If there are remaining characters in either string, increment count accordingly
  count += m - i;
  count += n - j;

  return count === 1;
}