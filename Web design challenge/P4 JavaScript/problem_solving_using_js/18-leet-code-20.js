var isValid = function (s) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const len = s.length;
  if (len % 2 !== 0) return false;
  const stack = [];
  for (let char of s) {
    if (obj[char]) stack.push(obj[char]);
    else {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("()()()"));
