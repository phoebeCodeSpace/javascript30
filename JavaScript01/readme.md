### html
- `<kbd>` 标签定义键盘文本。

- audio/video
> - audio|video.currentTime="seconds" 播放会跳跃到指定的位置（以秒计）。
> - audio|video.play() 开始播放音频
- 键盘垂直水平居中

```
//html
div.warp>div.keys>div.key*9

//css
.warp{
  display: flex;
  flex-direction: column;
}
.keys{
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

```


- Array.from:将两类对象(**类似数组的对象**和**可遍历的对象**)转为真正的数组：

```
// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

- js class类名处理


```
document.body.classList.add("a","b");
document.body.classList.remove("a");
document.body.classList.contains('myclass');
document.body.classList.toggle('classtest');
```
