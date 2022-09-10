import React from 'react'

function Month({ month, days }) {
  const monthsNameArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  return (
    <div>
      month: {monthsNameArr[month]} days: {days}
    </div>
  )
}

export default Month
