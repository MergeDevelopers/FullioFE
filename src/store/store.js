import { configureStore } from '@reduxjs/toolkit'
import pickDateReducer from './calenderSlice'

export default configureStore({
  reducer: {
    pickDate: pickDateReducer,
  },
})
