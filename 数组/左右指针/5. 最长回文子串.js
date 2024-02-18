// https://leetcode.cn/problems/longest-palindromic-substring/description/

//给你一个字符串 s，找到 s 中最长的回文子串。
//思路：寻找回文串的问题核心思想是：从中间开始向两边扩散来判断回文串，对于最长回文子串，遍历每个中心点
var longestPalindrome = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
      // 以 s[i] 和 s[i+1] 为中心的最长回文子串
      let s1 = palindrome(s, i, i);
      let s2 = palindrome(s, i, i + 1);
      // res = longest(res, s1, s2)
      res = res.length > s1.length ? res : s1;
      res = res.length > s2.length ? res : s2;
  }
  return res;

  function palindrome(s, l, r) {
      // 防止索引越界
      while (l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
          // 向两边展开
          l--;
          r++;
      }
      // 返回以 s[l] 和 s[r] 为中心的最长回文串
      return s.substring(l + 1, r);
  }
};