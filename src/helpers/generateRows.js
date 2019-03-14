const generateRows = (rowsLength, MaxTimeSpendHours, MaxTimeSpendMinutes) => {
  function randomNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    rand = Math.floor(rand)
    return rand
  }

  const newRows = []
  const dayMinutes = 60 * 24 // 1440
  const dayMinutesWorkTask = ((MaxTimeSpendHours * 60) + MaxTimeSpendMinutes) * rowsLength
  const minutesLeft = dayMinutes - dayMinutesWorkTask
  const minutesInterval = Math.floor(minutesLeft / rowsLength) - 1
  let timeStart = new Date(Date.UTC(2019, 0, 1, 0, 0, 0))
  for (let i = 0; i < rowsLength; i += 1) {
    const randomMinutesInterval = randomNumber(0, minutesInterval)
    const randomSecondsInterval = randomNumber(0, 59)
    const timeInterval = new Date(Date.UTC(2019, 0, 1, 0, randomMinutesInterval, randomSecondsInterval))
    timeStart = new Date(timeStart.getTime() + timeInterval.getTime())
    const randomSpendHours = randomNumber(0, MaxTimeSpendHours)
    const randomSpendMinutes = randomNumber(0, MaxTimeSpendMinutes)
    const randomSpendSeconds = randomNumber(0, 59)
    const timeSpend = new Date(Date.UTC(70, 0, 1, randomSpendHours, randomSpendMinutes, randomSpendSeconds))
   const timeEnd = new Date(timeStart.getTime() + timeSpend.getTime())
    const oneRow = {
      id: i + 1,
      task: `Task ${i + 1}`,
      timeStart,
      timeEnd,
      timeSpend,
    }
    newRows.push(oneRow)
    timeStart = timeEnd
  }
  return newRows
}
export default generateRows
