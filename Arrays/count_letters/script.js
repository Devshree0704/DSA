//Count letters

const str = "This is a string";

function countLetters(myStr) {
  const obj1 = {};

  for (let i of myStr) {
    obj1[i] = (obj1[i] || 0) + 1;
  }

  return obj1;
}

const output = countLetters(str);
console.log(output);
