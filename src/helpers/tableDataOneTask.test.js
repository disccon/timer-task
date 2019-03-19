import tableDataOneTask from './tableDataOneTask'


it('tableDataOneTask test', () => {
  const task1 = {
    id: 1,
    taskName: 'lorem ipsum d...',
    timeStart: new Date(2019, 0, 1, 7, 28, 14),
    timeEnd: new Date(2019, 0, 1, 8, 31, 23),
    timeSpend: new Date(2019, 0, 1, 8, 31, 23).getTime() - new Date(2019, 0, 1, 7, 28, 14).getTime(),
  }

  const task2 = {
    id: 2,
    taskName: 'long task',
    timeStart: new Date(2019, 0, 1, 8, 51, 57),
    timeEnd: new Date(2019, 0, 1, 10, 53, 38),
    timeSpend: new Date(2019, 0, 1, 10, 53, 38).getTime() - new Date(2019, 0, 1, 8, 51, 57).getTime(),
  }

  const task3 = {
    id: 2,
    taskName: 'long task',
    timeStart: new Date(2019, 0, 1, 22, 51, 21),
    timeEnd: new Date(2019, 0, 2, 4, 53, 43),
    timeSpend: new Date(2019, 0, 2, 4, 53, 43).getTime() - new Date(2019, 0, 1, 22, 51, 21).getTime(),
  }

  const dataChart1 = [{ hour: 0, minutes: 0 }, { hour: 1, minutes: 0 }, { hour: 2, minutes: 0 }, { hour: 3, minutes: 0 },
    { hour: 4, minutes: 0 }, { hour: 5, minutes: 0 }, { hour: 6, minutes: 0 }, { hour: 7, minutes: 32 }, { hour: 8, minutes: 31 },
    { hour: 9, minutes: 0 }, { hour: 10, minutes: 0 }, { hour: 11, minutes: 0 }, { hour: 12, minutes: 0 }, { hour: 13, minutes: 0 },
    { hour: 14, minutes: 0 }, { hour: 15, minutes: 0 }, { hour: 16, minutes: 0 }, { hour: 17, minutes: 0 }, { hour: 18, minutes: 0 },
    { hour: 19, minutes: 0 }, { hour: 20, minutes: 0 }, { hour: 21, minutes: 0 }, { hour: 22, minutes: 0 }, { hour: 23, minutes: 0 }]

  const dataChart2 = [{ hour: 0, minutes: 0 }, { hour: 1, minutes: 0 }, { hour: 2, minutes: 0 }, { hour: 3, minutes: 0 },
    { hour: 4, minutes: 0 }, { hour: 5, minutes: 0 }, { hour: 6, minutes: 0 }, { hour: 7, minutes: 0 }, { hour: 8, minutes: 9 },
    { hour: 9, minutes: 60 }, { hour: 10, minutes: 52 }, { hour: 11, minutes: 0 }, { hour: 12, minutes: 0 }, { hour: 13, minutes: 0 },
    { hour: 14, minutes: 0 }, { hour: 15, minutes: 0 }, { hour: 16, minutes: 0 }, { hour: 17, minutes: 0 }, { hour: 18, minutes: 0 },
    { hour: 19, minutes: 0 }, { hour: 20, minutes: 0 }, { hour: 21, minutes: 0 }, { hour: 22, minutes: 0 }, { hour: 23, minutes: 0 }]

  const dataChart3 = [{ hour: 0, minutes: 0 }, { hour: 1, minutes: 0 }, { hour: 2, minutes: 0 }, { hour: 3, minutes: 0 },
    { hour: 4, minutes: 0 }, { hour: 5, minutes: 0 }, { hour: 6, minutes: 0 }, { hour: 7, minutes: 0 }, { hour: 8, minutes: 0 },
    { hour: 9, minutes: 0 }, { hour: 10, minutes: 0 }, { hour: 11, minutes: 0 }, { hour: 12, minutes: 0 }, { hour: 13, minutes: 0 },
    { hour: 14, minutes: 0 }, { hour: 15, minutes: 0 }, { hour: 16, minutes: 0 }, { hour: 17, minutes: 0 }, { hour: 18, minutes: 0 },
    { hour: 19, minutes: 0 }, { hour: 20, minutes: 0 }, { hour: 21, minutes: 0 }, { hour: 22, minutes: 9 }, { hour: 23, minutes: 60 }]

  const mockFn = jest.fn(tableDataOneTask)
  mockFn(task1.timeStart, task1.timeSpend)
  mockFn(task2.timeStart, task2.timeSpend)
  mockFn(task3.timeStart, task3.timeSpend)
  expect(mockFn).toHaveBeenCalled()
  expect(mockFn.mock.calls.length).toBe(3)
  expect(mockFn.mock.calls[0][0]).toEqual(task1.timeStart)
  expect(mockFn.mock.calls[0][1]).toEqual(task1.timeSpend)
  expect(mockFn.mock.calls[1][0]).toEqual(task2.timeStart)
  expect(mockFn.mock.calls[1][1]).toEqual(task2.timeSpend)
  expect(mockFn.mock.calls[2][0]).toEqual(task3.timeStart)
  expect(mockFn.mock.calls[2][1]).toEqual(task3.timeSpend)
  expect(mockFn.mock.results[0].value).toEqual(dataChart1)
  expect(mockFn.mock.results[1].value).toEqual(dataChart2)
  expect(mockFn.mock.results[2].value).toEqual(dataChart3)
})
