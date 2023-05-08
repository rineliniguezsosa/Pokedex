import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    autenticado:false,
    email:null,
    password:null
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrementby:(state,action) =>{
        state.counter+=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment,decrementby } = authSlice.actions