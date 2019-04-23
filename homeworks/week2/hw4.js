function printFactor(n) {
    for (var i = 1; i <= n; i++)
        if ( n % i === 0)
            console.log(i)
  return n;
}

printFactor(10);
printFactor(7);
