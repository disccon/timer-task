export const CHANGE_NAME_TEXT_FIELD = 'CHANGE_NAME_TEXT_FIELD'
export const CHANGE_NAME_TEXT_FIELD__SUCCESS = 'CHANGE_NAME_TEXT_FIELD__SUCCESS'
export const CHANGE_NAME_TEXT_FIELD__FAILURE = 'CHANGE_NAME_TEXT_FIELD__FAILURE'

export const SAVE_DATASTART = 'SAVE_DATASTART'
export const SAVE_DATASTART__SUCCESS = 'SAVE_DATASTART__SUCCESS'
export const SAVE_DATASTART__FAILURE = 'SAVE_DATASTART__FAILURE'

export const START_TIME = 'START_TIME'
export const START_TIME__SUCCESS = 'START_TIME__SUCCESS'
export const START_TIME__FAILURE = 'START_TIME__FAILURE'

export const CHANGE_STATE_MODAL = 'CHANGE_STATE_MODAL'
export const CHANGE_STATE_MODAL__OPEN = 'CHANGE_STATE_MODAL__OPEN'
export const CHANGE_STATE_MODAL__CLOSE = 'CHANGE_STATE_MODAL__CLOSE'
export const CHANGE_STATE_MODAL__FAILURE = 'CHANGE_STATE_MODAL__FAILURE'

export const CREATE_NEWTASK = 'CREATE_NEWTASK'
export const CREATE_NEWTASK__SUCCESS = 'CREATE_NEWTASK__SUCCESS'
export const CREATE_NEWTASK__FAILURE = 'CREATE_NEWTASK__FAILURE'

export const SELECT_ACTIVE_TABS = 'SELECT_ACTIVE_TABS'
export const SELECT_ACTIVE_TABS__NOHAVE_TASK = 'SELECT_ACTIVE_TABS__NOHAVE_TASK'
export const SELECT_ACTIVE_TABS__SUCCESS = 'SELECT_ACTIVE_TABS__SUCCESS'
export const SELECT_ACTIVE_TABS__FAILURE = 'SELECT_ACTIVE_TABS__FAILURE'

export const PUSH_TASKPAGE = 'CHANGE_TASKPAGE'
export const PUSH_TASKPAGE__SUCCESS = 'CHANGE_TASKPAGE__SUCCESS'
export const PUSH_TASKPAGE__FAILURE = 'CHANGE_TASKPAGE__FAILURE'

export const DELETE_TASK = 'DELETE_TASK'
export const DELETE_TASK__SUCCESS = 'DELETE_TASK__SUCCESS'
export const DELETE_TASK__FAILURE = 'DELETE_TASK__FAILURE'

export const GENERATE_NEW_TASKS = 'GENERATE_NEW_TASKS'
export const GENERATE_NEW_TASKS__SUCCESS = 'GENERATE_NEW_TASKS__SUCCESS'
export const GENERATE_NEW_TASKS__FAILURE = 'GENERATE_NEW_TASKS__FAILURE'

export const RETURN_HOMEPAGE = 'RETURN_HOMEPAGE'
export const RETURN_HOMEPAGE__SUCCESS = 'RETURN_HOMEPAGE__SUCCESS'
export const RETURN_HOMEPAGE__FAILURE = 'RETURN_HOMEPAGE__FAILURE'


export const changeNameTextField = ({ target }) => ({
  type: CHANGE_NAME_TEXT_FIELD,
  payload: {
    textFieldName: target.value,
  },
})

export const saveDataStart = () => ({
  type: SAVE_DATASTART,
})

export const startTime = timeSpendTimer => ({
  type: START_TIME,
  payload: {
    timeSpendTimer,
  },
})

export const changeStateModal = () => ({
  type: CHANGE_STATE_MODAL,
})

export const createNewTask = () => ({
  type: CREATE_NEWTASK,
})

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: { id },
})

export const selectActiveTabs = tabContainerValue => ({
  type: SELECT_ACTIVE_TABS,
  payload: { tabContainerValue },
})

export const pushTaskPage = taskPage => ({
  type: PUSH_TASKPAGE,
  payload: { taskPage },
})

export const generateNewTasks = () => ({
  type: GENERATE_NEW_TASKS,
})

export const returnHomePage = () => ({
  type: RETURN_HOMEPAGE,
})
