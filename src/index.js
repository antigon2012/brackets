module.exports = function check(str, bracketsConfig) {
  const stack = [];

  const BRACKETS_PAIR = {};
  bracketsConfig.forEach((el) => (BRACKETS_PAIR[el[1]] = el[0]));
  for (let i = 0; i < str.length; i++) {
    let curSymbol = str[i];
    let topEl = stack[stack.length - 1];
    if (stack.length === 0) {
      stack.push(curSymbol);
    } else {
      if (BRACKETS_PAIR[curSymbol] === topEl) {
        stack.pop();
      } else {
        stack.push(curSymbol);
      }
    }
  }

  return stack.length === 0;
};
