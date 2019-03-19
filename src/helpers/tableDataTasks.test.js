import tableDataTasks from './tableDataTasks'


it('tableDataTasks test', () => {
  const tasks = [{
    id: 1,
    taskName: 'lorem ipsum d...',
    timeStart: new Date(2019, 0, 1, 7, 28, 14),
    timeEnd: new Date(2019, 0, 1, 8, 31, 23),
    timeSpend: new Date(2019, 0, 1, 8, 31, 23).getTime() - new Date(2019, 0, 1, 7, 28, 14).getTime(),
  },
  {
    id: 2,
    taskName: 'long task',
    timeStart: new Date(2019, 0, 1, 8, 51, 57),
    timeEnd: new Date(2019, 0, 1, 10, 53, 38),
    timeSpend: new Date(2019, 0, 1, 10, 53, 38).getTime() - new Date(2019, 0, 1, 8, 51, 57).getTime(),
  },
  {
    id: 3,
    taskName: 'some new',
    timeStart: new Date(2019, 0, 1, 12, 39, 51),
    timeEnd: new Date(2019, 0, 1, 12, 46, 19),
    timeSpend: new Date(2019, 0, 1, 12, 46, 19).getTime() - new Date(2019, 0, 1, 12, 39, 51).getTime(),
  },
  {
    id: 4,
    taskName: 'last one task',
    timeStart: new Date(2019, 0, 1, 13, 50, 20),
    timeEnd: new Date(2019, 0, 1, 14, 20, 53),
    timeSpend: new Date(2019, 0, 1, 14, 20, 53).getTime() - new Date(2019, 0, 1, 13, 50, 20).getTime(),
  }]

  const dataChartTasks = [{ hour: 0, minutes: 0 }, { hour: 1, minutes: 0 }, { hour: 2, minutes: 0 }, { hour: 3, minutes: 0 },
    { hour: 4, minutes: 0 }, { hour: 5, minutes: 0 }, { hour: 6, minutes: 0 }, { hour: 7, minutes: 32 }, { hour: 8, minutes: 40 },
    { hour: 9, minutes: 60 }, { hour: 10, minutes: 52 }, { hour: 11, minutes: 0 }, { hour: 12, minutes: 6 }, { hour: 13, minutes: 10 },
    { hour: 14, minutes: 20 }, { hour: 15, minutes: 0 }, { hour: 16, minutes: 0 }, { hour: 17, minutes: 0 }, { hour: 18, minutes: 0 },
    { hour: 19, minutes: 0 }, { hour: 20, minutes: 0 }, { hour: 21, minutes: 0 }, { hour: 22, minutes: 0 }, { hour: 23, minutes: 0 }]

  const mockFn = jest.fn(tableDataTasks)
  mockFn(tasks)
  expect(mockFn).toHaveBeenCalled()
  expect(mockFn.mock.calls.length).toBe(1)
  expect(mockFn.mock.calls[0][0]).toEqual(tasks)
  expect(mockFn.mock.results[0].value).toEqual(dataChartTasks)
})
