import React from 'react'
import './ItemSchedule.scss'
import report from '../../Assets/images/report.png'

export const ItemSchedule = ({ title }) => {
  const image = () => {
    return <img className="itemSchedule__image" src={report} alt="Report" />
  }

  return <li className="itemSchedule">{title === report ? image() : title}</li>
}
