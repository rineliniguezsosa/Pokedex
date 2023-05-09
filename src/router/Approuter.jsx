import { Routes,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Pokemonroutes } from '../pokedex/routes/Pokemonroutes'
import { Loginroutes } from '../auth/routes/Loginroutes'

export function Approuter() {
  const { autenticado } = useSelector(state => state.auth)
  console.log(autenticado)
  return (
    <>
    <Routes>
       {autenticado
       ?
       <Route path="/*" element={<Pokemonroutes/>}></Route>
       :
       <Route path="/*" element={<Loginroutes/>}></Route>
       }
    </Routes>
    </>
  )
}
