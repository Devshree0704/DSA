// const str1 = "hello";
// const str2 = "hello world";

const str1 = "abc";
const str2 = "acb";

function subsequence(str1, str2) {
  let i = 0;
  let j = 0;
  let str = "";

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      str = str + str1[i];
      i++;
    }
    j++;
  }

  return str.length > 0 ? str : false;
}

const output = subsequence(str1, str2);
console.log(output);
