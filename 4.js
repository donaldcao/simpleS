

function getStepCount(inputString) {
    if(!inputString || !inputString.length || inputString.length <= 0) return;
    let inputValue = parseInt(inputString, 2);

    let count = 0;
    while(inputValue > 0) {
        count ++;
        inputValue = inputValue % 2 == 0 ? inputValue / 2 : inputValue - 1;
    }

    return count;
}

let count = getStepCount("011100");
console.log(count);