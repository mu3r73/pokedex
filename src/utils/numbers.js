/**
 * redondea un número a 1 decimal
 * @param {number} num número a redondear
 * @returns número redondeado a 1 decimal
 */
const roundToOneDecimalDigit = (num) => {
  return (Math.round(num) * 10) / 10
}

export {
  roundToOneDecimalDigit
}