//时间戳
function throttle(fn, wait) {
  let preTime = Date.now();

  return function () {
    let context = this;
    let args = arguments;

    let nowTime = Date.now();

    if (nowTime - preTime > wait) {
      fn.apply(context, args);
      preTime = nowTime;
    }
  };
}

///定时器
        function throttle1(fn, wait) {
            let timer = null;

            return function () {
                let context = this;
                let args = arguments;
                if (!timer) {
                    timer = setTimeout(() => {
                        timer = null;
                        fn.apply(context, args);
                    }, wait);
                }
            };
        }