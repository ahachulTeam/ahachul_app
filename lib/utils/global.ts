import dayjs from 'dayjs'

export const getElapsedTime = (createdAt: string) => {
  const now = dayjs()
  const createdAtDayjs = dayjs(createdAt)
  const diffInDays = now.diff(createdAtDayjs, 'day')
  const diffInHours = now.diff(createdAtDayjs, 'hour')
  const diffInMinutes = now.diff(createdAtDayjs, 'minute')

  if (diffInDays >= 2) {
    return `${diffInDays}일 전`
  } else if (diffInDays === 1) {
    return '어제'
  } else if (diffInHours > 0) {
    return `${diffInHours}시간 전`
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes}분 전`
  }

  return '방금'
}
