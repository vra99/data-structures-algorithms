var getSum = function(a, b) {
    const getSum = (a,b) => b ? getSum(a ^ b, (a & b) << 1) : a;
    return getSum(a, b)  
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n) {
        n &= n - 1;
        count++;
    }
    return count;
};

/**
 * @param {number} n
 * @return {number[]}
 */


var countBits = function(num) {
  var arr = [0, 1, 1];
  
  for (var i=3; i<=num; i++){
    var even = 0;
    var temp = i;
    var odd = 0;
    if((i/2) !== Math.floor(i/2)){
      even +=1;
      temp = i-1;
    }
      odd = arr[temp/2];
      arr.push(even + odd);
    
  }
  
  return arr.slice(0, num+1);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return nums.length * (nums.length + 1) / 2 - sum;
};
