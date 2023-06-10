/**
 * 格式化数字，往数值后添加单位并保留指定位数的小数
 * @param value 待格式化的数值
 * @param digits 保留的小数位数
 * @returns 返回截取带单位后的字符串
 */
export const formatNumberWithQuantityUnit = (
  value: string | number,
  digits = 2
): string => {
  // 数值分割点
  const unitSplit = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e4, symbol: 'W' },
  ]

  const reg = /\.0+$|(\.[0=9]*[1-9])0+$/

  let number = 0
  // 判断是什么类型
  if (typeof value === 'string') {
    number = Number(value)
  } else if (typeof value === 'number') {
    number = value
  }

  let i
  for (i = unitSplit.length - 1; i > 0; i--) {
    if (number >= unitSplit[i].value) break
  }
  return (
    (number / unitSplit[i].value).toFixed(digits).replace(reg, '$1') +
    unitSplit[i].symbol
  )
}
