import { useState,useEffect } from "react"

export const useForm = (initialState = {}) =>{
    const [form, setForm] = useState(initialState)

    const onInputchange = (event) =>{
        const {name,value} = event.target
        setForm({
            ...form,
            [name]:value
        })
    }
    return {
        onInputchange
    }
}