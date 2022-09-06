import { createSlice, current } from '@reduxjs/toolkit'
import { api } from '../config/config'

export const imagesSlice = createSlice({
	name: 'images',
	initialState: { imagesList: [], page: api.defaultPage },
	reducers: {
		saveImages: (state, action) => {
			state.imagesList = [...action.payload]
			state.page = api.defaultPage
		},
		addImages: (state, action) => {
			state.imagesList.push(...action.payload.images)
			state.page = action.payload.page
		},
	},
})

export const { saveImages, addImages } = imagesSlice.actions

export default imagesSlice.reducer