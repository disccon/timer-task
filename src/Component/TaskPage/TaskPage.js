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
import { toShowTimeSpend } from '../../helpers/toShowTimeSpend'

const cx = classNames.bind(styles)


const TaskPage = ({ task, returnHomePage }) => (
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
          <TableRow key={task.id} className={cx('tableBody')}>
            <TableCell
              component='th'
              scope='row'
              className={cx('tableCell')}
            >
              {task.id}
            </TableCell>
            <TableCell className={cx('tableCell')}>{task.taskName}</TableCell>
            <TableCell
              className={cx('tableCell')}
            >
              {new Date(task.timeStart).toLocaleTimeString()}
            </TableCell>
            <TableCell className={cx('tableCell')}>
              {new Date(task.timeEnd).toLocaleTimeString()}
            </TableCell>
            <TableCell
              className={cx('tableCell')}
            >
              {toShowTimeSpend(task.timeSpend)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <TaskChart />
  </div>
)


TaskPage.propTypes = {
  task: PropTypes.object.isRequired,
  returnHomePage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  task: state.initialState.task,
})


export default connect(
  mapStateToProps,
  { returnHomePage },
)(TaskPage)
