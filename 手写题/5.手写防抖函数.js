function debounce(fn, wait) {
  let timer = null;

  return function () {
    let context = this;
    let args = arguments;
    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 示例用法
// const handleResize = (param1, param2) => {
//     console.log('窗口大小已改变', param1, param2);
// };

// // 使用 debounce 包装 handleResize，并传递参数
// const debouncedHandleResize = debounce(handleResize, 300);

// window.addEventListener('resize', () => {
//     debouncedHandleResize('参数1', '参数2');
// });
