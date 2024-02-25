//https://leetcode.cn/problems/valid-parentheses/description/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

var isValid = function (s) {
  const stack = []
  map = {
      // 提前准备一个字典表用于配对儿比较
      ']': '[',
      '}': '{',
      ')': '(',
  }

  for (let c of s) {
      if (c === '(' || c === '{' || c === '[') {  // 如果是左括号，则入栈
          stack.push(c)
      } else { // 字符 c 是右括号
          if (stack.length && map[c] === stack[stack.length - 1]) {  //匹配到栈尾元素
              stack.pop()
          } else {
              return false
          }
      }
  }

  return stack.length === 0
};