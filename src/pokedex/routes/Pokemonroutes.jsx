import { Routes,Route,Navigate } from 'react-router-dom'
import { Pokemon } from '../pages/Pokemon'

export const Pokemonroutes = () => {
  return (
    <Routes>
        <Route path="pokemon" element={<Pokedex/>}></Route>

        <Route path="/*" element={<Navigate to="/pokemon"/>}></Route>
    </Routes>
  )
}
