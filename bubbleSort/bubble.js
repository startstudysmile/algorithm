var exampleArr = [8, 94, 15, 88, 55, 76, 21, 39];

function sortArrByBubble(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
sortArrByBubble(exampleArr);
console.log(exampleArr);
/*
 * 当i=0的时候，里面的循环完整执行，
 * 从j=0执行到j=6,这也就是第一遍排序，
 * 结果是将最大的数排到了最后，
 * 这一遍循环结束后的结果应该是[8,15,88,55,76,21,39,94]
 */

/*
 * 当i=1的时候，里面的循环再次完整执行，
 * 由于最大的数已经在最后了，
 * 没有必要去比较数组的最后两项，
 * 这也是j<arr.length-1-i的巧妙之处，
 * 结果是[8,15,55,76,21,39,88,94]
 */

/*
 * 每次将剩下数组里面最大的一个数排到最后面，
 * 当第一个循环执行到最后的时候，
 * 也就是i=6,此时，j=0,只需要比较数组的第一和第二项，
 * 比较完毕，返回。
 */