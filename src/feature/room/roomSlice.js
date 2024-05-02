import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = roomSlice.actions

export default roomSlice.reducer