function countZeroes(arr) {
    let n = arr.length;
    let first = findFirstZero(arr, 0, n - 1);
    if (first === -1) {
        return 0;
    }
    return (n - first);
}

function findFirstZero(arr, low, high) {
    if (high >= low) {
        // Check if mid element is first 0
        let mid = Math.floor(low + (high - low) / 2);
        if ((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0)
            return mid;

        if (arr[mid] == 1) // If mid element is not 0
            return findFirstZero(arr, (mid + 1), high);
        else // If mid element is 0, but not first 0
            return findFirstZero(arr, low, (mid - 1));
    }
    return -1;
}


module.exports = countZeroes