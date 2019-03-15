const generateRows = () => {
  function randomNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    rand = Math.floor(rand)
    return rand
  }
  const newRows = []
  const rowslength = new Date().getHours()
  const MaxTimeSpendMinutes = 40
  const minutesInterval = 20
  let timeStart = new Date(Date.UTC(2019, 0, 1, 0, 0, 0))
  for (let i = 0; i < rowslength; i += 1) {
    const randomMinutesInterval = randomNumber(0, minutesInterval)
    const randomSecondsInterval = randomNumber(0, 59)
    const timeInterval = new Date(Date.UTC(70, 0, 1, 0, randomMinutesInterval, randomSecondsInterval))
    timeStart = new Date(timeStart.getTime() + timeInterval.getTime())
    const randomSpendMinutes = randomNumber(0, MaxTimeSpendMinutes)
    const randomSpendSeconds = randomNumber(0, 59)
    const timeSpend = new Date(Date.UTC(70, 0, 1, 0, randomSpendMinutes, randomSpendSeconds))
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
