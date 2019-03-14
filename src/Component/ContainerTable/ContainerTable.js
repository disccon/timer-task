import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './reset.css'
import classNames from 'classnames'
import {
  AppBar, Button, Tab, Tabs, TextField,
} from '@material-ui/core'
import { Route, Switch } from 'react-router'
import styles from './ContainerTable.scss'
import TaskChart from '../TaskChart/TaskChart'
import TableTask from '../TableTask'
import {
  changeName, saveDataStart, closeModal, createNewTask, chooseTabs,
} from '../Actions'
import tableDataTasks from '../../helpers/tableDataTasks'

const cx = classNames.bind(styles)


class ContainerTable extends Component {
  startTimeHandlers = () => {
    const {
      date, isButtonState, isModalOpen, rows, nameTask, dateStart, saveDataStart, closeModal, createNewTask,
    } = this.props
    if (isButtonState) {
      saveDataStart(date)
    } else if (!isButtonState && !nameTask) {
      closeModal(isModalOpen)
    } else if (!isButtonState && nameTask) {
      createNewTask(date, nameTask, rows, dateStart)
    }
  }

  chooseTabsEvent = (event, value) => {
    const {
      chooseTabs, rows,
    } = this.props
    chooseTabs(value, rows.length)
  }

  closeModalEvent = () => {
    const {
      isModalOpen, closeModal,
    } = this.props
    closeModal(isModalOpen)
  }

  render() {
    const {
      date, isButtonState, nameTask, tabContainerValue, isModalOpen, changeName, dataTask,
    } = this.props
    const {
      closeModalEvent, startTimeHandlers, chooseTabsEvent,
    } = this

    return (
      <Fragment>
        {isModalOpen && (
          <div className={cx('modalWindow')}>
            <div className={cx('modalBlock')}>
              <h2>Empty task name</h2>
              <span>You are tryning close your task without name, enter the title and try again!</span>
              <button
                type='button'
                onClick={closeModalEvent}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
        <div className={cx('container')}>
          <TextField
            id='standard-dense'
            label='Name of your task'
            className={cx('standard-dense')}
            value={nameTask}
            onChange={changeName}
          />
          <div className={cx('timerCircle')}>
            <span>{date.toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}</span>
          </div>
          <Button
            variant='contained'
            className={cx('buttonStop')}
            onClick={startTimeHandlers}
          >
            {isButtonState ? 'START' : 'STOP'}
          </Button>
          <div className={cx('AppBarTable')} style={{ width: '1250px' }}>
            <AppBar position='static'>
              <Tabs
                variant='fullWidth'
                value={tabContainerValue}
                className={cx('tabsClass')}
                onChange={chooseTabsEvent}
              >
                <Tab component='a' label='TASKS LOG' />
                <Tab component='a' label='TASKS CHART' />
              </Tabs>
            </AppBar>
          </div>
          <Switch>
            <Route
              exact
              path='/'
              component={TableTask}
            />
            <Route
              exact
              path='/TaskChart'
              render={() => (
                <TaskChart dataTask={dataTask} />)}
            />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

ContainerTable.propTypes = {
  date: PropTypes.object.isRequired,
  dataTask: PropTypes.object.isRequired,
  dateStart: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.number,
  ]),
  isButtonState: PropTypes.bool.isRequired,
  nameTask: PropTypes.string.isRequired,
  tabContainerValue: PropTypes.number.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  rows: PropTypes.array.isRequired,
  changeName: PropTypes.func.isRequired,
  saveDataStart: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  createNewTask: PropTypes.func.isRequired,
  chooseTabs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  dataTask: tableDataTasks(state.initialState.rows),
  date: state.initialState.date,
  dateStart: state.initialState.dateStart,
  isButtonState: state.initialState.isButtonState,
  nameTask: state.initialState.nameTask,
  tabContainerValue: state.initialState.tabContainerValue,
  isModalOpen: state.initialState.isModalOpen,
  rows: state.initialState.rows,
  changeName: PropTypes.func.isRequired,
  saveDataStart: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  createNewTask: PropTypes.func.isRequired,
  chooseTabs: PropTypes.func.isRequired,
})


export default connect(
  mapStateToProps,
  {
    changeName, saveDataStart, closeModal, createNewTask, chooseTabs,
  },
)(ContainerTable)
