export const toShowTimeSpend = timeSpendMilliseconds => {
  let hours = Math.floor((timeSpendMilliseconds / 3600000) % 60)
  hours = hours >= 10 ? hours : `0${hours}`
  let minutes = Math.floor((timeSpendMilliseconds / 60000) % 60)
  minutes = minutes >= 10 ? minutes : `0${minutes}`
  let seconds = Math.floor((timeSpendMilliseconds / 1000) % 60)
  seconds = seconds >= 10 ? seconds : `0${seconds}`
  const timeSpend = `${hours}:${minutes}:${seconds}`
  return timeSpend
}
