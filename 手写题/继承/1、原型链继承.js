// https://juejin.cn/post/6844903696111763470?searchId=20250214161427222B07E9A4DA4E64399E#heading-2
// 原型链继承主要是利用原型对所有实例共享的特性来实现继承的。该继承方式主要有如下特点

// 原型在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。
// 创建子类型的时候不能向超类型传递参数。

function Child(name, age) {
    this.name = name;
    this.age = age;
}

function Father() {
    this.colors = ['red', 'blue']
}

// 这里是关键，创建Father的实例，并将该实例赋值给Child.prototype
Child.prototype = new Father()
Child.prototype.constructor = Child;

const child = new Child('小明', 18)
console.log(child, child.colors) //{ name: '小明', age: 18 } [ 'red', 'blue' ]

//缺点
//多个实例对引用类型的操作会被篡改。
child.colors.push('black')
const child2 = new Child('小红', 18)
console.log(child2, child2.colors) //{ name: '小红', age: 18 } [ 'red', 'blue', 'black' ]
