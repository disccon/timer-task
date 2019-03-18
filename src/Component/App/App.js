import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../ContainerTable/reset.css'
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import NodFound from '../NodFound/NodFound'
import ContainerTable from '../ContainerTable/ContainerTable'
import TaskPage from '../TaskPage/TaskPage'
import { startTime } from '../Actions'
import tableDataOneTask from '../../helpers/tableDataOneTask'


class App extends Component {
  componentDidMount() {
    const { isRunData, startTime, timeSpendTimer } = this.props
    if (isRunData) {
      startTime(timeSpendTimer)
    }
    window.addEventListener('unload', this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener('unload', this.onUnload)
  }

  findTask = element => {
    const { taskPage } = this.props
    if (element.id === taskPage) {
      return element
    }
  }

  oneTask = () => {
    const { tasks } = this.props
    return tasks.find(this.findTask)
  }

  dataTask = () => {
    const task = this.oneTask()
    return tableDataOneTask(new Date(task.timeStart), task.timeSpend)
  }

  onUnload = () => {
    const { initialState } = this.props
    localStorage.setItem('state', JSON.stringify({ ...initialState }))
  }

  render() {
    const { history } = this.props
    const { dataTask, oneTask } = this
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route
              path='/TaskPage/:id'
              render={() => (
                <TaskPage
                  task={oneTask()}
                  dataTask={dataTask()}
                />
              )}
            />
            <Route
              exact
              path='/'
              render={() => <Redirect to='/Home' />}
            />
            <Route path='/Home' component={ContainerTable} />
            <Redirect to='/NodFound' />
            <Route to='/NodFound' component={NodFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}

App.propTypes = {
  initialState: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  isRunData: PropTypes.bool.isRequired,
  startTime: PropTypes.func.isRequired,
  timeSpendTimer: PropTypes.number.isRequired,
  taskPage: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  initialState: state.initialState,
  isRunData: state.initialState.isRunData,
  timeSpendTimer: state.initialState.timeSpendTimer,
  tasks: state.initialState.tasks,
  taskPage: state.initialState.taskPage,

})

export default connect(
  mapStateToProps,
  {
    startTime,
  },
)(App)
