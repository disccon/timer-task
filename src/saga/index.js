import { takeLatest, all } from 'redux-saga/effects'
import {
  changeNameTextFieldSaga,
  saveDataStartSaga,
  startTimeSaga,
  changeStateModalSaga,
  createNewTaskSaga,
  selectActiveTabsSaga,
  pushTaskPageSaga,
  deleteTaskSaga,
  generateNewTasksSaga,
  returnHomePageSaga,
} from './saga'

import {
  CHANGE_NAME_TEXT_FIELD,
  SAVE_DATASTART,
  START_TIME,
  CHANGE_STATE_MODAL,
  CREATE_NEWTASK,
  SELECT_ACTIVE_TABS,
  PUSH_TASKPAGE,
  DELETE_TASK,
  GENERATE_NEW_TASKS,
  RETURN_HOMEPAGE,
} from '../Component/Actions'


export default function* rootSaga() {
  yield all([
    takeLatest(CHANGE_NAME_TEXT_FIELD, changeNameTextFieldSaga),
    takeLatest(SAVE_DATASTART, saveDataStartSaga),
    takeLatest([START_TIME, CREATE_NEWTASK], startTimeSaga),
    takeLatest(CHANGE_STATE_MODAL, changeStateModalSaga),
    takeLatest(CREATE_NEWTASK, createNewTaskSaga),
    takeLatest(SELECT_ACTIVE_TABS, selectActiveTabsSaga),
    takeLatest(DELETE_TASK, deleteTaskSaga),
    takeLatest(PUSH_TASKPAGE, pushTaskPageSaga),
    takeLatest(GENERATE_NEW_TASKS, generateNewTasksSaga),
    takeLatest(RETURN_HOMEPAGE, returnHomePageSaga),
  ])
}
