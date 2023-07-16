import React, { useState, useEffect } from 'react'
import './ScheduleNav.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeeksDate } from '../../Store/weeksSclice'
import { DaysSelectedWeek } from '../DaysSelectedWeek/DaysSelectedWeek'
import { nav } from '../../Constants'

export const ScheduleNav = () => {
  const [active, setActive] = useState(0)
  const { weeksDays } = useSelector((state) => state.currentWeek)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeeksDate())
  }, [])

  const handleItemClick = (index, path) => {
    setActive(index)
    navigate(path)
  }

  return (
    <>
      <DaysSelectedWeek
        start={
          active === 0
            ? weeksDays.currentWeekStartDate
            : weeksDays.nextWeekStartDate
        }
        end={
          active === 0
            ? weeksDays.currentWeekEndDate
            : weeksDays.nextWeekEndDate
        }
      />
      <ul className="scheduleNav">
        {nav.map((item, index) => (
          <li
            className={
              index === active
                ? 'scheduleNav__item-active'
                : 'scheduleNav__item'
            }
            key={index}
            onClick={() => handleItemClick(index, item.path)}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
