import React from 'react'
import generateRows from '../../helpers/generateTasks'
import TableTask from './TableTask'


it('TableTask test', () => {
  const newTasks = generateRows()
  const wrapper = mount(<TableTask tasks={newTasks} />)
  expect(wrapper.props().tasks).toEqual(newTasks)
  expect(wrapper.props().tasks[0]).toHaveProperty('id', 1)
  expect(wrapper.props().tasks[0]).toHaveProperty('taskName', 'Task 1')
  expect(wrapper.props().tasks[0]).toHaveProperty('timeStart', 'timeEnd', 'timeSpend')
  expect(typeof wrapper.props().tasks[0].timeSpend).toBe('number')
  expect(typeof wrapper.props().tasks[0].timeStart).toBe('object')
})
