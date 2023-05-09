import { useEffect } from 'react'
import { useSelector } from 'react-redux'


export const useCheckauth = () =>{
    const { status } = useSelector(state => state.auth) //lee el status de auth sinautenticar | autenticado
    return {

    }
}