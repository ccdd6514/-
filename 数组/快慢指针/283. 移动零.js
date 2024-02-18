//https://leetcode.cn/problems/move-zeroes/
//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 思路：结合27题，先移除后补上
var moveZeroes = function (nums) {
  let i = removeElement(nums, 0)
  let len = nums.length

  for (; i < len; i++) {
      nums[i] = 0
  }
};


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

// 解法二：
// 指针 i 、j 初始指向索引 0
// 指针 j 指向提供给非 0 项的坑位
// 指针 i 推进找非 0 项，想交换到 j 指向的坑位
var moveZeroes = function (nums) {
  let i = 0, j = 0;
  while (i < nums.length) {
      if (nums[i] != 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          i++;
          j++;
      } else {
          i++;
      }
  }
};