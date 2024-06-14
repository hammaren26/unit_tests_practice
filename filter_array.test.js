const arrayFilter = require('./task/task_02')

describe(
   'filter array',
   () => {
      const testCases = [
         {
            in: [0, 1, 2, 3, 4, 5],
            expected: [0, 2, 4]
         },
         {
            in: [true, false, true, false, true, false],
            expected: [true, true, true]
         },
      ]

      testCases.forEach(test => {
         it(
            `Входящий массив : ${test.in} ожидаю: ${test.expected}`,
            () => {
               const res = arrayFilter(test.in)
               expect(res).toEqual(test.expected)
            }
         )
      })
   }
)