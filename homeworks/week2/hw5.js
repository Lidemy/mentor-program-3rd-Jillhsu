function join(str, concatStr) {
    var add = concatStr
    concatStr = ''
    for ( i = 0; i < str.length; i++)
        if ( i != str.length - 1)
            concatStr += str[i] + add 
        else
            concatStr += str[i]
    return concatStr;
}

function repeat(str, times) {
    var num = times
    times = ''
    for ( var i = 0; i < num; i++)
        times += str
  return times;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));
console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["a", 1, "b", 2, "c", 3], ','))

console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))
