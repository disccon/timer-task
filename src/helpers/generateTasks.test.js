import generateTasks from './generateTasks'


it('TableTask test', () => {
  const mockFn = jest.fn(generateTasks)
  mockFn()
  const tasksLength = new Date().getHours()
  expect(mockFn).toHaveBeenCalled()
  expect(mockFn.mock.results[0].value.length).toEqual(tasksLength)
  expect(mockFn.mock.results[0].value[0]).toHaveProperty('id', 1)
  expect(mockFn.mock.results[0].value[0]).toHaveProperty('timeStart', 'timeEnd', 'timeSpend')
  expect(typeof mockFn.mock.results[0].value[0].timeSpend).toBe('number')
  expect(typeof mockFn.mock.results[0].value[0].timeStart).toBe('object')
})
