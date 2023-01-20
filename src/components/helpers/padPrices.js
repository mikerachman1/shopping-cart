const padPrices = (num) => {
  if (num <= 0) { return '0' };
  const numString = num.toString();
  if (numString.includes('.')) {
    const decimalString = numString.substring(numString.indexOf('.'));
    if (decimalString.length === 3) { return numString } 
    if (decimalString.length > 3) { return parseFloat(num).toFixed(2).toString() }
    return numString.padEnd(numString.length + 1, '0');
  }
  return numString.padEnd(numString.length + 3, '.00');
};

export default padPrices;
