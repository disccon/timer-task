import React from 'react'
import generateRows from '../../helpers/generateRows'
import TableTask from './TableTask'


it('TableTask test', () => {
  const newRows = generateRows(13, 1, 30)
  const wrapper = mount(<TableTask rows={newRows} />)
  expect(wrapper.props().rows).toEqual(newRows)
  expect(wrapper.props().rows.length).toBe(13)
  expect(wrapper.props().rows[9]).toHaveProperty('id', 10)
  expect(wrapper.props().rows[9]).toHaveProperty('task', 'Task 10')
  expect(wrapper.props().rows[9]).toHaveProperty('timeStart', 'timeEnd', 'timeSpend')
})
