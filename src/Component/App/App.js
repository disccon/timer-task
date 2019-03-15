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


class App extends Component {
  componentDidMount() {
    const { isRunData, date, startTime } = this.props
    if (isRunData) {
      startTime(date)
    }
    window.addEventListener('unload', this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener('unload', this.onUnload)
  }

  onUnload = () => {
    const { initialState } = this.props
    localStorage.setItem('state', JSON.stringify({ ...initialState }))
  }

  render() {
    const { history, taskPage } = this.props
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route path={`/TaskPage/${taskPage}`} component={TaskPage} />
            <Route path='/' component={ContainerTable} />
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
  history: PropTypes.object.isRequired,
  taskPage: PropTypes.number.isRequired,
  isRunData: PropTypes.bool.isRequired,
  date: PropTypes.object.isRequired,

  startTime: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  initialState: state.initialState,
  taskPage: state.initialState.taskPage,
  isRunData: state.initialState.isRunData,
  date: state.initialState.date,
})

export default connect(
  mapStateToProps,
  {
    startTime,
  },
)(App)
