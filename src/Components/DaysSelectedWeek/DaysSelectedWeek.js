import React from 'react'
import './DaysSelectedWeek.scss'

export const DaysSelectedWeek = ({ start, end }) => {
  const replaceDate = (str) => str?.replaceAll('-', '.')

  return (
    <div className="daysSelectedWeek">
      <p>
        Неделя С {replaceDate(start)} До {replaceDate(end)}
      </p>
    </div>
  )
}
