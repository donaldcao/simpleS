//整数全排列
function perm(elements, k, m) {
    // 产生element[k:m]的所有排列
    if(k === m) {
        for(let i = 0; i <= m; i++) {
            console.log(elements[i]);
        }
        console.log('');
    } else {
        for(let i = k; i <= m; i++) {
            swap(list, k, i);
            perm(elements, k + 1, m);
            swap(list, k, i);
        }
    }
}

// 整数划分
function q(n, m) {
    if(( n < 1 ) || (m < 1)) return 0;
    if( n === 1 || m === 1) return 1;
    if( n < m) return q(n, n);
    if(n === m) return 1 + q(n, m-1);
    return q(n-m, m) + q(n, m-1);
}

// 汉诺塔
function 