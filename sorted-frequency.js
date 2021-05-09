function sortedFrequency(arr, num) {
    let firstIndex = findFirstOccurance(arr, num)
    if (firstIndex == -1) {
        return firstIndex
    }
    let lastIndex = findLastOccurance(arr, num)
    return lastIndex - firstIndex + 1
}

function findFirstOccurance(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            return mid;
        } else if (num > arr[mid]) {
            return findFirstOccurance(arr, num, mid + 1, high)
        }
        else {
            return findFirstOccurance(arr, num, low, mid - 1)
        }
    }
    return -1;
}

function findLastOccurance(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            return findLastOccurance(arr, num, low, mid - 1)
        }
        else {
            return findLastOccurance(arr, num, mid + 1, high)
        }
    }
    return -1;
}
module.exports = sortedFrequency