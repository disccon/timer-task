import { put, delay, cancel } from 'redux-saga/effects'
import { push } from 'connected-react-router'


import {
  CHANGE_NAME__CHANGE,
  CHANGE_NAME__FAILURE,

  SAVE_DATASTART__SUCCESS,
  SAVE_DATASTART__FAILURE,

  START_TIME__SUCCESS,
  START_TIME__FAILURE,

  CHANGE_MODAL__OPEN,
  CHANGE_MODAL__CLOSE,
  CHANGE_MODAL__FAILURE,

  CREATE_NEWTASK,
  CREATE_NEWTASK__SUCCESS,
  CREATE_NEWTASK__FAILURE,

  CHOOSE_TABS__NOHAVE_TASK,
  CHOOSE_TABS__SUCCESS,
  CHOOSE_TABS__FAILURE,

  CHANGE_TASKPAGE__SUCCESS,
  CHANGE_TASKPAGE__FAILURE,

  DELETE_TASK__SUCCESS,
  DELETE_TASK__FAILURE,

  GENERATE_NEWROWS__SUCCESS,
  GENERATE_NEWROWS__FAILURE,

  RETURN_HOMEPAGE__SUCCESS,
  RETURN_HOMEPAGE__FAILURE,

  startTime,
} from '../Component/Actions'
import generateRows from '../helpers/generateRows'

export function* changeNameSaga(action) {
  try {
    yield put({
      type: CHANGE_NAME__CHANGE,
      payload: { nameTask: action.payload.nameTask },
    })
  } catch (error) {
    yield put({
      type: CHANGE_NAME__FAILURE,
      error,
    })
  }
}

export function* startTimeSaga(action) {
  if (action.type === CREATE_NEWTASK) {
    yield cancel()
  }
  const { date } = action.payload
  try {
    let newData = date
    while (true) {
      yield delay(1000)
      newData = new Date(newData.getTime() + 1000)
      yield put({
        type: START_TIME__SUCCESS,
        payload: { date: newData },
      })
    }
  } catch (error) {
    yield put({
      type: START_TIME__FAILURE,
      error,
    })
  }
}

export function* saveDataStartSaga(action) {
  const { date } = action.payload
  try {
    const newData = new Date()
    yield put({
      type: SAVE_DATASTART__SUCCESS,
      payload: {
        dateStart: new Date(Date.UTC(newData.getFullYear(), newData.getMonth(), newData.getDay(),
          newData.getHours(), newData.getMinutes(), newData.getSeconds())),
      },
    })
    yield put(startTime(date))
  } catch (error) {
    yield put({
      type: SAVE_DATASTART__FAILURE,
      error,
    })
  }
}


export function* changeModalSaga(action) {
  const { isModalOpen } = action.payload
  try {
    if (isModalOpen) {
      yield put({
        type: CHANGE_MODAL__CLOSE,
      })
    } else {
      yield put({
        type: CHANGE_MODAL__OPEN,
      })
    }
  } catch (error) {
    yield put({
      type: CHANGE_MODAL__FAILURE,
      error,
    })
  }
}


export function* createNewTaskSaga(action) {
  const {
    nameTask, rows, dateStart, date,
  } = action.payload
  try {
    let newRows
    const newData = new Date()
    if (rows.length === 0) {
      newRows = [...rows, {
        id: 1,
        task: nameTask,
        timeStart: dateStart,
        timeEnd: new Date(Date.UTC(newData.getFullYear(), newData.getMonth(), newData.getDay(),
          newData.getHours(), newData.getMinutes(), newData.getSeconds())),
        timeSpend: date,
      }]
    } else {
      newRows = [...rows, {
        id: rows[rows.length - 1].id + 1,
        task: nameTask,
        timeStart: dateStart,
        timeEnd: new Date(Date.UTC(newData.getFullYear(), newData.getMonth(), newData.getDay(),
          newData.getHours(), newData.getMinutes(), newData.getSeconds())),
        timeSpend: date,
      }]
    }
    yield put({
      type: CREATE_NEWTASK__SUCCESS,
      payload: {
        data: new Date(Date.UTC(2019, 0, 1)),
        newRows,
      },
    })
  } catch (error) {
    yield put({
      type: CREATE_NEWTASK__FAILURE,
      error,
    })
  }
}

export function* chooseTabsSaga(action) {
  const {
    tabContainerValue, rowsLength,
  } = action.payload
  try {
    if (rowsLength === 0) {
      yield put({
        type: CHOOSE_TABS__NOHAVE_TASK,
      })
    } else if (tabContainerValue === 0) {
      yield put(push('/'))
      yield put({
        type: CHOOSE_TABS__SUCCESS,
        payload: {
          tabContainerValue: 0,
        },
      })
    } else if (tabContainerValue === 1) {
      yield put(push('/TaskChart'))
      yield put({
        type: CHOOSE_TABS__SUCCESS,
        payload: {
          tabContainerValue: 1,
        },
      })
    }
  } catch (error) {
    yield put({
      type: CHOOSE_TABS__FAILURE,
      error,
    })
  }
}


export function* deleteTaskSaga(action) {
  try {
    const newRows = action.payload.rows.filter(arrIndex => arrIndex.id !== action.payload.id)
    yield put({
      type: DELETE_TASK__SUCCESS,
      payload: { rows: newRows },
    })
  } catch (error) {
    yield put({
      type: DELETE_TASK__FAILURE,
      error,
    })
  }
}

export function* changeTaskPageSaga(action) {
  const { taskPage } = action.payload
  try {
    yield put({
      type: CHANGE_TASKPAGE__SUCCESS,
      payload: {
        taskPage,
      },
    })
    yield put(push(`/TaskPage/${taskPage}`))
  } catch (error) {
    yield put({
      type: CHANGE_TASKPAGE__FAILURE,
      error,
    })
  }
}


export function* generateNewRowsSaga() {
  try {
    const newRows = generateRows()
    yield put({
      type: GENERATE_NEWROWS__SUCCESS,
      payload: {
        newRows,
      },
    })
  } catch (error) {
    yield put({
      type: GENERATE_NEWROWS__FAILURE,
      error,
    })
  }
}


export function* returnHomePageSaga() {
  try {
    yield put({
      type: RETURN_HOMEPAGE__SUCCESS,
    })
    yield put(push('/'))
  } catch (error) {
    yield put({
      type: RETURN_HOMEPAGE__FAILURE,
      error,
    })
  }
}
