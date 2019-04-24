function reverse(str) {
  let ans = '';
  let i;
  for (i = str.length - 1; i >= 0; i -= 1) {
    ans += str[i];
  }
  console.log(ans);
  return ans;
}

reverse('hello');
reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');
