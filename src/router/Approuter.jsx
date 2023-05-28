import { Routes,Route,Navigate } from 'react-router-dom'
import { Pokemonroutes } from '../pokedex/routes/Pokemonroutes'
import { Loginroutes } from '../auth/routes/Loginroutes'
import { useCheckauth } from '../hooks'

export function Approuter() {
  const { status } = useCheckauth()
  return (
    <>
    <Routes>
       {status === 'autenticado'
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
