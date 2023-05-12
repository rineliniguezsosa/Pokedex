import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    status:'sinautenticar',
    email:null,
    password:null
  },
  reducers: {
    login: (state,{payload}) => {
      state.status = 'autenticado';
      state.email = payload.email;
      state.password = payload.password;
    },
    logout:(state) =>{
      state.status = 'sinautenticar'
    }
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions