//通过在子类型的函数中调用父类型的构造函数来实现的
// 1.构造函数继承解决了不能向父类型传递参数的缺点。
// 2.但是它存在的一个问题就是无法实现函数方法的复用，就是父类方法在每个实例里面都会存在，相较于原型继承浪费了存储空间。
// 3.并且父类型原型上定义的方法子类型也没有办法访问到。
// 4.实例属于子类不属于父类

function Father(name, age) {
    this.name = name;
    this.age = age;
    this.colors = ['red', 'blue']
}

function Child(name, age, sex) {
    Father.call(this, name, age)
    this.sex = sex;
}

const child = new Child("randy", 26, "male");

console.log(child) //Child {name: 'randy',age: 26,colors: ['red', 'blue'],sex: 'male'}