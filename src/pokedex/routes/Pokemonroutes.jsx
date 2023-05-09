import { Routes,Route,Navigate } from 'react-router-dom'
import { Pokemon } from '../pages/Pokemon'

export const Pokemonroutes = () => {
  return (
    <Routes>
        <Route path="pokemon" element={<Pokemon/>}></Route>

        <Route path="/*" element={<Navigate to="/pokemon"/>}></Route>
    </Routes>
  )
}
