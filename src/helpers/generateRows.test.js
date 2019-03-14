import generateRows from './generateRows'


it('TableTask test', () => {
  const mockFn = jest.fn(generateRows)
  mockFn(13, 1, 30)
  mockFn(25, 1, 30)
  mockFn(60, 1, 30)
  expect(mockFn).toHaveBeenCalled()
  expect(mockFn.mock.calls.length).toBe(3)
  expect(mockFn.mock.calls[0][0]).toBe(13)
  expect(mockFn.mock.results[0].value.length).toEqual(13)
  expect(mockFn.mock.results[1].value.length).toEqual(25)
  expect(mockFn.mock.results[1].value[19]).toHaveProperty('id', 20)
  expect(mockFn.mock.results[1].value[19]).toHaveProperty('task', 'Task 20')
  expect(mockFn.mock.results[2].value.length).toEqual(60)
  expect(mockFn.mock.results[2].value[39]).toHaveProperty('id', 40)
  expect(mockFn.mock.results[2].value[39]).toHaveProperty('task', 'Task 40')
})
