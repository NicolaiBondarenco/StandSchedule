import { configureStore } from '@reduxjs/toolkit'
import currentWeek from './weeksSclice'

export const store = configureStore({
  reducer: {
    currentWeek,
  },
})
