import { Routes,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Pokedex } from '../pokedex/pages/Pokedex'
import { Pokemonroutes } from '../pokedex/routes/Pokemonroutes'
import { Loginroutes } from '../auth/routes/Loginroutes'

export function Approuter() {
  const { autenticado } = useSelector(state => state.auth)
  console.log(autenticado)
  return (
    <>
    <Routes>
       
       <Route path="/" element={<Pokemonroutes/>}></Route>
        
       <Route path="/pokemon" element={<Pokedex/>}></Route>
        
    </Routes>
    </>
  )
}
