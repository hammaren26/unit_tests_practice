function reverseString(str) {
   str = str
      .split('')
      .sort(() => -1)
      .join('')

   return str
}


module.exports = reverseString