import { useState } from "react"
import { useDispatch } from "react-redux"
import { startfetchingpokeapi } from "../store"

export const useForm = (initialForm = {}) =>{
    const [formState, setFormState] = useState(initialForm)
    const dispatch = useDispatch()
    
    const onInputchange = (event) =>{
        const {name,value} = event.target;
       
        setFormState({
            ...formState,
            [name]:value
        })
    }

    const onSubmitform = (event) =>{
        event.preventDefault()

        if(formState.pokemon.trim().length < 1){ return; }

        event.target.reset();
    }
    return {
        ...formState,
        formState,
        onInputchange,
        onSubmitform
    }
}