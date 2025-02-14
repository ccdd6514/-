// 创建一个仅用来继承的函数，然后在返回新对象之前，对这个新对象进行增强，以此确保每个实例都有其独立的属性副本,可以让子对象默认具有自己的属性。
// 创建一个函数，这个函数的目的是为了创建一个新对象。
// 借助Object.create()方法，以某个对象作为原型创建新对象。
// 在这个新对象上添加方法或属性。

// 缺点（同原型式继承）：
// 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
// 无法传递参数
// 返回这个新对象
function clone(obj) {
  let clone = Object.create(obj)//// 通过调用Object.create() 函数创建一个新对象
  clone.getLike = function () {//增强对象
    return this.like
  }
  clone.sex = '男'//子对象新添加的属性
  return clone
}

let parent = {
  name: 'JiSung',
  age: 22,
  like: [1, 2]
}

let child = clone(parent)
console.log(child);