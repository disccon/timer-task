import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import {
  Button, Paper, Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core'
import styles from './TableTask.scss'
import { toShowTimeSpend } from '../../helpers/toShowTimeSpend'


const cx = classNames.bind(styles)


class TableTask extends Component {
  dateToLocaleTime = row => (
    new Date(row).toLocaleTimeString()
  )

  pushTaskPageEvent = rowId => () => {
    const {
      pushTaskPage,
    } = this.props
    pushTaskPage(rowId)
  }

  deleteTaskEvent = taskId => () => {
    const {
      deleteTask,
    } = this.props
    deleteTask(taskId)
  }

  render() {
    const {
      tasks, generateNewTasks,
    } = this.props
    return (
      <div className={cx('tableTask')}>
        <Paper className={cx('paperClass')}>
          <Table>
            <TableHead>
              <TableRow className={cx('tableHead')}>
                <TableCell>№</TableCell>
                <TableCell>Task</TableCell>
                <TableCell>Time start</TableCell>
                <TableCell>Time end</TableCell>
                <TableCell>Time spend</TableCell>
                <TableCell>Info</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map(task => (
                <TableRow key={task.id} className={cx('tableBody')}>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    {task.id}
                  </TableCell>
                  <TableCell className={cx('tableCell')}>{task.taskName}</TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    {this.dateToLocaleTime(task.timeStart)}
                  </TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    {this.dateToLocaleTime(task.timeEnd)}
                  </TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    {toShowTimeSpend(task.timeSpend)}
                  </TableCell>
                  <TableCell className={cx('tableCell')}>
                    <Button
                      variant='contained'
                      className={cx('buttonTable')}
                      onClick={this.pushTaskPageEvent(task.id)}
                    >
                      {' '}
                      INFO
                    </Button>
                  </TableCell>
                  <TableCell className={cx('tableCell')}>
                    <Button
                      variant='contained'
                      className={cx('buttonTable')}
                      onClick={this.deleteTaskEvent(task.id)}
                    >
                      {' '}
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Button
          variant='contained'
          className={cx('generate')}
          onClick={generateNewTasks}
        >
          GENERATE
        </Button>
      </div>
    )
  }
}

TableTask.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func,
  pushTaskPage: PropTypes.func,
  generateNewTasks: PropTypes.func,
}

export default TableTask
