function subArraySum(arr, target) {
    // First i initialized the sum and start pointer
    let sum = 0;
    let start = 0;

    // Then iterate through the array elements
    for (let i = 0; i < arr.length; i++) {
        // Here add the current element to the sum
        sum += arr[i];

        // Condition if the sum exceeds the target,
        // remove elements from the start of the subarray
        while (sum > target) {
            sum -= arr[start];
            start++;
        }

        // When the sum matches the target, result will be true
        if (sum === target) {
            return true;
        }
    }

    // If no subarray with the target sum is found, result will be false
    return false;
}

// Here finally test the function with example inputs
console.log(subArraySum([4, 2, 7, 1, 9, 5], 17)+ '<br>'); // Output: true
console.log(subArraySum([1, 7, 10, 5], 9)); // Output: false
