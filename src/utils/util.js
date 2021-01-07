
/**
 * @param {校验的字符串} str 
 * @param {校验类型 'phone' 'password'} type 
 * @Auth zhangwei
 * @date 20181029
 */
export const validate = (str, type) => {
  let isMatch = false,
    isMobile = /^1[3578]\d{9}$|^147\d{8}$/,
    ispass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;  // 6至10位登录密码，至少包含一位数字和字母

  switch(type) {
    case 'phone':
      if(isMobile.test(str)) {
        isMatch = true;
      }
      break;
    case 'password':
      if(ispass.test(str)) {
        isMatch = true;
      }
      break;
  }

  return isMatch;
}

/**
 * parseTime(time, '{y}-{m}-{d}')
 * parseTime(time, '{y}-{m}-{d} {h}:{i}:{s}')
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 滑动删除
 * @Auth zhangwei
 * @date 20181029
 */
export let utilSlide = {
  elem: '.list-item',
  startX: 0,
	endX: 0,
  //滑动开始
  touchStart: function(e){
    this.startX = e.touches[0].clientX;
  },
  //滑动
  touchMove: function(e){
    let parentElement = e.currentTarget.parentElement;
    this.endX = e.changedTouches[0].clientX;
    if( parentElement.dataset.type == 0 && this.startX - this.endX > 30  ){
      this.restSlide();
      parentElement.dataset.type = 1;
      e.preventDefault();
    }

    if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
      this.restSlide();
      parentElement.dataset.type = 0;
      e.preventDefault();
    }
  },
  //判断当前是否有滑块处于滑动状态
  checkSlide: function(){
    let listItems = document.querySelectorAll(this.elem);

    for( let i = 0 ; i < listItems.length ; i++){
      if( listItems[i].dataset.type == 1 ) {
        return true;
      }
    }
    return false;
  },
  //一次只能滑动一个
  restSlide: function(){
    let listItems = document.querySelectorAll(this.elem);

    for( let i = 0 ; i < listItems.length ; i++){
      listItems[i].dataset.type = 0;
    }
  }
}