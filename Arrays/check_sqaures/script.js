//check squares
const arr1 = [1, 7, 5, 9, 5];
const arr2 = [1, 81, 49, 25, 25];

function checkSqaures(myArr1, myArr2) {
  const obj1 = {};
  const obj2 = {};

  if (myArr1.length !== myArr2.length) return false;

  for (let i of arr1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }

  for (let i of arr2) {
    obj2[i] = (obj2[i] || 0) + 1;
  }

  for (let key in obj1) {
    //if key present
    let square = key ** 2;
    if (!(square in obj2)) return false;
    if (obj1[key] !== obj2[square]) return false;
  }
  return true;
}

const output = checkSqaures(arr1, arr2);
console.log(output);
