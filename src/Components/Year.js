import React from 'react'
import Month from './Month'

export default function year({ year, diffDays, currentYear }) {
  let days
  if (currentYear === year) {
    days = diffDays
  } else {
    days = 28 - diffDays
  }

  return (
    <div>
      Year: {year}, <Month days={days} />
    </div>
  )
}
