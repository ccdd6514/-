//https://leetcode.cn/problems/remove-element/description/

//给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

var removeElement = function (nums, val) {
  let fast = slow = 0
  while (fast < nums.length) {
    if (nums[fast] !== val) {
        //和26题不一样，先赋值可以保证nums[0..slow-1] 是不包含值为 val 的元素的
          nums[slow] = nums[fast]
          slow++
      }
      fast++
  }
  return slow
};