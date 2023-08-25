import { useState } from "react"

export const useForm = (initState = {})=>{

    const [form, setForm] = useState(initState);

    const adminCambios = ({target}) =>{
        const {name, value}= target;

        setForm(
            {
                ...form,
                [name]:value,
            })
    }
    return {form, setForm, adminCambios}
}