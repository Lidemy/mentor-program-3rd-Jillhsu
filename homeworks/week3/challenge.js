function add(str1, str2) {
  const add0 = Math.abs(str1.length - str2.length);
  const first = (str1.length >= str2.length) ? str1 : str2;
  let second = (str1.length >= str2.length) ? str2 : str1;
  let ans = '';
  if (add0) {
    for (let i = add0; i > 0; i -= 1) {
      second = `0${second}`;
    }
  }
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
function multi(str1, str2) {
  let base = '';
  if (str1 === '0' || str2 === '0') return '';
  for (let i = str1.length - 1; i >= 0; i -= 1) {
    let next = '';
    let carry = 0;
    for (let j = str2.length - 1; j >= 0; j -= 1) {
      const addint = Number(str1[i]) * Number(str2[j]) + carry;
      carry = (addint - (addint % 10)) / 10;
      next = String(addint % 10) + next;
      if (j === 0 && carry) next = String(carry) + next;
    }
    if (i === str1.length - 1) base = next;
    for (let add0 = str1.length - 1 - i; add0 > 0; add0 -= 1) next = `${next}0`;
    if (str1.length - 1 - i) base = add(base, next);
  }
  return base;
}
module.exports = multi;
