const tableDataOneTask = (timeStart, timeSpendMilliseconds) => {
  const data = []
  let nowHours2
  let nowMinutes
  let nowHours
  const timeSpendHours = Math.floor((timeSpendMilliseconds / 3660000) % 60)
  const timeSpendMinutes = Math.floor((timeSpendMilliseconds / 60000) % 60)
  const timeStartHours = timeStart.getHours()
  const timeStartMinutes = timeStart.getMinutes()
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
        const timeSpend = timeSpendMilliseconds - (minutes * 60000)
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
    data.push(oneHour)
  }
  return data
}

export default tableDataOneTask