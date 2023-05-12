import { Routes,Route,Navigate } from 'react-router-dom'
import { Pokemonroutes } from '../pokedex/routes/Pokemonroutes'
import { Loginroutes } from '../auth/routes/Loginroutes'

export function Approuter() {
  return (
    <>
    <Routes>
       {
       ?
       <Route path="/*" element={<Pokemonroutes/>}></Route>
       :
       <Route path="/*" element={<Loginroutes/>}></Route>
       }
       <Route path="/*" element={<Navigate to="/"/>}></Route>
    </Routes>
    </>
  )
}
