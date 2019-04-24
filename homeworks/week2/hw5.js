function join(str, concatStr) {
  const add = concatStr;
  let i;
  let ans = '';
  for (i = 0; i < str.length; i += 1) {
    if (i !== str.length - 1) {
      ans += str[i] + add;
    } else {
      ans += str[i];
    }
  }
  return ans;
}

function repeat(str, times) {
  const num = times;
  let i;
  let ans = '';
  for (i = 0; i < num; i += 1) {
    ans += str;
  }
  return ans;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));
console.log(join([1, 2, 3], ''));
console.log(join(['a', 'b', 'c'], '!'));
console.log(join(['a', 1, 'b', 2, 'c', 3], ','));
console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));
