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
  console.log(first);
  console.log(second);
  let carry = 0;
  for (let i = first.length - 1; i >= 0; i -= 1) {
    const addint = Number(first[i]) + Number(second[i]) + carry;
    carry = (addint > 9) ? 1 : 0;
    /*
        addint = Number(first[i]) + Number(second[i]);
        if (carry)
            addint += 1;
        if (addint >= 10) {
            carry = true;
        } else {
            carry = false;
        }
    */
    ans = String(addint % 10) + ans;
  }
  if (carry) {
    ans = `1${ans}`;
  }
  return ans;
}
console.log(add('12', '12'));
console.log(add('111111111111', '1111'));
console.log(add('999999999999999999999999999', '1'));
console.log(add('1111', '1111111111'));
console.log(add('3', '5'));
console.log(add('111111111111111111111111111111', '222222222222222222222222222222'));
// console.log( '333333333333333333333333333333');
