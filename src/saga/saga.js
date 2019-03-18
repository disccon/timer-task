import {
  put, delay, cancel, select,
} from 'redux-saga/effects'
import { push } from 'connected-react-router'


import {
  CHANGE_NAME_TEXT_FIELD__SUCCESS,
  CHANGE_NAME_TEXT_FIELD__FAILURE,

  SAVE_DATASTART__SUCCESS,
  SAVE_DATASTART__FAILURE,

  START_TIME__SUCCESS,
  START_TIME__FAILURE,

  CHANGE_STATE_MODAL__OPEN,
  CHANGE_STATE_MODAL__CLOSE,
  CHANGE_STATE_MODAL__FAILURE,

  CREATE_NEWTASK,
  CREATE_NEWTASK__SUCCESS,
  CREATE_NEWTASK__FAILURE,

  SELECT_ACTIVE_TABS__NOHAVE_TASK,
  SELECT_ACTIVE_TABS__SUCCESS,
  SELECT_ACTIVE_TABS__FAILURE,

  PUSH_TASKPAGE__SUCCESS,
  PUSH_TASKPAGE__FAILURE,

  DELETE_TASK__SUCCESS,
  DELETE_TASK__FAILURE,

  GENERATE_NEW_TASKS__FAILURE,
  GENERATE_NEW_TASKS__SUCCESS,

  RETURN_HOMEPAGE__SUCCESS,
  RETURN_HOMEPAGE__FAILURE,

  startTime,
} from '../Component/Actions'
import generateTasks from '../helpers/generateTasks'

export function* changeNameTextFieldSaga(action) {
  try {
    yield put({
      type: CHANGE_NAME_TEXT_FIELD__SUCCESS,
      payload: { textFieldName: action.payload.textFieldName },
    })
  } catch (error) {
    yield put({
      type: CHANGE_NAME_TEXT_FIELD__FAILURE,
      error,
    })
  }
}

export function* startTimeSaga(action) {
  if (action.type === CREATE_NEWTASK) {
    yield cancel()
  }
  let { timeSpendTimer } = action.payload
  try {
    while (true) {
      yield delay(1000)
      timeSpendTimer += 1000
      yield put({
        type: START_TIME__SUCCESS,
        payload: { timeSpendTimer },
      })
    }
  } catch (error) {
    yield put({
      type: START_TIME__FAILURE,
      error,
    })
  }
}

export function* saveDataStartSaga() {
  const timeSpendTimer = yield select(state => state.initialState.timeSpendTimer)
  try {
    yield put({
      type: SAVE_DATASTART__SUCCESS,
      payload: {
        dateStart: new Date(),
      },
    })
    yield put(startTime(timeSpendTimer))
  } catch (error) {
    yield put({
      type: SAVE_DATASTART__FAILURE,
      error,
    })
  }
}


export function* changeStateModalSaga() {
  const isModalOpen = yield select(state => state.initialState.isModalOpen)
  try {
    if (isModalOpen) {
      yield put({
        type: CHANGE_STATE_MODAL__CLOSE,
      })
    } else {
      yield put({
        type: CHANGE_STATE_MODAL__OPEN,
      })
    }
  } catch (error) {
    yield put({
      type: CHANGE_STATE_MODAL__FAILURE,
      error,
    })
  }
}


export function* createNewTaskSaga() {
  const state = yield select(state => state.initialState)
  const {
    textFieldName, tasks, dateStart, timeSpendTimer,
  } = state
  try {
    const id = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
    const newTasks = [...tasks, {
      id,
      taskName: textFieldName,
      timeStart: dateStart,
      timeEnd: new Date(),
      timeSpend: timeSpendTimer,
    }]
    yield put({
      type: CREATE_NEWTASK__SUCCESS,
      payload: {
        timeSpendTimer: 0,
        newTasks,
      },
    })
  } catch (error) {
    yield put({
      type: CREATE_NEWTASK__FAILURE,
      error,
    })
  }
}

export function* selectActiveTabsSaga(action) {
  const {
    tabContainerValue,
  } = action.payload
  const tasksLength = yield select(state => state.initialState.tasks.length)
  try {
    if (tasksLength === 0) {
      yield put({
        type: SELECT_ACTIVE_TABS__NOHAVE_TASK,
      })
    } else if (tabContainerValue === 0) {
      yield put(push('/'))
      yield put({
        type: SELECT_ACTIVE_TABS__SUCCESS,
        payload: {
          tabContainerValue: 0,
        },
      })
    } else if (tabContainerValue === 1) {
      yield put(push('/Home/TaskChart'))
      yield put({
        type: SELECT_ACTIVE_TABS__SUCCESS,
        payload: {
          tabContainerValue: 1,
        },
      })
    }
  } catch (error) {
    yield put({
      type: SELECT_ACTIVE_TABS__FAILURE,
      error,
    })
  }
}


export function* deleteTaskSaga(action) {
  try {
    const tasks = yield select(state => state.initialState.tasks)
    const newTasks = tasks.filter(arrIndex => arrIndex.id !== action.payload.id)
    yield put({
      type: DELETE_TASK__SUCCESS,
      payload: {
        tasks: newTasks,
      },
    })
  } catch (error) {
    yield put({
      type: DELETE_TASK__FAILURE,
      error,
    })
  }
}

export function* pushTaskPageSaga(action) {
  const { taskPage } = action.payload
  try {
    yield put({
      type: PUSH_TASKPAGE__SUCCESS,
      payload: {
        taskPage,
      },
    })
    yield put(push(`/TaskPage/${taskPage}`))
  } catch (error) {
    yield put({
      type: PUSH_TASKPAGE__FAILURE,
      error,
    })
  }
}


export function* generateNewTasksSaga() {
  try {
    const newTasks = generateTasks()
    yield put({
      type: GENERATE_NEW_TASKS__SUCCESS,
      payload: {
        newTasks,
      },
    })
  } catch (error) {
    yield put({
      type: GENERATE_NEW_TASKS__FAILURE,
      error,
    })
  }
}


export function* returnHomePageSaga() {
  try {
    yield put({
      type: RETURN_HOMEPAGE__SUCCESS,
    })
    yield put(push('/Home'))
  } catch (error) {
    yield put({
      type: RETURN_HOMEPAGE__FAILURE,
      error,
    })
  }
}
