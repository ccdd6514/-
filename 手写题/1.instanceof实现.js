function myInstanceof(left, right) {
     if (left === null || left === undefined) return false;

    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype
    while (true) {
        if(!proto) return false
        if (proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

// 测试用例
function testMyInstanceof() {
    class A {}
    class B extends A {}
    class C {}

    const a = new A();
    const b = new B();
    const c = new C();

    console.log(myInstanceof(a, A)); // true
    console.log(myInstanceof(b, B)); // true
    console.log(myInstanceof(b, A)); // true (B 继承自 A)
    console.log(myInstanceof(c, A)); // false (C 没有继承自 A)
    console.log(myInstanceof({}, Object)); // true (所有对象都继承自 Object)
    console.log(myInstanceof(null, A)); // false (null 不是任何类的实例)
    console.log(myInstanceof(undefined, A)); // false (undefined 不是任何类的实例)
}

testMyInstanceof();