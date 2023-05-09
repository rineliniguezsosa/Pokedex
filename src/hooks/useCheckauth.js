import { useSelector } from 'react-redux'


export const useCheckauth = () =>{
    const { status } = useSelector(state => state.auth)
    return {

    }
}