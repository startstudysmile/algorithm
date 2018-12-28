function mergeSort(arr) {
    // 设置终止的条件，
    if (arr.length < 2) {
        return arr;
    }
    //设立中间值
    var middle = parseInt(arr.length / 2); //向下取整  7/2=3  3/2=1
    console.log(middle)
    //第1个和middle个之间为左子列
    var left = arr.slice(0, middle);
    console.log(left)
    //第middle+1到最后为右子列
    var right = arr.slice(middle);
    console.log(right)
    if (left == "undefined" && right == "undefined") {
        return false;
    }

    console.log(merge(mergeSort(left), mergeSort(right)))
    console.log('__________________')
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            //把left的左子树推出一个，然后push进result数组里
            result.push(left.shift());
        } else {
            //把right的右子树推出一个，然后push进result数组里
            result.push(right.shift());
        }
    }
    //经过上面一次循环，只能左子列或右子列一个不为空，或者都为空
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}
// 测试数据
var nums = [6, 1, 4, 2, 7, 3, 5];
console.log(mergeSort(nums))