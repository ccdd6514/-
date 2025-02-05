function createObject(proto, propertiesObject) {
  if (propertiesObject === null) {
    // 这里没有判断propertyObject是否是原始包装对象
    throw 'TypeError'
  }

  // 创建一个新的构造函数，其 prototype 指向传入的原型对象
  function Func() {}
  Func.prototype = proto;

  // 创建新对象并设置其 __proto__ 属性为传入的原型对象
  const obj = new Func();

  // 如果提供了属性描述符对象，则使用 Object.defineProperties 定义这些属性
  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }
  
  if (proto === null) {
    // 创建一个没有原型对象的对象，Object.create(null)
    obj.__proto__ = null
  }

  // 返回新创建的对象
  return obj;
}

// 测试示例
const proto = {
  greet: function() {
    console.log('Hello!');
  }
};

const obj = createObject(proto, {
  name: {
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
  }
});

console.log(obj.name); // 输出: Alice
obj.greet(); // 输出: Hello!
console.log(createObject(null))