import { Navigate, Route, Routes } from "react-router-dom"
import { Loginpage } from "../pages/Loginpage"

export const Loginroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Loginpage/>}></Route>

        <Route path="/*" element={<Navigate to="/"/>}></Route> 
    </Routes>
  )
}
