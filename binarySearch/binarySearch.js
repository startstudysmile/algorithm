var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];

function binarySearch1(arr, key) {
    var low = 0,
        high = arr.length - 1;
    while (low <= high) {
        var mid = parseInt((high + low) / 2);
        if (key == arr[mid]) {
            return mid;
        } else if (key > arr[mid]) {
            low = mid + 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        } else {
            return -1;
        }
    }
};

function binarySearch2(arr, low, high, key) {
    if (low > high) {
        return -1;
    }
    var mid = parseInt((high + low) / 2);
    if (arr[mid] == key) {
        return mid;
    } else if (arr[mid] > key) {
        high = mid - 1;
        return binarySearch2(arr, low, high, key);
    } else if (arr[mid] < key) {
        low = mid + 1;
        return binarySearch2(arr, low, high, key);
    }
};
var result1 = binarySearch1(arr, 11);
var result2 = binarySearch2(arr, 0, 13, 11);
console.log(result1); // 9 返回目标元素的索引值
console.log(result2); // 9 返回目标元素的索引值