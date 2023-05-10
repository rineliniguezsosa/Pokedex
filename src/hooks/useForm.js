import { useState,useEffect } from "react"

export const useForm = (initialForm = {}) =>{
    const [formState, setFormState] = useState(initialForm)

    const onInputchange = (event) =>{
        const {name,value} = event.target;
        setFormState({
            ...formState,
            [name]:value
        })
    }  
    return {
        ...formState,
        formState,
        onInputchange
    }
}