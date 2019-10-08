function isValid(s) {
    let valid = true;
    const stack = [];
    const mapper = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    for(let i in s) {
        const v = s[i];
        if(["(", "[", "{"].indexOf(v) > -1) {
            stack.push(v);
        } else {
            const peak = stack.pop();
            if(v != mapper[peak]) {
                valid=false;
            }
        }
    }

    if(stack.length > 0) valid = false;

    return valid;
}

var result = isValid("{{{[]}}}");
console.log(result);

var index = -1;
var hash = {};
hash[index] = 100;
console.log(hash);