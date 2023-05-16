import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { pokemonSlice } from './pokemon'



export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
  },
})