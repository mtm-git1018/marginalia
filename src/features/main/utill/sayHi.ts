export function sayHi() {
  const date = Number(new Date().getHours())

  if (date >= 6 && date <= 10) {
    return '좋은 아침입니다.'
  } else if (date >= 11 && date <= 18) {
    return '좋은 오후입니다.'
  } else if (date >= 19 && date <= 24) {
    return '좋은 저녁되세요.'
  } else {
    return '감성적인 새벽이네요.'
  }
}