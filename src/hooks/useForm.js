import { useState,useEffect } from "react"

export const useForm = (initialState = {}) =>{
    const [form, setForm] = useState(initialState)

    const onInputchange = (event) =>{
        console.log(event)
    }
    return {
        onInputchange
    }
}