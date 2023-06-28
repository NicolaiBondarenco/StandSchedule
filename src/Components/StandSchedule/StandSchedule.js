import React from 'react'
import { ScheduleNav } from '../ScheduleNav/ScheduleNav'
import { TableSchedule } from '../TableSchedule/TableSchedule'

import './StandSchedule.scss'

export const StandSchedule = () => {
  return (
    <div className="standSchedule">
      <div className="standSchedule__top">
        <p>Неделя С 26.06.2023 До 02.07.2023</p>
      </div>
      <ScheduleNav />
      <TableSchedule />
    </div>
  )
}
