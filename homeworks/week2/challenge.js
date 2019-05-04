function search(arr, n) {
  const ans = arr.indexOf(n);
  return ans;
}
console.log(search([1, 3, 10, 14, 39], 14));
console.log(search([1, 3, 10, 14, 39], 299));
