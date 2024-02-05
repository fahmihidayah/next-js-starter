import { ZodType } from "zod"
import { FormState } from "../types/base";

export interface ValidationParams {
    validationScheme : ZodType;
    form : any
}
export default function validate(params : ValidationParams) : FormState | undefined{
    const validationResult = params.validationScheme?.safeParse(params.form)

    if (params.validationScheme) {
        if (!validationResult?.success) {
            return {
                isError: true,
                fieldErrors: validationResult?.error.flatten().fieldErrors,
            }
        }
    }
    
}