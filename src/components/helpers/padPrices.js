const padPrices = (num) => {
  const numString = num.toString();
  if (numString.includes('.')) {
    const decimalIndex = numString.indexOf('.')
    const decimalString = numString.substring(decimalIndex);
    if (decimalString.length === 3) { return numString } 
    
    return numString.padEnd(numString.length + 1, '0');
  } else {
    return numString.padEnd(numString.length + 3, '.00')
  }
};

export default padPrices;