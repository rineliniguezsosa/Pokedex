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
      console.log(action)
    },
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions