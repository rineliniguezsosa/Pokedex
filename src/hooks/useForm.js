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

    const onSubmitform = (event) =>{
        event.preventDefault()
        console.log(formState)
    } 
    return {
        ...formState,
        formState,
        onInputchange,
        onSubmitform
    }
}