import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    token: null,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload.token
    },
    removeToken: (state) => {
      state.token = null
    },
  },
})

export default authSlice.reducer
export const { addToken, removeToken } = authSlice.actions
