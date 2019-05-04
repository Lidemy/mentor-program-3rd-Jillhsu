function stars(n) {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    let star = '';
    for (let j = i + 1; j > 0; j -= 1) {
      star += '*';
    }
    result[i] = star;
    star += 1;
  }
  return result;
}
console.log(stars(5));
