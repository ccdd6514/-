//https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

var searchRange = function (nums, target) {
  console.log(left_bound(nums, target), right_bound(nums, target))
  return [left_bound(nums, target), right_bound(nums, target)];
};

var left_bound = function (nums, target) {
  let left = 0, right = nums.length - 1
  // 搜索区间为 [left, right]
  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
          // 搜索区间变为 [mid+1, right]
          left = mid + 1
      } else if (nums[mid] > target) {
          // 搜索区间变为 [left, mid-1]
          right = mid - 1
      } else if (nums[mid] === target) {
          // 收缩右侧边界
          right = mid - 1;
      }
  }

  //检查越界情况
  if (left < 0 || left >= nums.length) {
      return -1
  }
  return nums[left] === target ? left : -1
}

var right_bound = function (nums, target) {
  let left = 0, right = nums.length - 1

  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2)
      if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else if (nums[mid] === target) {
          // 这里改成收缩左侧边界即可
          left = mid + 1;
      }
  }

  //检查越界情况
  // 判断 target 是否存在于 nums 中
  // if (left - 1 < 0 || left - 1 >= nums.length) {
  //  return -1;
  // }

  // 由于 while 的结束条件是 right == left - 1，且现在在求右边界
  // 所以⽤ right 替代 left - 1 更好记
  if (right < 0 || right >= nums.length) {
      return -1;
  }
  return nums[right] == target ? right : -1;
}