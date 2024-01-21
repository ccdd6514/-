//https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/

//思路
// 我们让慢指针 slow 走在后面，快指针 fast 走在前面探路，找到一个不重复的元素就告诉 slow 并让 slow 前进一步。
// 这样当 fast 指针遍历完整个数组 nums 后，**nums[0..slow] 就是不重复元素**。

var removeDuplicates = function(nums) {
  if(!nums.length) return 0
  let slow = 0
  let fast = 0
  while(fast < nums.length) {
      if(nums[slow] !== nums[fast]) {
          //不相等前进（fast已经探路过了）
          slow++
          // 维护 nums[0..slow] 无重复
          nums[slow] = nums[fast]
      }
      fast++
  }
  // 数组长度为索引 + 1
  return slow+1
};