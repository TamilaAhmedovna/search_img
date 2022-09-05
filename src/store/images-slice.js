import { createSlice } from '@reduxjs/toolkit'

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {imagesList: []},
  reducers: {
    saveImages: (state, action) => {
      state.imagesList = [...action.payload]
    },
  },
})

export const { saveImages } = imagesSlice.actions

export default imagesSlice.reducer