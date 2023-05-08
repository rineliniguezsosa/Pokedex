import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    autenticado:false,
    email:null,
    password:null
  },
  reducers: {
    login: (state,action) => {
      state.counter += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment,decrementby } = authSlice.actions