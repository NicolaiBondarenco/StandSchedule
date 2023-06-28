import './App.css'
import { Header } from './Components/Header/Header'
import { StandSchedule } from './Components/StandSchedule/StandSchedule'

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <StandSchedule />
      </div>
    </div>
  )
}
