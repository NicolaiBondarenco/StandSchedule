import React from 'react'
import './ListSchedule.scss'
import { ItemSchedule } from '../ItemSchedule/ItemSchedule'

export const ListSchedule = ({ items }) => {
  return (
    <ul className="listSchedule">
      {items.map((item) => (
        <ItemSchedule title={item} />
      ))}
    </ul>
  )
}
