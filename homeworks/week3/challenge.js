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
function multi(str1, str2) {
  let base = '';
  for (let i = str1.length - 1; i >= 0; i -= 1) {
    let next = '';
    let carry = 0;
    for (let j = str2.length - 1; j >= 0; j -= 1) {
      const addint = Number(str1[i]) * Number(str2[j]) + carry;
      carry = (addint - (addint % 10)) / 10;
      next = String(addint % 10) + next;
      if (j === str2.length - 1 && carry) next = String(carry) + next;
    }
    if (i === str1.length - 1) base = next;
    for (let add0 = str1.length - 1 - i; add0 > 0; add0 -= 1) next = `${next}0`;
    if (str1.length - 1 - i) base = add(base, next);
  }
  return base;
}
console.log(multi('11111111111111111111111', '1111111111111111111111111111111111111111111111111111111'));
/*
   console.log(multi('123', '123'));
   console.log(multi('999999999999999999999999999', '1'));
   console.log(multi('1111', '1111111111'));
   console.log(multi('3', '5'));
   console.log(multi('111111111111111111111111111111', '222222222222222222222222222222'));
*/
