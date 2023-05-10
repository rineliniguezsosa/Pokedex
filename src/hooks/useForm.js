import { useState,useEffect } from "react"

export const useForm = (initialState = {}) =>{
    const [form, setForm] = useState(initialState)

    const onInputchange = (event) =>{
        const {name,value} = event.target
    }
    return {
        onInputchange
    }
}