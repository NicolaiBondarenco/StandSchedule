import React, { useEffect } from 'react'
import './ListSchedule.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ItemSchedule } from '../ItemSchedule/ItemSchedule'
import { fetchCurrentAndNextWeeks } from '../../Store/weeksSclice'

export const ListSchedule = ({ items }) => {
  const { allData } = useSelector((state) => state.currentWeek)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentAndNextWeeks())
  }, [])

  return (
    <ul className="listSchedule">
      {items.map((item) => (
        <ItemSchedule key={item} title={item} />
      ))}
    </ul>
  )
}
