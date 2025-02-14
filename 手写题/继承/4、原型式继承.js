// 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。
// 提醒: 原型式继承中, 包含引用类型值的属性始终都会共享相应的值, 就像使用原型模式一样.

// 缺点
// 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
// 无法传递参数
// 使用Object.create比较规范(与原型链继承不同的是使用Object.create，而原型链是new)
function object(obj) {
  function F(){}
  F.prototype = obj;
  return new F();
}

var person = {
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.friends.push("Barbie");

console.log(anotherPerson)