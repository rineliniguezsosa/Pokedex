import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchingpokemon } from "../store"

export const useForm = (initialForm = {}) =>{
    const [pokemon, setPokemon] = useState(initialForm)
    const dispatch = useDispatch()

    const onInputchange = (event) =>{
        const {name,value} = event.target;
       
        setPokemon({
            ...pokemon,
            [name]:value
        })
    }

    const onSubmitform = (event) =>{
        event.preventDefault()
        
        if(pokemon.pokemon.trim().length < 1){ return; }
        
        dispatch(fetchingpokemon(pokemon)) //enviamos el pokemon

        event.target.reset();
    }
    return {
        ...pokemon,
        pokemon,
        onInputchange,
        onSubmitform
    }
}