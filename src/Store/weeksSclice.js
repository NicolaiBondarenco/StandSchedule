import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../Utils/axios'

export const fetchCurrentAndNextWeeks = createAsyncThunk(
  'weeks/fetchCurrentAndNextWeeks',
  async () => {
    const { data } = await axios.get(
      '/stand/templates?congregationId=2&standId=1',
    )
    return data.data
  },
)

export const fetchWeeksDate = createAsyncThunk(
  'weeks/fetchWeeksDate',
  async () => {
    const { data } = await axios.get('/week_days')
    return data.data
  },
)

const initialState = {
  allData: [],
  currentWeeksDays: [],
  status: true,
  error: false,
}

export const weeksSclice = createSlice({
  name: 'weeks',
  initialState,
  reducers: {
    getAllData: (state, action) => {
      state.allData += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentAndNextWeeks.pending, (state) => {
      state.status = true
    })
    builder.addCase(fetchCurrentAndNextWeeks.fulfilled, (state, action) => {
      console.log(action.payload)
      state.status = false
      state.allData = action.payload
      state.error = false
    })
    builder.addCase(fetchCurrentAndNextWeeks.rejected, (state) => {
      state.status = false
      state.error = true
    })
  },
})

export const { getAllData } = weeksSclice.actions

export default weeksSclice.reducer
