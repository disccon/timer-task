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
    const { isRunData, startTime, timeSpendTimer } = this.props
    if (isRunData) {
      startTime(timeSpendTimer)
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
    const { history } = this.props
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route path='/TaskPage/:id' component={TaskPage} />
            <Route path='/NodFound' component={NodFound} />
            <Route path='/' component={ContainerTable} />
            <Redirect to='/NodFound' />
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}

App.propTypes = {
  initialState: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isRunData: PropTypes.bool.isRequired,
  timeSpendTimer: PropTypes.number.isRequired,
  startTime: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  initialState: state.initialState,
  isRunData: state.initialState.isRunData,
  timeSpendTimer: state.initialState.timeSpendTimer,
})

export default connect(
  mapStateToProps,
  {
    startTime,
  },
)(App)
