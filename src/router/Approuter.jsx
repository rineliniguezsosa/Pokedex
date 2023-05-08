import { Routes,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Loginpage } from '../auth'

export function Approuter() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Loginpage/>}></Route>
    </Routes>
    </>
  )
}
