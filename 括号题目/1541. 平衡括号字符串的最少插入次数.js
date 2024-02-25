//https://leetcode.cn/problems/minimum-insertions-to-balance-a-parentheses-string/description/

// 给你一个括号字符串 s ，它只包含字符 '(' 和 ')' 。一个括号字符串被称为平衡的当它满足：

// 任何左括号 '(' 必须对应两个连续的右括号 '))' 。
// 左括号 '(' 必须在对应的连续两个右括号 '))' 之前。
// 比方说 "())"， "())(())))" 和 "(())())))" 都是平衡的， ")()"， "()))" 和 "(()))" 都是不平衡的。

// 你可以在任意位置插入字符 '(' 和 ')' 使字符串平衡。

// 请你返回让 s 平衡的最少插入次数。

var minInsertions = function(s) {
  // insertNum表示实时插入的括号的数量, 为了构成前面的括号都已经匹配
  // needRight表示需要的右括号的数量
  let insertNum = 0, needRight = 0;

  for (let char of s) {
      if (char === '(') {
          needRight += 2;

          // 左括号对应的右括号一定要是偶数
          // 如果为奇数, 表明此时需要插入一个右括号
          // 为什么是需要插入一个右括号呢? 因为在char为)的情况下, 如果需要左括号, 我们已经实时插入了
          // 此时为奇数, 表示让char之前的所有括号匹配, 还差一个右括号
          // 所以此时需要插入一个括右号
          if (needRight % 2 === 1) {
              insertNum++;
              // 既然插入了一个右括号, 那么说明右括号的需求减一
              needRight--;
          }
      } else if (char === ')') {
          needRight--;

          if (needRight === -1) {
              // 说明本身不需要right, 这时候出现了一个右括号
              // 那么对应的这时候需要一个右括号和一个左括号
              // 那么实时插入一个左括号, 然后右括号的需求变为1
              insertNum++;
              needRight = 1;
          }
      }
  }

  return insertNum + needRight;
};