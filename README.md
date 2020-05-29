# fed-e-task-01-01
module one homework

1. 10 js是单线程执行，执行到最后i为10，所以结果是10
2. undefine 因为块级作用域里let声明变量不会提升
3. 见app.js
4. var 变量会提升，let、const不会；
   let、const作用于块级作用域，const不可重新赋值，但是可以改变它的属性的值，只要不改变地址指向都可以对其进行操作，let可以进行改变赋值操作；
5. 20  this指的是调用它的函数obj,所以this.a是obj.a为20
6. symbol类型的用途：
   <1>可以用来作为对象属性名（key）； 
   <2>使用Symbol来替代常量,保证常量之间是唯一的关系；
   <3>使用Symbol定义类的私有属性/方法
7. 浅拷贝是指拷贝一层，深层次对象级别就只拷贝引用；深拷贝是每一层的数据都会拷贝出来。简单来说就是浅拷贝的时候如果数据是基本数据类型，
   那么就如同直接赋值那样，会拷贝其本身；
   如果除了基本数据之外还有一层的对象，那么对于浅拷贝来说，就只能拷贝其引用。如果原对象的值发生了变化，那么这个结果不光会反映到原对象上，
   但是深拷贝就不一样，即使有嵌套关系依然会全部的拷贝出来。
8. JS异步编程：由于JS是单线程同一时间只能做一件事，所以出现了异步编程；
   event loop: 是JS执行同步任务的一个主线程，即“执行栈”
   宏任务：当前调用栈中执行的代码成为宏任务
   微任务： 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务,可以理解为回调事件。
9. 见app.js
10. TypeScript是在JavaScript的基础上衍生出来的语言，功能更强大，生态也更健全，更完善
11. TypeScript
      优点:可按JS标准语法编写代码；编译转换ES新特性，移除注解
      缺点:语言本身多了很多概念，提高了学习成本属于渐进式；项目初期，TypeScript会增加一些成本
