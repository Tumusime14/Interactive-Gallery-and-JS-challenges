function subArraySum(arr, target) {
    let sum = 0;
    let start = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        while (sum > target) {
            sum -= arr[start];
            start++;
        }
        if (sum === target) {
            return true;
        }
    }
    return false;
}
// write to id output 
document.write(subArraySum([4, 2, 7, 1, 9, 5], 17));