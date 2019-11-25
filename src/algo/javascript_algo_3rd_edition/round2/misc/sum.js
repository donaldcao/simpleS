function count(num) {
    if( num === 0 || num === 1) return num;

    return num + count(num-1);
}

console.log(count(100));

function climbStairs(n, cache) {
    if(n === 1 || n === 2) return n;
    if(cache.hasOwnProperty(n)) {
        console.log(`cache hit for ${n}`);
        return cache[n];
    } else {
        cache[n] = climbStairs(n-1, cache) + climbStairs(n-2, cache);
        return cache[n];
    }
}

function climbStairs_recursion(n) {
    if(n === 1 || n === 2) return n;

    let first = 1;
    let second = 2;
    let temp;
    for(let i = 3; i <= n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }

    return temp;
}

console.log(climbStairs(20, {"1":1, "2":2}));
console.log(climbStairs_recursion(20));

