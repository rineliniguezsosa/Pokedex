import { Routes,Route,Navigate } from 'react-router-dom'
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
       <Route path="/*" element={<Navigate to="/"/>}></Route>
    </Routes>
    </>
  )
}
