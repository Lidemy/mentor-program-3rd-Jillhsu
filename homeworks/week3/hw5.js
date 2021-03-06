function add(a, b) {
  const add0 = Math.abs(a.length - b.length);
  const first = (a.length >= b.length) ? a : b;
  let second = (a.length >= b.length) ? b : a;
  let ans = '';
  if (add0) {
    for (let i = add0; i > 0; i -= 1) {
      second = `0${second}`;
    }
  }
  console.log(first);
  console.log(second);
  let carry = 0;
  for (let i = first.length - 1; i >= 0; i -= 1) {
    const addint = Number(first[i]) + Number(second[i]) + carry;
    carry = (addint > 9) ? 1 : 0;
    ans = String(addint % 10) + ans;
  }
  if (carry) {
    ans = `1${ans}`;
  }
  return ans;
}

module.exports = add;
