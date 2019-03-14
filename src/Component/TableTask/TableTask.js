import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import {
  Button, Paper, Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core'
import styles from './TableTask.scss'

const cx = classNames.bind(styles)


class TableTask extends Component {
  dateToLocaleTime = row => (
    new Date(row).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })
  )

  changeTaskPageEvent = rowId => () => {
    const {
      changeTaskPage,
    } = this.props
    changeTaskPage(rowId)
  }

  deleteTaskEvent = (rowId, rows) => () => {
    const {
      deleteTask,
    } = this.props
    deleteTask(rowId, rows)
  }

  render() {
    const {
      rows, generateNewRows,
    } = this.props
    const {
      dateToLocaleTime, changeTaskPageEvent, deleteTaskEvent,
    } = this
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
              {rows.map(row => (
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
                    {dateToLocaleTime(row.timeStart)}
                  </TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    {dateToLocaleTime(row.timeEnd)}
                  </TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    {dateToLocaleTime(row.timeSpend)}
                  </TableCell>
                  <TableCell className={cx('tableCell')}>
                    <Button
                      variant='contained'
                      className={cx('buttonTable')}
                      onClick={changeTaskPageEvent(row.id)}
                    >
                      {' '}
                      INFO
                    </Button>
                  </TableCell>
                  <TableCell className={cx('tableCell')}>
                    <Button
                      variant='contained'
                      className={cx('buttonTable')}
                      onClick={deleteTaskEvent(row.id, rows)}
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
          onClick={generateNewRows}
        >
          GENERATE
        </Button>
      </div>
    )
  }
}

export default TableTask

TableTask.propTypes = {
  rows: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeTaskPage: PropTypes.func.isRequired,
  generateNewRows: PropTypes.func.isRequired,
}
