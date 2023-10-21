module.exports = function toReadable(number) {
   switch ((number + '').length) {
      case 1:
         return convertOnes(number)
         break;
      case 2:
         return convertTens(number)
         break;
      case 3:
         return convertHundreds(number)
         break;
   }
}


function convertOnes(number) {
   return ones[number]
}

function convertTens(number) {
   if (number > 20 && number % 10 != 0) {
      const readableTens = tens[(number + '')[0] + '0']
      const readableOnes = convertOnes((number + '')[1])
      return readableTens + ' ' + readableOnes
   } else return tens[number]
}

function convertHundreds(number) {
   if (number % 100 === 0) return ones[(number + '')[0]] + ' hundred'
   else if ((number + '').slice(1) < 10) return ones[(number + '')[0]] + ' hundred ' + convertOnes((number + '').slice(2))
   else
      return ones[(number + '')[0]] + ' hundred ' + convertTens((number + '').slice(1))
}

const ones = {
   0: 'zero',
   1: 'one',
   2: 'two',
   3: 'three',
   4: 'four',
   5: 'five',
   6: 'six',
   7: 'seven',
   8: 'eight',
   9: 'nine'
}

const tens = {
   10: 'ten',
   11: 'eleven',
   12: 'twelve',
   13: 'thirteen',
   14: 'fourteen',
   15: 'fifteen',
   16: 'sixteen',
   17: 'seventeen',
   18: 'eighteen',
   19: 'nineteen',
   20: 'twenty',
   30: 'thirty',
   40: 'forty',
   50: 'fifty',
   60: 'sixty',
   70: 'seventy',
   80: 'eighty',
   90: 'ninety'
}