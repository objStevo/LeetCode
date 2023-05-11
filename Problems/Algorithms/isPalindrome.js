/**
 * @param {number} x
 * @return {boolean}
 **/

export const isPalindrome = (x) => {
  const xString = x.toString();
  const center = Math.floor(xString.length / 2);
  let result = true;

  if (x < 0) return false;
  if (0 <= x && x <= 9) return true;

  for (let i = 0; i < center && result === true; i++) {
    if (xString[i] !== xString[xString.length - 1 - i]) result = false;
  }

  return result;
};

console.log(isPalindrome(4));
