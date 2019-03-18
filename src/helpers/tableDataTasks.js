const tableDataTasks = tasks => {
  let result
  if (tasks.length !== 0) {
    const data = []
    tasks.forEach(item => {
      for (let j = 0; j < 24; j += 1) {
        const oneTask = []
        let nowHours2
        let nowMinutes
        let nowHours
        const timeSpendHours = Math.floor((item.timeSpend / 3660000) % 60)
        const timeSpendMinutes = Math.floor((item.timeSpend / 60000) % 60)
        const timeStartHours = new Date(item.timeStart).getHours()
        const timeStartMinutes = new Date(item.timeStart).getMinutes()
        let timeSpendHoursLeft
        let timeSpendMinutesLeft
        for (let i = 0; i < 24; i += 1) {
          let oneHour
          if (i === timeStartHours) {
            if (timeSpendHours < 1) {
              const minutes = 60 - timeStartMinutes
              if (minutes > timeSpendMinutes) {
                oneHour = { hour: i, minutes: timeSpendMinutes }
              } else if (minutes <= timeSpendMinutes) {
                oneHour = { hour: i, minutes }
                nowMinutes = timeSpendMinutes - minutes
                nowHours2 = i + 1
              }
            } else if (timeSpendHours >= 1) {
              const minutes = 60 - timeStartMinutes
              oneHour = { hour: i, minutes }
              const timeSpend = item.timeSpend - (minutes * 60000)
              timeSpendHoursLeft = Math.floor((timeSpend / 3660000) % 60)
              timeSpendMinutesLeft = Math.floor((timeSpend / 60000) % 60)
              nowHours = i + 1
            }
          } else if (i === nowHours2) {
            oneHour = { hour: i, minutes: nowMinutes }
          } else if (i === nowHours && timeSpendHoursLeft >= 1) {
            timeSpendHoursLeft -= 1
            nowHours += 1
            oneHour = { hour: i, minutes: 60 }
          } else if (i === nowHours && timeSpendHoursLeft === 0) {
            oneHour = { hour: i, minutes: timeSpendMinutesLeft }
          } else {
            oneHour = { hour: i, minutes: 0 }
          }
          oneTask.push(oneHour)
        }
        if (j === 23) {
          data.push(oneTask)
        }
      }
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
