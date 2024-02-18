//https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/


//思路：利用左右指针进行二分查找
var twoSum = function (numbers, target) {
  if (numbers.length < 2) return [-1, -1]
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
      let sum = numbers[left] + numbers[right]
      if (sum === target) {
          return [left + 1, right + 1]
      } else if (sum < target) {
          left++
      } else if (sum > target) {
          right--
      }
  }
  return [-1, -1]
};