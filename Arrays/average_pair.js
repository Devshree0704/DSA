// const arr = [1, 2, 3];
// const arr = [-1, 0, 3, 4, 5, 6];
const arr = [];
const avg = 4.1;

function averagePair(arr, avg) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let avgNum = (arr[i] + arr[j]) / 2;
    if (avgNum === avg) return true;
    if (avgNum > avg) j--;
    else i++;
  }
  return false;
}

const output = averagePair(arr, avg);
console.log(output);
