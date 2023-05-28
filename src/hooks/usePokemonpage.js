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

    const Anterior = () =>{
        (page < 1) ? setPage(page) : setPage(page-5) //validaciones
    }

    const Siguiente = () =>{
        (page === 1280) ? setPage(page): setPage(page+5) //limitando la busqueda de los pokemons ya que son 1280
    }
    return {
        
    }
}