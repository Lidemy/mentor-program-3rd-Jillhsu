function reverse(str) {
    var ans = ''
    for (var i = str.length - 1; i >= 0; i--)
       ans += str[i]
    console.log(ans)
  return ans;
}

reverse('hello');
reverse('yoyoyo')
reverse('1abc2')
reverse('1,2,3,2,1')
