import { createSlice, current } from '@reduxjs/toolkit'

export const imagesSlice = createSlice({
  name: 'images',
  initialState: [],
  reducers: {
    saveImages: (state, action) => {
      state.push(...action.payload)
    },
  },
})

export const { saveImages } = imagesSlice.actions

export default imagesSlice.reducer