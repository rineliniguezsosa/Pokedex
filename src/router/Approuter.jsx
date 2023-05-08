import { Routes,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Loginpage } from '../auth'
import { Pokemonroutes } from '../pokedex/routes/Pokemonroutes'

export function Approuter() {
  const { autenticado } = useSelector(state => state.auth)
  console.log(autenticado)
  return (
    <>
    <Routes>
        <Route path="/" element={<Loginpage/>}></Route>
    </Routes>
    </>
  )
}
