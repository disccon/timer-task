import initialState from '../stubs/initialState'
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

  CREATE_NEWTASK__SUCCESS,
  CREATE_NEWTASK__FAILURE,

  SELECT_ACTIVE_TABS__NOHAVE_TASK,
  SELECT_ACTIVE_TABS__SUCCESS,
  SELECT_ACTIVE_TABS__FAILURE,

  PUSH_TASKPAGE__SUCCESS,
  PUSH_TASKPAGE__FAILURE,

  DELETE_TASK__SUCCESS,
  DELETE_TASK__FAILURE,

  GENERATE_NEW_TASKS__SUCCESS,
  GENERATE_NEW_TASKS__FAILURE,

  RETURN_HOMEPAGE__SUCCESS,
  RETURN_HOMEPAGE__FAILURE,
} from '../Component/Actions'

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME_TEXT_FIELD__SUCCESS: {
      return {
        ...state,
        textFieldName: action.payload.textFieldName,
        error: undefined,
      }
    }
    case CHANGE_NAME_TEXT_FIELD__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case SAVE_DATASTART__SUCCESS: {
      return {
        ...state,
        dateStart: action.payload.dateStart,
        isRunData: true,
        isButtonState: false,
        error: undefined,
      }
    }
    case SAVE_DATASTART__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case START_TIME__SUCCESS: {
      return {
        ...state,
        timeSpendTimer: action.payload.timeSpendTimer,
        error: undefined,
      }
    }
    case START_TIME__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case CHANGE_STATE_MODAL__OPEN: {
      return {
        ...state,
        isModalOpen: true,
        error: undefined,
      }
    }
    case CHANGE_STATE_MODAL__CLOSE: {
      return {
        ...state,
        isModalOpen: false,
        error: undefined,
      }
    }
    case CHANGE_STATE_MODAL__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case CREATE_NEWTASK__SUCCESS: {
      return {
        ...state,
        timeSpendTimer: action.payload.timeSpendTimer,
        dateStart: false,
        isRunData: false,
        isButtonState: true,
        textFieldName: '',
        tasks: action.payload.newTasks,
        error: undefined,
      }
    }
    case CREATE_NEWTASK__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case SELECT_ACTIVE_TABS__NOHAVE_TASK: {
      return {
        ...state,
      }
    }
    case SELECT_ACTIVE_TABS__SUCCESS: {
      return {
        ...state,
        dataChart: action.payload.dataChart,
        tabContainerValue: action.payload.tabContainerValue,
        error: undefined,
      }
    }
    case SELECT_ACTIVE_TABS__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case DELETE_TASK__SUCCESS: {
      return {
        ...state,
        tasks: action.payload.tasks,
        taskPage: 1,
        error: undefined,
      }
    }
    case DELETE_TASK__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case PUSH_TASKPAGE__SUCCESS: {
      return {
        ...state,
        task: action.payload.task,
        dataChart: action.payload.dataChart,
        taskPage: action.payload.taskPage,
        error: undefined,
      }
    }
    case PUSH_TASKPAGE__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case GENERATE_NEW_TASKS__SUCCESS: {
      return {
        ...state,
        tasks: action.payload.newTasks,
        error: undefined,
      }
    }
    case GENERATE_NEW_TASKS__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case RETURN_HOMEPAGE__SUCCESS: {
      return {
        ...state,
      }
    }
    case RETURN_HOMEPAGE__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    default:
      return state
  }
}
