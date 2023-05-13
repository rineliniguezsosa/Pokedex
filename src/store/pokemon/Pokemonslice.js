import { createSlice } from '@reduxjs/toolkit'


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState:{
    pokemones:[],
    messagerror:null,
  },
  reducers: {
    savingpokemons: (state) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { savingpokemons } = pokemonSlice.actions