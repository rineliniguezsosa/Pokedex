import { Routes,Route } from 'react-router-dom'
import { Pokedex } from '../pages/Pokedex'

export const Pokemonroutes = () => {
  return (
    <Routes>
        <Route path="pokedex" element={<Pokedex/>}></Route>
    </Routes>
  )
}
