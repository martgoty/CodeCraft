import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from '../../axios'

export const fetchRegister = createAsyncThunk('/auth/fetchRegister' , async (params, { rejectWithValue }) => {
    try {
        const { data, statusText} = await axios.post('/rregister', params)

        if(!statusText){
            throw new Error('Registration Failed')
        }

        return data

    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const initialState = {
    data: null,
    status: 'pending',
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegister.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.date = null
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.error = null
                state.data = action.payload
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
                console.log(state.error)
                state.date = null
            })
    }
})

export const authReducer = authSlice.reducer

export const selectIsAuth = (state) => Boolean(state.auth.data)

export const selectUserName = (state) => state.auth.data?.email

export const { logout } =  authSlice.actions