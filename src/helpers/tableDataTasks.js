import tableDataOneTask from './tableDataOneTask'

const tableDataTasks = tasks => {
  let result
  if (tasks.length !== 0) {
    const data = []
    tasks.forEach(item => {
      const oneTask = tableDataOneTask(item)
      data.push(oneTask)
    })
    data.reduce((previousValue, currentItem, index, arr) => {
      const rowSum = []
      currentItem.forEach((item, i) => {
        const sumMinutes = previousValue[i].minutes + currentItem[i].minutes
        const oneHourSum = sumMinutes >= 60 ? { hour: i, minutes: 60 } : { hour: i, minutes: sumMinutes }
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
