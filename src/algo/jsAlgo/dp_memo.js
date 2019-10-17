
function fibonacci(n) {
    let memo = [];
    return fibonacciInternal(n, memo);

}

function fibonacciInternal(n, memo) {
    if( n === 0 || n === 1) return n;

    if(!memo.hasOwnProperty(n)) {
        memo[n] = fibonacciInternal(n -1, memo) + fibonacciInternal(n -2, memo);

    }

    return memo[n];
}

console.log(fibonacci(10));

function tripleSteps(n) {
    if(n == 0 || n == 1) return 1;
    if(n == 2)  return 2;

    return tripleSteps(n-1) + tripleSteps(n-2) + tripleSteps(n-3);

}

//console.log(tripleSteps(100));

function tripleSteps2(n){
    let result = [];
    result[0] = 1;
    result[1] = 1;
    result[2] = 2;
    for(let i = 3; i <= n; i++) {
        result[i] = result[i-3] + result[i-2] + result[i-1];
    }

    return result[n];
}
//console.log(tripleSteps2(100));

/*
function GiveCoins(n) {
    if(n > 0 && n < 5) return 1
    if(n === 5) return 2;
    if(n > 5 && n < 10) return 2;
    if( n === 10) return 4;  // 10; 5, 5; 5, 11111; 10个1; 
    if(n> 10 && n <25) return 
}
*/

function majority_element(arr) {
    let counter = 0, possible_element;
    for(let i = 0; i < arr.length; i++) {
        if( counter === 0) {
            possible_element = arr[i];
            counter++;
        } else if(possible_element == a[i]) {
            counter++;
        } else {
            counter--;
        }
    }
}

var twoSum = function(nums, target) {
    let temp = {};
    for(let i = 0; i < nums.length; i++ ) {
        let first = nums[i];
        let second = target - first;
        if(temp.hasOwnProperty(second)) {
            return [temp[second], i];
        } else {
            temp[first] = i;
        }
    }
};

twoSum([2,7,11,15], 9);

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var appendNode = function(list, node) {
    if(list) {
        let temp = list;
        while(temp.next) {
            temp = temp.next;       
        }
        temp.next = node;
    } else {
        list = node;
    }
}

var format = function(list) {
    if(list) {
        let formatString = list.value;
        let temp = list.next;
        while(temp) {
            formatString += ` -> ${temp.val}`;
        }
    }
}

var addTwoNumbers = function(l1, l2) {
    let result=new ListNode(0);
    let carry = 0;
    
    while(l1 && l2) {
        let sum = l1.val + l2.val + carry;
        let current = sum % 10;
        carry =  Math.round(sum / 10);
        let node = new ListNode(current);
        appendNode(result, node);
        
        l1 = l1.next;
        l2 = l2.next;
    }
    

        while(l1) {
            let node = new ListNode(l1.val + carry);
            appendNode(node);
            l1 = l1.next;
        }
    while(l2) {
        let node = new ListNode(l2.val + carry);
        appendNode(node);
        l2 = l2.next;
    }
    
    format(result);

    
};

let l1 = new ListNode(1);
l1.next = new ListNode(3);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

addTwoNumbers(l1, l2);