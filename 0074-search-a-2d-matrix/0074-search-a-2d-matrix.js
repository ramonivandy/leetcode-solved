/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // cek start dan end array nya
    // jika start > target, geser array ke kanan
    // jika start < target, cek lagi. jika end < target, geser array ke kanan.
    // jika start < target dan target < end, found it the array. 
    // do binary search to the array.

    let leftMatrix = 0;
    let rightMatrix = matrix.length - 1;
    let matrixIndex = 0;

    while(leftMatrix < rightMatrix){
        let mid = Math.trunc((leftMatrix + rightMatrix) / 2);

        let start = matrix[mid][0]
        let end = matrix[mid][matrix[mid].length - 1];

        if(start > target){
            rightMatrix--;
        } else if (start < target && end < target) {
            leftMatrix++;
        } else {
            matrixIndex = mid;
            break;
        }
    }

    let left = 0;
    let right = matrix[matrixIndex].length - 1;
    let arrMatrix = matrix[matrixIndex];

    while (left <= right){
        let mid = Math.floor((left + right) / 2);

        if(target > arrMatrix[mid]){
            left++
        } else if (target < arrMatrix[mid]){
            right--
        } else {
            return true;
        }
    }

    return false;

};