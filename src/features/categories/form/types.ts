import { z } from "zod";

export interface CategoryFormData {
    id? : number;
    name : string;
    description : string;
}

export const categoryValidationSchema = z.object({
    name : z.string().min(3),
    description : z.string().min(3)
})
