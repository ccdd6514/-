//https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var lengthOfLongestSubstring = function (s) {
  let window = new Map()

  let left = 0, right = 0
  let res = 0 //结果

  while (right < s.length) {
      let c = s[right]
      right++
      // 进行窗口内数据的一系列更新
      window.set(c, (window.get(c) || 0) + 1);
      // 判断左侧窗口是否要收缩
      while (window.get(c) > 1) {
          let d = s[left]
          left++
          // 进行窗口内数据的一系列更新
          window.set(d, window.get(d) - 1);
      }
      // 在这里更新答案
      res = Math.max(res, right - left);
  }

  return res
};