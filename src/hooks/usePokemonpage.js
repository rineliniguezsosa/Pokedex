import { useEffect,useState } from "react"
import { useDispatch } from "react-redux"
import { startfetchingpokemonlist } from "../store"

export const usePokemonpage = (numberpage) =>{
    const dispatch = useDispatch()

    const [page,setPage] = useState(numberpage)

    useEffect(() => {
        dispatch(startfetchingpokemonlist(page))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    return {
        
    }
}