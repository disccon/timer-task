import { connect } from 'react-redux'
import {
  changeTaskPage,
  deleteTask,
  generateNewRows,
} from '../Actions'
import TableTask from './TableTask'

const mapStateToProps = state => ({
  rows: state.initialState.rows,
})


export default connect(
  mapStateToProps,
  {
    deleteTask, changeTaskPage, generateNewRows,
  },
)(TableTask)
