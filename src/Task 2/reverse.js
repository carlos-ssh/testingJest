function reverseString(string) {
  let arr = [];
  for (let abc of string) {
    arr.unshift(abc);
  }
  return arr.join("");
}

module.exports = reverseString;