import React, { useState } from 'react'
import './ScheduleNav.scss'

const nav = ['Эта неделя', 'Следующая неделя', 'Возвещатели', 'Отчет за неделю']

export const ScheduleNav = () => {
  const [active, setActive] = useState(0)

  return (
    <ul className="scheduleNav">
      {nav.map((item, index) => (
        <li
          className={
            index === active ? 'scheduleNav__item-active' : 'scheduleNav__item'
          }
          key={index}
          onClick={() => setActive(index)}
        >
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  )
}
