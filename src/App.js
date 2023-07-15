import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { CurrentWeek } from './Pages/CurrentWeek'
import { NextWeek } from './Pages/NextWeek'
import { Publishers } from './Pages/Publishers'
import { WeeklyReport } from './Pages/WeeklyReport'

export const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<CurrentWeek />} />
          <Route path="next" element={<NextWeek />} />
          <Route path="publishers" element={<Publishers />} />
          <Route path="report" element={<WeeklyReport />} />
        </Routes>
      </Layout>
    </div>
  )
}
