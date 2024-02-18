//https://leetcode.cn/problems/valid-palindrome/description/?show=1
//如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。


// 思路：
// 先把所有字符转化成小写，并过滤掉空格和标点这类字符
// 然后对剩下的这些目标字符执行双指针算法，判断回文串
var isPalindrome = function (s) {
  // 先把所有字符转化成小写，并过滤掉空格和标点这类字符
  let newS = ''
  for (let i = 0; i < s.length; i++) {
      let c = s[i]
      if (/[a-zA-Z0-9]/.test(c)) {
          newS += c.toLowerCase();
      }
  }

  // 对剩下的这些目标字符执行双指针算法，判断回文串
  let left = 0
  let right = newS.length - 1
  while (left < right) {
      if (newS[left] !== newS[right]) {
          return false
      }
      left++
      right--
  }
  return true
};