//将原型链继承和构造函数继承组合起来使用的一种方式

// 1.这种方式解决了上面的两种模式单独使用时的问题。能向父类型传递参数，能获取父类原型上的属性和方法。
// 2.由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数。
// 3.由于原型是父类实例，所以实例对象的原型中多了很多不必要的属性（实例中有父类的方法和属性，原型里面还有，都是重复的）。
// 4.实例对象既属于父类又属于子类。

// 实例对象Child上的两个属性就屏蔽了其原型对象Child.prototype的两个同名属性。所以，组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。

function Father(name, age) {
    this.name = name;
    this.age = age;
    this.fatherColors = ["green", "yellow"];
}

function Child(name, age, sex) {
    // 构造继承
    Father.call(this, name, age);
    this.colors = ["red", "blue"];
    this.sex = sex;
}

//原型继承
Child.prototype = new Father();
Child.prototype.constructor = Child;

const child = new Child("randy", 26, "male");

console.log(child)