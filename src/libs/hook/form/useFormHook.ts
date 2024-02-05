import { useState } from "react"
import { ChangeValueEvent } from "../../../components/form/InputField"

interface UseFormParams {
    defaultValue : any
}

interface UseFormHook {
    onChangeValue: (e : ChangeValueEvent) => void;
    form : any
}

export default function useFormHook(params : UseFormParams) : UseFormHook {
    const [form, setForm] = useState(params.defaultValue)

    const onChangeValue = (e: ChangeValueEvent) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return {
        onChangeValue : onChangeValue,
        form : form
    }
}