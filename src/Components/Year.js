import React from 'react'
import Month from './Month'

export default function year({ year, startDate, days }) {
  let months = getMonth(startDate, days)

  function getMonth(startDate, days) {
    let result = days
    let startY = year
    let startM
    let startD
    let daysInMonth
    let monthsArr = []

    if (year === startDate.getFullYear()) {
      startM = startDate.getMonth()
      startD = startDate.getDate()
    } else {
      startM = 0
      startD = 1
    }

    while (result > 0) {
      let start = new Date(startY, startM, startD)
      let end = new Date(startY, startM + 1)
      let inMonth = end.getTime() - start.getTime()
      daysInMonth = Math.round(inMonth / 86400000)
      if (result > daysInMonth) {
        monthsArr.push([startM, daysInMonth])
        result -= daysInMonth
        startM += 1
        startD = 1
      } else {
        monthsArr.push([startM, result])
        result = 0
      }
    }
    return monthsArr
  }

  return (
    <div>
      Year: {year}{' '}
      <div>
        {months.map((item) => {
          return <Month key={item[0]} month={item[0]} days={item[1]} />
        })}
      </div>
    </div>
  )
}
