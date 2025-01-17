import { format, differenceInMinutes, differenceInHours, getYear, isValid } from 'date-fns'

export const fuzzyDateTime = function (utcTimestamp) {
  const JUST_NOW = 'Just now'
  const TIMESTAMP_FORMAT = 'MMMM d, yyyy h:mm aaaa'
  const TIMESTAMP_FORMAT_NO_YEAR = 'MMMM d, h:mm aaaa'
  const time = new Date(utcTimestamp)
  if (!isValid(time)) {
    return null
  }
  const now = new Date()
  const minutes = differenceInMinutes(now, time)
  const hours = differenceInHours(now, time)
  if (minutes <= 5) {
    return JUST_NOW
  } else if (minutes > 5 && hours < 1) {
    return `${minutes} mins ago`
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else if (getYear(time) === getYear(now)) {
    return format(time, TIMESTAMP_FORMAT_NO_YEAR)
  } else {
    return format(time, TIMESTAMP_FORMAT)
  }
}
