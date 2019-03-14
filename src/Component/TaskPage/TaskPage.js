import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import {
  Button, Paper, Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core'
import { connect } from 'react-redux'
import styles from './TableTask.scss'
import TaskChart from '../TaskChart/TaskChart'
import { returnHomePage } from '../Actions'
import tableDataOneTask from '../../helpers/tableDataOneTask'

const cx = classNames.bind(styles)


const TaskPage = ({ row, returnHomePage, dataTask }) => (
  <div className={cx('taskPage')}>
    <Button className={cx('returnButton')} onClick={returnHomePage}>
      return Table
    </Button>
    <Paper className={cx('paperClass')}>
      <Table>
        <TableHead>
          <TableRow className={cx('tableHead')}>
            <TableCell>№</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Time start</TableCell>
            <TableCell>Time end</TableCell>
            <TableCell>Time spend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={row.id} className={cx('tableBody')}>
            <TableCell
              component='th'
              scope='row'
              className={cx('tableCell')}
            >
              {row.id}
            </TableCell>
            <TableCell className={cx('tableCell')}>{row.task}</TableCell>
            <TableCell
              className={cx('tableCell')}
            >
              {new Date(row.timeStart).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}
            </TableCell>
            <TableCell className={cx('tableCell')}>
              {new Date(row.timeEnd).toLocaleTimeString('en-US', {
                timeZone: 'UTC',
                hour12: false,
              })}
            </TableCell>
            <TableCell
              className={cx('tableCell')}
            >
              {new Date(row.timeSpend).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <TaskChart dataTask={dataTask} />
  </div>
)


TaskPage.propTypes = {
  row: PropTypes.object.isRequired,
  returnHomePage: PropTypes.func.isRequired,
  dataTask: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  const { rows, taskPage } = state.initialState
  function findRow(element) {
    if (element.id === taskPage) {
      return element
    }
  }
  const row = rows.find(findRow)
  return {
    dataTask: tableDataOneTask(new Date(row.timeStart), new Date(row.timeSpend)),
    row,
  }
}


export default connect(
  mapStateToProps,
  { returnHomePage },
)(TaskPage)
