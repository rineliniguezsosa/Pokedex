import { Routes,Route,Navigate } from 'react-router-dom'
import { Pokedex } from '../pages/Pokedex'

export const Pokemonroutes = () => {
  return (
    <Routes>
        <Route path="pokedex" element={<Pokedex/>}></Route>

        <Route path="/*" element={<Navigate to="/pokemon"/>}></Route>
    </Routes>
  )
}
