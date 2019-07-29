// 获取随机字符串
export function getRandomStr(): string {
  return Date.now() + parseInt(0xfffffffff*Math.random()+'').toString(16)
}