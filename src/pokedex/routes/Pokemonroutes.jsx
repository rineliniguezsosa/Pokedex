import { Routes,Route,Navigate } from 'react-router-dom'
import { Pokemon } from '../pages/Pokemon'
import { PokemonShiny } from '../pages/PokemonShiny'

export const Pokemonroutes = () => {
  return (
    <Routes>
        <Route path="pokemon" element={<Pokemon/>}></Route>

        <Route path="pokemonshiny/:pokemonId" element={<PokemonShiny/>}></Route> 

        <Route path="/*" element={<Navigate to="/pokemon"/>}></Route>
    </Routes>
  )
}
