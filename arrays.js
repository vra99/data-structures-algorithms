/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 
 */
const twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map[diff] !== undefined) {
        return [map[diff], i];
        }
        map[nums[i]] = i;
    }
    return [];
};

function bubbleSort(arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
    

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
        if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }
    return max;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            return true;
        }
        map[nums[i]] = 1;
    }
    return false;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = [];
    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = left;
        left *= nums[i];
    }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};

    // You're given the following multi-dimensional array matrix:
const matrix = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 0]
];
// Could you find the largest concentration of connected 1s in the matrix? Write MostConnectedOnes(matrix: array[]) class or method that uncovers this.

function MostConnectedOnes(matrix) {
    const res = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                res.push([i, j]);
            }
        }
    }
    let max = 0;
    for (let i = 0; i < res.length; i++) {
        let count = 0;
        for (let j = 0; j < res.length; j++) {
            if (res[i][0] === res[j][0] || res[i][1] === res[j][1]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}


(function maxSubArray (nums) {
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}(arr));

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
