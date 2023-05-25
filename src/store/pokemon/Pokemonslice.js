import { createSlice } from '@reduxjs/toolkit'


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState:{
    pokemonlist:[],
    infopokemon:[],
    messagerror:null,
  },
  reducers: {
    savingpokemonlist: (state,{payload}) => {
      state.pokemonlist = [...payload]
    },
    savingpokemon:(state,{payload})=>{
      state.infopokemon = [...payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { savingpokemonlist,savingpokemon } = pokemonSlice.actions