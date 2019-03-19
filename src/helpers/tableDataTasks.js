import tableDataOneTask from './tableDataOneTask'

const tableDataTasks = tasks => {
  let result
  if (tasks.length !== 0) {
    const data = []
    tasks.forEach(item => {
      const oneTask = tableDataOneTask(item.timeStart, item.timeSpend)
      data.push(oneTask)
    })
    data.reduce((previousValue, currentItem, index, arr) => {
      const rowSum = []
      currentItem.forEach((item, i) => {
        let oneHourSum
        const sumMinutes = previousValue[i].minutes + currentItem[i].minutes
        if (sumMinutes >= 60) {
          oneHourSum = { hour: i, minutes: 60 }
        } else {
          oneHourSum = { hour: i, minutes: sumMinutes }
        }
        rowSum.push(oneHourSum)
      })
      if ((arr.length - 1) === index) {
        result = rowSum
      }
      return rowSum
    })
  }
  return result
}

export default tableDataTasks
