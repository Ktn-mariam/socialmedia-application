import { configureStore } from '@reduxjs/toolkit'
import postsSliceReducer from './posts'
import authSliceReducer from './auth'

export const store = configureStore({
  reducer: {
    allPosts: postsSliceReducer,
    tokenData: authSliceReducer,
  },
})
