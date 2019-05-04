function alphaSwap(str) {
  let ans = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      ans += str[i].toUpperCase();
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      ans += str[i].toLowerCase();
    } else {
      ans += str[i];
    }
  }
  return ans;
}

module.exports = alphaSwap;
