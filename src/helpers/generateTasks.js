const generateTasks = () => {
  function randomNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    rand = Math.floor(rand)
    return rand
  }
  const newTasks = []
  const tasksLength = new Date().getHours()
  const MaxTimeSpendMinutes = 4
  const minutesInterval = 20
  let timeStart = new Date(2019, 0, 1, 0, 0, 0)
  for (let i = 0; i < tasksLength; i += 1) {
    const randomSecondsInterval = randomNumber(0, 59)
    const randomMinutesInterval = randomNumber(0, minutesInterval)
    const timeInterval = 1000 * randomSecondsInterval * randomMinutesInterval
    timeStart = new Date(timeStart.getTime() + timeInterval)
    const randomSpendSeconds = randomNumber(0, 59)
    const randomSpendMinutes = randomNumber(0, MaxTimeSpendMinutes)
    const timeSpend = 1000 * randomSpendSeconds * randomSpendMinutes
    const timeEnd = new Date(timeStart.getTime() + timeSpend)
    const task = {
      id: i + 1,
      taskName: `Task ${i + 1}`,
      timeStart,
      timeEnd,
      timeSpend,
    }
    newTasks.push(task)
    timeStart = timeEnd
  }
  return newTasks
}
export default generateTasks
