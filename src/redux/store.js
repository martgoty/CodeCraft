import { configureStore } from '@reduxjs/toolkit'

import { lessonsReducer } from './slices/lessonsSlice'
import { authReducer } from './slices/authSlice.js'

export const store = configureStore({
    reducer: {
        lessons: lessonsReducer,
        auth: authReducer,
    }
})