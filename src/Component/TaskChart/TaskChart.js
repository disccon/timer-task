import React from 'react'
import PropTypes from 'prop-types'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { connect } from 'react-redux'
import tableDataTasks from '../../helpers/tableDataTasks'
import tableDataOneTask from '../../helpers/tableDataOneTask'


const TaskChart = ({ task, tasks }) => {
  console.log(task)
  const dataChart = task ? tableDataOneTask(task) : tableDataTasks(tasks)
  return (
    <BarChart
      width={1250}
      height={300}
      data={dataChart}
      margin={{
        top: 20, right: 30, left: 0, bottom: 5,
      }}
    >
      <CartesianGrid stroke='#f5f5f5' />
      <XAxis dataKey='hour' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='minutes' name='Minutes in the hours' fill='#344dc4' />
    </BarChart>
  )
}


TaskChart.propTypes = {
  tasks: PropTypes.array.isRequired,
  task: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
}

const mapStateToProps = state => ({
  tasks: state.initialState.tasks,
  task: state.initialState.task,
})


export default connect(
  mapStateToProps,
)(TaskChart)
