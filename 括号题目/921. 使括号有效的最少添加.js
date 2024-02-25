//https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/description/

// 给定一个括号字符串 s ，在每一次操作中，你都可以在字符串的任何位置插入一个括号

// 例如，如果 s = "()))" ，你可以插入一个开始括号为 "(()))" 或结束括号为 "())))" 。
// 返回 为使结果字符串 s 有效而必须添加的最少括号数。

var minAddToMakeValid = function (s) {
  let res = 0  //左括号插入次数
  let need = 0 //右括号需要个数

  for (let c of s) {
      if (c === '(') {
          need++
      }
      if (c === ')') {
          need--

          if (need === -1) { //说明需要插入左括号
              need = 0 //重新置为0
              res++ // 需插⼊⼀个左括号
          }
      }
  }

  return res + need 
};

// 1、当 need == -1 的时候意味着什么？
// 因为只有遇到右括号 ) 的时候才会 need--，need == -1 意味着右括号太多了，所以需要插⼊左括号。
// ⽐如说 s = "))" 这种情况，需要插⼊ 2 个左括号，使得 s 变成 "()()"，才是⼀个有效括号串。

// 2、算法为什么返回 res + need？
// 因为 res 记录的左括号的插⼊次数，need 记录了右括号的需求，当 for 循环结束后，若 need 不为 0，那么
// 就意味着右括号还不够，需要插⼊