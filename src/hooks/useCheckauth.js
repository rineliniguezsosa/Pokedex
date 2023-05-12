import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { login,logout } from '../store'


export const useCheckauth = () =>{
    const { status } = useSelector(state => state.auth) //lee el status de auth sinautenticar | autenticado 
    const dispatch = useDispatch()

    useEffect(()=>{
        const usuario = localStorage.getItem('usuario')
    },[])

    return {
        status
    }
}