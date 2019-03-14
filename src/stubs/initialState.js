const localState = localStorage.getItem('state')
let initialState
if (localState) {
  const state = JSON.parse(localState)
  if (state.dateStart) {
    initialState = {
      date: new Date(new Date().getTime() - new Date(state.dateStart).getTime()),
      dateStart: new Date(state.dateStart),
      nameTask: state.nameTask,
      tabContainerValue: state.tabContainerValue,
      isRunData: true,
      isButtonState: state.isButtonState,
      isModalOpen: false,
      taskPage: state.taskPage,
      rows: state.rows,
    }
  } else {
    initialState = {
      date: new Date(Date.UTC(2019, 0, 1)),
      dateStart: false,
      nameTask: state.nameTask,
      tabContainerValue: state.tabContainerValue,
      isRunData: false,
      isButtonState: state.isButtonState,
      isModalOpen: false,
      taskPage: state.taskPage,
      rows: state.rows,
    }
  }
} else {
  initialState = {
    date: new Date(Date.UTC(2019, 0, 1)),
    dateStart: false,
    isRunData: false,
    nameTask: '',
    tabContainerValue: 0,
    isModalOpen: false,
    isButtonState: true,
    taskPage: 1,
    rows: [{
      id: 1,
      task: 'lorem ipsum d...',
      timeStart: new Date(Date.UTC(2019, 0, 1, 7, 28, 14)),
      timeEnd: new Date(Date.UTC(2019, 0, 1, 8, 31, 23)),
      timeSpend: new Date(Date.UTC(2019, 0, 1, 1, 3, 9)),
    },
    {
      id: 2,
      task: 'long task',
      timeStart: new Date(Date.UTC(2019, 0, 1, 8, 51, 57)),
      timeEnd: new Date(Date.UTC(2019, 0, 1, 10, 53, 38)),
      timeSpend: new Date(Date.UTC(2019, 0, 1, 2, 1, 41)),
    },
    {
      id: 3,
      task: 'some new',
      timeStart: new Date(Date.UTC(2019, 0, 1, 12, 39, 51)),
      timeEnd: new Date(Date.UTC(2019, 0, 1, 12, 46, 19)),
      timeSpend: new Date(Date.UTC(2019, 0, 1, 0, 6, 28)),
    },
    {
      id: 4,
      task: 'last one task',
      timeStart: new Date(Date.UTC(2019, 0, 1, 14, 50, 20)),
      timeEnd: new Date(Date.UTC(2019, 0, 1, 14, 50, 53)),
      timeSpend: new Date(Date.UTC(2019, 0, 1, 0, 0, 33)),
    }],
  }
}

export default initialState
