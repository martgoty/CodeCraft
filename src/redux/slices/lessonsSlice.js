import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchLessons = createAsyncThunk('/lessons/fetchLessons', async (id, { rejectWithValue }) => {
    try {
        const { data, statusText} = await axios.get(`/lessons?student=${id}`)

        if(!statusText){
            throw new Error('Server Error')
        }

        return data
    } catch (error) {
        return rejectWithValue(error.data)
    }
})

const initialState = {
    items: [],
    status: 'pending',
    error: null
}

const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLessons.pending, (state) => {
                state.status = 'pending'
                state.error = null
            })
            .addCase(fetchLessons.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.items = action.payload
            })
            .addCase(fetchLessons.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    }
})

export const lessonsReducer = lessonsSlice.reducer
