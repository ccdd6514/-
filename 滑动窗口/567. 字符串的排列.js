//https://leetcode.cn/problems/permutation-in-string/description/

//给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
//换句话说，s1 的排列之一是 s2 的 子串 。

var checkInclusion = function (s1, s2) {
  let need = new Map()
  let window = new Map()

  for (let c of s1) {
      need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }

  let left = right = 0
  let valid = 0

  while (right < s2.length) {
      let c = s2[right]
      right++
      // 进行窗口内数据的更新
      if (need.has(c)) {
          window.set(c, window.has(c) ? window.get(c) + 1 : 1)
          if (window.get(c) === need.get(c)) {
              valid++;
          }
      }
      // 判断左侧窗口是否需要收缩
      while (right - left >= s1.length) {
          // 更新结果
          if (valid === need.size) {
              return true;
          }
          let d = s2[left]
          left++
          if (need.has(d)) {
              if (window.get(d) === need.get(d)) {
                  valid--;
              }
              window.set(d, window.get(d) - 1)
          }
      }
  }

  // 未找到符合条件的子串
  return false;
};