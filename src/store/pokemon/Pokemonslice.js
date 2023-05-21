import { createSlice } from '@reduxjs/toolkit'


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState:{
    pokemones:[],
    messagerror:null,
  },
  reducers: {
    savingpokemonlist: (state,{payload}) => {
      state.pokemones = [...payload]
    },
    savingpokemon:(state,{payload})=>{
      state.pokemones = [...payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { savingpokemonlist,savingpokemon } = pokemonSlice.actions