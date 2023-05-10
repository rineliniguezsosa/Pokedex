import { useState } from "react"

export const useForm = (initialForm = {}) =>{
    const [formState, setFormState] = useState(initialForm)

    const onInputchange = (event) =>{
        const {name,value} = event.target;
        console.log(value)
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