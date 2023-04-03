import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => { 
      state.counter -= 1
     },
    reset: (state) => { 
        state.counter = 0
     },
     incrementBy: (state , actions) => {
      state.counter += actions.payload
    },
  },
})

export const { increment , decrement ,reset , incrementBy } = counterSlice.actions;

export default counterSlice.reducer