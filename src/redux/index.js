import { configureStore } from '@reduxjs/toolkit'
import quizSlice from './slices/slice'

export default configureStore({
  reducer: {
    counter: quizSlice,
  },
})