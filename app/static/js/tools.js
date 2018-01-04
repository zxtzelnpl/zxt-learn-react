const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

function formatTimeToStr(date) {
  return `${date.getDate()}日-${weeks[date.getDay()]}`
}

function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

let myStorage = {
  setItem:function(){
    console.info('localStorage无法使用')
  },
  getItem:function(){
    console.info('localStorage无法使用')
  },
  clear:function(){
    console.info('localStorage无法使用')
  }
}

if (typeof localStorage === 'object') {
  console.info('localStorage可以使用')
  myStorage = localStorage
}

export {
  formatTimeToStr,
  myStorage,
  trim
}
