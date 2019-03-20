const tableDataOneTask = task => {
  const { timeStart, timeSpend } = task
  const data = []
  let timeSpendMinutes = timeSpend / 1000 / 60
  const timeStartHours = new Date(timeStart).getHours()
  const timeStartMinutes = new Date(timeStart).getMinutes()
  for (let i = 0; i < 24; i += 1) {
    let oneHour
    let minutes = 0
    if (i === timeStartHours) {
      const minInThisHour = 60 - timeStartMinutes
      minutes = minInThisHour >= timeSpendMinutes ? timeSpendMinutes : minInThisHour
      oneHour = { hour: i, minutes: Math.floor(minutes) }
    } else if (timeSpendMinutes > 0 && i > timeStartHours) {
      minutes = timeSpendMinutes > 60 ? 60 : timeSpendMinutes
      oneHour = { hour: i, minutes: Math.floor(minutes) }
    }
    oneHour = { hour: i, minutes: Math.floor(minutes) }
    timeSpendMinutes -= minutes
    data.push(oneHour)
  }
  return data
}

export default tableDataOneTask
