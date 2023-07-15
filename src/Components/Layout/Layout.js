import React from 'react'
import { Header } from '../Header/Header'
import { ScheduleNav } from '../ScheduleNav/ScheduleNav'
import './Layout.scss'
import { DaysSelectedWeek } from '../DaysSelectedWeek/DaysSelectedWeek'

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <DaysSelectedWeek />
      <ScheduleNav />
      {children}
    </div>
  )
}
