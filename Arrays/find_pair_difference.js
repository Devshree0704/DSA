// const arr = [6, 1, 4, 10, 2, 4];
// const diff = 2;

const arr = [1, 2, 3];
const diff = 12;

function findPair(arr, diff) {
  const obj = {};

  for (let i of arr) {
    obj[i] = (obj[i] || 0) + 1;
  }

  console.log(obj);

  for (let key in obj) {
    if (Math.abs(key - diff) in obj) return true;
  }
  return false;
}

const output = findPair(arr, diff);
console.log(output);
