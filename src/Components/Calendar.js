import React from 'react'
import Year from './Year'

export default function calendar() {
  //сколько дней до конца года, что бы решить один год создавать или два
  const nowDate = new Date(2022, 11, 21, 20)
  const currentYear = nowDate.getFullYear()
  const endDate = new Date(currentYear + 1, 0)
  const diffTime = endDate.getTime() - nowDate.getTime()
  const diffDays = Math.round(diffTime / 86400000)
  let years = [currentYear]
  if (diffDays <= 27) {
    years.push(currentYear + 1)
  }

  return (
    <>
      {years.map((item) => {
        return (
          <Year
            key={item}
            diffDays={diffDays}
            year={item}
            currentYear={currentYear}
          />
        )
      })}
    </>
  )
}
