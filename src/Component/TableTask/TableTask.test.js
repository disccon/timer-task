import React from 'react'
import generateRows from '../../helpers/generateTasks'
import TableTask from './TableTask'


it('TableTask test', () => {
  const newRows = generateRows()
  const wrapper = mount(<TableTask rows={newRows} />)
  expect(wrapper.props().rows).toEqual(newRows)
  expect(wrapper.props().rows[0]).toHaveProperty('id', 1)
  expect(wrapper.props().rows[0]).toHaveProperty('taskName', 'Task 1')
  expect(wrapper.props().rows[0]).toHaveProperty('timeStart', 'timeEnd', 'timeSpend')
})
