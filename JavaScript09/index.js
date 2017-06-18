const user = {
  name: 'silkshadow',
  age: '25'
}
const p = document.querySelector('p');


console.log('hello');
console.log('Hello %s!', '😂');
console.log("%d年%d月%d日", 2011, 3, 26);
console.log("圆周率是%f", 3.1415926);
console.log("%c不同样式的输出效果", "color: #00fdff; font-size: 2em;");
console.log("%o", user);


console.warn('warn');
console.error('error!');
console.info('info');

console.log(p);
console.dir(p);
console.assert(p.classList.contains('tip'), 'That is wrong!');
console.debug(2)

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// console.dirxml用来显示网页的某个节点（node）所包含的html/xml代码
// console.assert对输入的表达式进行断言，只有表达式为false时，才输出相应的信息到控制台

// console.group输出一组信息的开头
// console.groupEnd结束一组输出信息

// console.clear();
