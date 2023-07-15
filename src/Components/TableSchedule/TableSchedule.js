import React from 'react'
import './TableSchedule.scss'
import { ListSchedule } from '../ListSchedule/ListSchedule'

import report from '../../Assets/images/report.png'

const realArr = ['09:00', ' Савчук Владимир', ' Савчук Владимир ', report]

export const TableSchedule = () => {
  return (
    <div className="tableSchedule">
      <h1 className="tableSchedule__title">Понедельник 26.06 "Стелуца"</h1>
      <ul className="tableSchedule__list">
        <li className="tableSchedule__list-item">Время</li>
        <li className="tableSchedule__list-item">Возвещатель</li>
        <li className="tableSchedule__list-item">Возвещатель</li>
        <li className="tableSchedule__list-item">Отчет</li>
      </ul>
      <ListSchedule items={realArr} />
    </div>
  )
}
