//valid_anagram

const str1 = "care";
const str2 = "erca";

function valid_anagram(myStr1, myStr2) {
  const obj1 = {};
  const obj2 = {};

  if (myStr1.length !== myStr2.length) return false;

  for (let i of myStr1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }

  for (let i of myStr2) {
    obj2[i] = (obj2[i] || 0) + 1;
  }

  for (let char in obj1) {
    if (!(char in obj2)) return false;
    if (obj1[char] !== obj2[char]) return false;
  }

  return true;
}

const output = valid_anagram(str1, str2);
console.log(output);
