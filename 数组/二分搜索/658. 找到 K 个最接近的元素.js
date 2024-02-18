//https://leetcode.cn/problems/find-k-closest-elements/description/?show=1
//给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。


// 方法：二分查找 + 双指针
//[0,left] 都小于 xxx，后一部分所有元素 [right,n−1]都大于等于 xxx
var findClosestElements = function (arr, k, x) {
  let right = binarySearch(arr, x);
  let left = right - 1;
  while (k-- > 0) {
      if (left < 0) { //边界
          right++;
      } else if (right >= arr.length) { //边界
          left--;
      } else if (x - arr[left] <= arr[right] - x) {
          left--;
      } else {
          right++;
      }
  }
  const ans = [];
  for (let i = left + 1; i < right; i++) {
      ans.push(arr[i]);
  }
  return ans;
}

// 二分查找 
const binarySearch = (arr, x) => {
  let low = 0, high = arr.length - 1;
  while (low < high) {
      const mid = low + Math.floor((high - low) / 2);
      if (arr[mid] >= x) {
          high = mid;
      } else {
          low = mid + 1;
      }
  }
  return low;
}