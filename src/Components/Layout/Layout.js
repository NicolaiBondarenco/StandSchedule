import React from 'react'
import { Header } from '../Header/Header'
import { ScheduleNav } from '../ScheduleNav/ScheduleNav'
import './Layout.scss'

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <ScheduleNav />
      {children}
    </div>
  )
}
