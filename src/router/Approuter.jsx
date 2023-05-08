import { Routes,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Loginpage } from '../auth'
import { Pokedex } from '../pokedex/pages/Pokedex'

export function Approuter() {
  const { autenticado } = useSelector(state => state.auth)
  console.log(autenticado)
  return (
    <>
    <Routes>
        { autenticado 
        ?
        <Route path="/pokemon*" element={<Pokemonroutes/>}></Route>
        :
        <Route path="/*" element={<Loginpage/>}></Route>
        }
    </Routes>
    </>
  )
}
