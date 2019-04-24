function capitalize(str) {
  let i;
  let ans = '';
  if (str[0] >= 'a' && str[0] <= 'z') {
    ans += str[0].toUpperCase();
  } else {
    ans += str[0];
  }
  for (i = 1; i < str.length; i += 1) {
    ans += str[i];
  }
  return ans;
}

console.log(capitalize('hello'));
console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
