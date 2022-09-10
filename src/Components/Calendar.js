import React from 'react'
import Year from './Year'

export default function calendar({ startDate, period }) {
  let years = getYear(startDate, period)

  function getYear(date, period) {
    let result = period
    let startY = date.getFullYear()
    let startM = date.getMonth()
    let startD = date.getDate()
    let daysInYear
    let yearsArr = []

    while (result > 0) {
      let start = new Date(startY, startM, startD)
      let end = new Date(startY + 1, 0)
      let inYear = end.getTime() - start.getTime()
      daysInYear = Math.round(inYear / 86400000)
      if (result > daysInYear) {
        yearsArr.push([startY, daysInYear])
        result -= daysInYear
        startY += 1
        startM = 0
        startD = 1
      } else {
        yearsArr.push([startY, result])
        result = 0
      }
    }
    return yearsArr
  }

  return (
    <>
      {years.map((item) => {
        return (
          <Year
            key={item[0]}
            year={item[0]}
            startDate={startDate}
            days={item[1]}
          />
        )
      })}
    </>
  )
}
