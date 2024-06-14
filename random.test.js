const randomInt = require('./task/task_03')

describe(
   'test random integer',
   () => {
      const testCases = [
         {
            from: 100,
            to: 110
         },
         {
            from: 200,
            to: 205
         },
      ]

      testCases.forEach(test => {
         it(
            `Рандомное число от : ${test.from} до: ${test.to}`,
            () => {
               const res = randomInt(test.from, test.to)
               console.log('result: ', res);
               expect(res).toBeGreaterThanOrEqual(test.from)
               expect(res).toBeLessThanOrEqual(test.to)
            }
         )
      })
   }
)