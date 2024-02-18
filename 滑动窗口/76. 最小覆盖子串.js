//https://leetcode.cn/problems/minimum-window-substring/description/

//给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
//如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

var minWindow = function (s, t) {
  const need = new Map();
  const window = new Map();

  // 统计 t 中每个字符出现的次数
  for (let c of t) {
      need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }
  //使⽤ left 和 right 变量初始化窗⼝的两端
  let left = 0, right = 0;
  //表示窗⼝中满⾜ need 条件的字符个数，valid 和 need.size 的⼤⼩相同，则说明窗已满⾜条件
  let valid = 0;
  // 记录最小覆盖子串的起始索引及长度
  let start = 0, len = Infinity;

  while (right < s.length) {
      // c 是将移入窗口的字符
      let c = s[right];
      // 右移窗口
      right++;
      // 进行窗口内数据的一系列更新
      if (need.has(c)) {
          window.set(c, window.has(c) ? window.get(c) + 1 : 1)
          if (window.get(c) === need.get(c)) {
              valid++;
          }
      }

      // 判断左侧窗口是否要收缩
      while (valid === need.size) {
          // 在这里更新最小覆盖子串
          if (right - left < len) {
              start = left;
              len = right - left;
          }
          // d 是将移出窗口的字符
          let d = s[left];
          // 左移窗口
          left++;
          // 进行窗口内数据的一系列更新
          if (need.has(d)) {
              if (window.get(d) === need.get(d)) {
                  valid--;
              }
              window.set(d, window.get(d) - 1)
          }
      }
  }

  // 返回最小覆盖子串
  return len === Infinity ? "" : s.substr(start, len);
};