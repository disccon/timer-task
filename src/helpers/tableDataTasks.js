const tableDataTasks = rows => {
  const data = []
  rows.forEach(item => {
    for (let j = 0; j < 24; j += 1) {
      const oneTask = []
      let nowHours2
      let nexHours
      let time
      let nowMinutes
      let nowHours
      for (let i = 0; i < 24; i += 1) {
        let oneHour
        if (i === item.timeStart.getUTCHours()) {
          if (item.timeSpend.getUTCHours() < 1) {
            const minutes = 60 - item.timeStart.getUTCMinutes()
            if (minutes > item.timeSpend.getUTCMinutes()) {
              oneHour = { hour: i, minutes: item.timeSpend.getUTCMinutes() }
            }
            if (minutes < item.timeSpend.getUTCMinutes()) {
              oneHour = { hour: i, minutes }
              nowMinutes = item.timeSpend.getUTCMinutes() - minutes
              nowHours2 = i + 1
            }
          }
          if (item.timeSpend.getUTCHours() >= 1) {
            const minutes = 60 - item.timeStart.getUTCMinutes()
            oneHour = { hour: i, minutes }
            time = new Date(item.timeSpend - (minutes * 60000))
            nexHours = time.getUTCHours()
            nowHours = i + 1
            nowMinutes = time.getUTCMinutes()
          }
        } else if (i === nowHours2) {
          oneHour = { hour: i, minutes: nowMinutes }
        } else if (i === nowHours && nexHours >= 1) {
          nexHours -= 1
          nowHours += 1
          oneHour = { hour: i, minutes: 60 }
        } else if (i === nowHours && nexHours === 0) {
          oneHour = { hour: i, minutes: nowMinutes }
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
  let result
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
  return result
}

export default tableDataTasks
