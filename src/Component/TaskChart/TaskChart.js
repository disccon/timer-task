import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import PropTypes from 'prop-types'


const TaskChart = ({ dataTask }) => (
  <BarChart
    width={1250}
    height={300}
    data={dataTask}
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

TaskChart.propTypes = {
  dataTask: PropTypes.array.isRequired,
}

export default TaskChart
