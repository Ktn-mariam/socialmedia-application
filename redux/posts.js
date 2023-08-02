import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const data = await fetch('https://dummyjson.com/posts').then((res) =>
    res.json(),
  )
  return data.posts
})

const postsSclice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload.post, ...state.posts]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default postsSclice.reducer
export const { addPost } = postsSclice.actions
