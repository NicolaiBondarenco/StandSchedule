import React, { useState } from 'react'
import './ScheduleNav.scss'
import { Link, useNavigate } from 'react-router-dom'

const nav = [
  { title: 'Эта неделя', path: '/' },
  { title: 'Следующая неделя', path: '/next' },
  { title: 'Возвещатели', path: '/publishers' },
  { title: 'Отчет за неделю', path: '/report' },
]

export const ScheduleNav = () => {
  const [active, setActive] = useState(0)
  const navigate = useNavigate()

  const handleItemClick = (index, path) => {
    setActive(index)
    navigate(path)
  }

  return (
    <ul className="scheduleNav">
      {nav.map((item, index) => (
        <li
          className={
            index === active ? 'scheduleNav__item-active' : 'scheduleNav__item'
          }
          key={index}
          onClick={() => handleItemClick(index, item.path)}
        >
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}
