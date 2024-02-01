import {ZodType, z} from "zod";

export interface RegisterFormData {
    firstName : string;
    lastName : string;
    email : string;
    password: string;
    confirmPassword: string;
}

export const registerFormScheme : ZodType = z.object({
    firstName : z.string().min(3),
    email : z.string().email(),
    password : z.string().min(7),
    confirmPassword : z.string().min(7)
}).refine((data) => data.password === data.confirmPassword, {
    message : "Password doesn't match",
    path: ['confirmPassword']
})