import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    autenticado:false,
    email:null,
    password:null
  },
  reducers: {
    login: (state,{payload}) => {
      state.autenticado = true;
      state.email = payload.email;
      state.password = payload.password;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions