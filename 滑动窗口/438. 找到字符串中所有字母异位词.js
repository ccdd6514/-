//https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/

//给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
//异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

// 示例 1:
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

var findAnagrams = function (s, p) {
  let need = new Map()
  let window = new Map()

  for (let c of p) {
      need.set(c, (need.get(c) || 0) + 1)
  }

  let left = 0, right = 0
  let valid = 0
  //记录索引
  let res = []

  while (right < s.length) {
      let c = s[right]
      right++
      // 进行窗口内数据的一系列更新
      if (need.has(c)) {
          window.set(c, (window.get(c) || 0) + 1)
          if (window.get(c) === need.get(c)) {
              valid++
          }
      }
      // 判断左侧窗口是否要收缩
      if (right - left >= p.length) {
          // 当窗口符合条件时，把起始索引加入 res
          if (valid === need.size) {
              res.push(left);
          }
          let d = s[left]
          left++
          // 进行窗口内数据的一系列更新
          if (need.has(d)) {
              if (window.get(d) === need.get(d)) {
                  valid--
              }
              window.set(d, window.get(d) - 1)
          }
      }
  }
  return res;
};