/**
 * bind方法会创建一个新函数。当这个新函数被调用时，bind的第一个参数将作为它运行时的this(该参数不能被重写), 之后的一序列参数将会在传递的实参前传入作为它的参数。
新函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器，提供的this值被忽略。
 */
Function.prototype.myBind = function (context) {
    const self = this;
    const args = Array.prototype.slice.call(arguments, 1);
    const cacheFn = function () { };
    const newFn = function () {
        const newArgs = Array.prototype.slice.call(arguments);
        /**
           * 这里的 this 是指调用时的执行上下文
           * 如果是 new 操作，需要绑定 new 之后作用域，this 指向新的实例对象
        */
        fn.apply(this instanceof cacheFn ? this : context, args.concat(newArgs));
    }
    cacheFn.prototype = self.prototype;
    newFn.prototype = new cacheFn();
    return newFn;
}