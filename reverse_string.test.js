const reverseString = require('./task/task_01')

// test(
//    'Проверяем реверс строки',
//    () => {
//       expect(reverseString('Привет мир')).toBe('рим тевирП')
//    }
// )

// test(
//    'Проверяем реверс строки',
//    () => {
//       expect(reverseString('v rot mne nogi')).toBe('igon enm tor v')
//    }
// )



describe(
   'my check test',
   () => {
      const testCases = [
         {
            inString: 'hello',
            expected: 'olleh'
         },
         {
            inString: 'blin ha',
            expected: 'ah nilb'
         },
         {
            inString: 'v rot mne nogi',
            expected: 'igon enm tor v'
         }
      ]

      testCases.forEach((test) => {
         it(
            `Входящая строка : ${test.inString} ожидаю: ${test.expected}`,
            () => {
               const res = reverseString(test.inString)
               expect(res).toBe(test.expected)
            }
         )
      })
   }
)