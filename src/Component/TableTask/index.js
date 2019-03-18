import { connect } from 'react-redux'
import {
  pushTaskPage,
  deleteTask,
  generateNewTasks,
} from '../Actions'
import TableTask from './TableTask'

const mapStateToProps = state => ({
  tasks: state.initialState.tasks,
})


export default connect(
  mapStateToProps,
  {
    deleteTask, pushTaskPage, generateNewTasks,
  },
)(TableTask)
