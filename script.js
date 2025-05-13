//your code here
function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// Example test
const input = [2, 1, 2];
const result = majorityElement(input);
alert(result); // Output should be 2
