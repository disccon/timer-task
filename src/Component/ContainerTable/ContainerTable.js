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
  changeNameTextField, saveDataStart, changeStateModal, createNewTask, selectActiveTabs,
} from '../Actions'
import tableDataTasks from '../../helpers/tableDataTasks'
import { toShowTimeSpend } from '../../helpers/toShowTimeSpend'

const cx = classNames.bind(styles)


class ContainerTable extends Component {
  startTimeHandlers = () => {
    const {
      isButtonState, textFieldName, saveDataStart, changeStateModal, createNewTask,
    } = this.props
    if (isButtonState) {
      saveDataStart()
    } else if (!isButtonState && !textFieldName) {
      changeStateModal()
    } else if (!isButtonState && textFieldName) {
      createNewTask()
    }
  }

  selectActiveTabsEvent = (event, value) => {
    const {
      selectActiveTabs,
    } = this.props
    selectActiveTabs(value)
  }

  render() {
    const {
      timeSpendTimer, isButtonState, textFieldName, tabContainerValue, isModalOpen, changeNameTextField, dataTask, changeStateModal, match,
    } = this.props
    const {
      startTimeHandlers, selectActiveTabsEvent,
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
                onClick={changeStateModal}
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
            value={textFieldName}
            onChange={changeNameTextField}
          />
          <div className={cx('timerCircle')}>
            <span>{toShowTimeSpend(timeSpendTimer)}</span>
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
                onChange={selectActiveTabsEvent}
              >
                <Tab component='a' label='TASKS LOG' />
                <Tab component='a' label='TASKS CHART' />
              </Tabs>
            </AppBar>
          </div>
          <Switch>
            <Route
              exact
              path={match.path}
              component={TableTask}
            />
            <Route
              exact
              path={`${match.path}/TaskChart`}
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
  match: PropTypes.object.isRequired,
  timeSpendTimer: PropTypes.number.isRequired,
  dataTask: PropTypes.array.isRequired,
  isButtonState: PropTypes.bool.isRequired,
  textFieldName: PropTypes.string.isRequired,
  tabContainerValue: PropTypes.number.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  changeNameTextField: PropTypes.func.isRequired,
  saveDataStart: PropTypes.func.isRequired,
  changeStateModal: PropTypes.func.isRequired,
  createNewTask: PropTypes.func.isRequired,
  selectActiveTabs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  dataTask: tableDataTasks(state.initialState.tasks),
  timeSpendTimer: state.initialState.timeSpendTimer,
  isButtonState: state.initialState.isButtonState,
  textFieldName: state.initialState.textFieldName,
  tabContainerValue: state.initialState.tabContainerValue,
  isModalOpen: state.initialState.isModalOpen,

})


export default connect(
  mapStateToProps,
  {
    changeNameTextField, saveDataStart, changeStateModal, createNewTask, selectActiveTabs,
  },
)(ContainerTable)
